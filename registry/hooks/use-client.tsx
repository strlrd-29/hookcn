"use client"

import { useRef, useState } from "react"

interface UseClientProps {
  baseURL?: string
}
interface UseClientReturnProps {
  loading: boolean
  refreshing: boolean
  cancel: () => void
  callApi: (props: CallApiProps) => Promise<ClientResponse>
}

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
  headers?: HeadersInit
  onError?: (error: any) => void
}

export const useClient = ({
  baseURL,
}: UseClientProps): UseClientReturnProps => {
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const controllerRef = useRef(new AbortController())

  const cancel = () => {
    controllerRef.current.abort()
  }

  const callApi = async ({
    url = "",
    method = "GET",
    multipart = false,
    refresh = false,
    query,
    payload,
    onError = () => {},
    headers: extraHeaders,
  }: CallApiProps): Promise<ClientResponse> => {
    setLoading(true)
    if (refresh) setRefreshing(true)

    let fullURL = url
    const queryString = new URLSearchParams(query).toString()
    const headers: HeadersInit = {
      "Content-Type": multipart ? "multipart/form-data" : "application/json",
      ...extraHeaders,
    }
    const fetchOptions = {
      method,
      headers,
      body: multipart ? payload : JSON.stringify(payload),
    }
    if (query) {
      fullURL = `${baseURL}${url}?${queryString}`
    }
    try {
      const response = await fetch(fullURL, fetchOptions)
      const result = await response.json()
      if (!response.ok) onError(result)
      return { data: result, status: response.status }
    } catch (error: any) {
      onError(error?.toString())
      return { status: 500, data: error }
    } finally {
      setLoading(false)
      if (refresh) setRefreshing(false)
    }
  }

  return { cancel, loading, refreshing, callApi }
}
