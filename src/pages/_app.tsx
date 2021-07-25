import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from 'components/ErrorBoundary'
import { StrictMode } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </StrictMode>
  )
}
export default MyApp
