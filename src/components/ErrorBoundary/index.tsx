import React, { ErrorInfo } from 'react'

interface ErrorWithCode extends Error {
  code: string
}
type ErrorState = {
  error: ErrorWithCode | null
}

export default class ErrorBoudary extends React.Component<unknown, ErrorState> {
  constructor(props: unknown) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: ErrorWithCode): ErrorState {
    return { error }
  }

  componentDidCatch(error: ErrorWithCode, errorInfo: ErrorInfo) {
    // TODO: add reactGA
    const isJsChunkLoadError = error.name === 'ChunkLoadError'
    const isCssChunkLoadError = error.code === 'CSS_CHUNK_LOAD_FAILED'
    const isChunkLoadError = isJsChunkLoadError || isCssChunkLoadError

    const isRecoveringFromChunkError =
      !!window.history.state?.isRecoveringFromChunkError

    if (isChunkLoadError && !isRecoveringFromChunkError) {
      const nextState = {
        ...window.history.state,
        isRecoveringFromChunkError: true,
      }
      window.history.replaceState(nextState, '')
      window.location.reload()
      return
    }

    throw error
  }

  render() {
    const { error } = this.state

    if (error) {
      return <h1>Error</h1>
    }

    return this.props.children
  }
}
