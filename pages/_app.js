import App from 'next/app'

import React from 'react'

import { StoreProvider } from '../component/store'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    )
  }
}

export default MyApp
