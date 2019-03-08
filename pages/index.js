import React from 'react'

import Link from 'next/link'

import { useStore, ProfileProvider } from '../component/controller'
import { StoreConsumer } from '../component/store'
import ButtonRow from '../component/ButtonRow'
import ProfileFrame from '../component/ProfileFrame'

const index = () => {
  const store = useStore()
  return (
    <StoreConsumer>
      {({ state }) => (
        <ProfileProvider value={{ ...store }}>
          <Link href="/">
            <a>Index</a>
          </Link>
          <Link href="/movie">
            <a>Movie</a>
          </Link>
          <p>Entrance Count: {state.countView}</p>
          <ButtonRow />
          <ProfileFrame />
        </ProfileProvider>
      )}
    </StoreConsumer>
  )
}

export default index
