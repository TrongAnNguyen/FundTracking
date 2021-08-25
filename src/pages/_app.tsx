import type { AppProps } from 'next/app'
import ErrorBoundary from 'components/ErrorBoundary'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from 'state/store'
import ThemeProvider, { ThemedGlobalStyle } from 'theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
export default App
