import NextApp from 'next/app'
import { CacheProvider } from '@emotion/core'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

import GlobalStyles from '../components/GlobalStyles/GlobalStyles'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}
