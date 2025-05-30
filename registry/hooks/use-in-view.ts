import { useState, useEffect, RefObject, useRef } from 'react'

type AmountType = 'some' | 'all' | number

interface UseInViewOptions {
	/**
	 * The root element to use as the viewport. Defaults to the window viewport.
	 */
	root?: RefObject<Element>

	/**
	 * A margin to add to the viewport to change the detection area.
	 * Use multiple values to adjust top/right/bottom/left, e.g. "0px -20px 0px 100px".
	 * @default "0px"
	 */
	margin?: string

	/**
	 * If true, once an element is in view, useInView will stop observing
	 * the element and always return true.
	 * @default false
	 */
	once?: boolean

	/**
	 * Set an initial value to return until the element has been measured.
	 * @default false
	 */
	initial?: boolean

	/**
	 * The amount of an element that should enter the viewport to be considered "entered".
	 * Either "some", "all" or a number between 0 and 1.
	 * @default "some"
	 */
	amount?: AmountType
}

const useInView = <T extends HTMLElement | null>(
	ref?: RefObject<T> | null,
	options: UseInViewOptions = {},
): boolean => {
	const {
		root,
		margin = '0px',
		once = false,
		initial = false,
		amount = 'some',
	} = options

	const [inView, setInView] = useState(initial)
	const wasInViewRef = useRef(false)

	useEffect(() => {
		if (!ref || !ref.current) return

		// If once is true and element was already in view, don't observe
		if (once && wasInViewRef.current) return

		// Convert amount to threshold
		let threshold: number | number[]
		if (amount === 'some') {
			threshold = 0
		} else if (amount === 'all') {
			threshold = 1
		} else if (typeof amount === 'number' && amount >= 0 && amount <= 1) {
			threshold = amount
		} else {
			threshold = 0
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry) {
					const isIntersecting = entry.isIntersecting

					// For "all" amount, check if the intersection ratio is 1
					const meetsAmountCriteria =
						amount === 'all'
							? entry.intersectionRatio >= 0.99 // Use 0.99 to account for floating point
							: isIntersecting

					if (meetsAmountCriteria) {
						setInView(true)
						wasInViewRef.current = true

						// If once is true, disconnect the observer
						if (once) {
							observer.disconnect()
						}
					} else if (!once) {
						// Only update to false if once is not true
						setInView(false)
					}
				}
			},
			{
				root: root?.current,
				rootMargin: margin,
				threshold,
			},
		)

		observer.observe(ref.current)

		return () => observer.disconnect()
	}, [ref, root, margin, once, amount])

	return inView
}

export default useInView
