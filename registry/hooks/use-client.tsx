"use client"

import { useRef, useState } from "react"

interface ClientResponse {
  data: any
  status: boolean | number
}

interface CallApiProps {
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE"
  payload?: any
  query?: any
  multipart?: boolean
  refresh?: boolean
  showError?: boolean
}

export const useClient = () => {
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const controllerRef = useRef(new AbortController())

  const cancel = () => {
    controllerRef.current.abort()
  }

  const callApi = async ({
    url = "",
    method = "GET",
    payload = undefined,
    multipart = false,
    refresh = false,
    query = undefined,
    showError = true,
  }: CallApiProps): Promise<ClientResponse> => {
    setLoading(true)
    if (refresh) setRefreshing(true)

    let fullURL = url
    const queryString = new URLSearchParams(query).toString()
    const headers = {
      "Content-Type": multipart ? "multipart/form-data" : "application/json",
    }
    const fetchOptions = {
      method,
      headers,
      body: multipart ? payload : JSON.stringify(payload),
    }
    if (query) {
      fullURL = `${url}?${queryString}`
    }
    try {
      const response = await fetch(fullURL, fetchOptions)
      const result = await response.json()
      if (!response.ok) {
        if (showError) {
          // Log message
        }
      }
      return { data: result, status: response.status }
    } catch (error: any) {
      // Log message
      setError(error?.toString())
      return { status: 500, data: error }
    } finally {
      setLoading(false)
      if (refresh) setRefreshing(false)
    }
  }

  return { cancel, error, loading, refreshing, callApi }
}
