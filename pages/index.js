import React, { Component } from 'react'

import Link from 'next/link'

import { useStore, ProfileContext } from '../component/controller'
import { StoreProvider } from '../component/store'
import ButtonRow from '../component/ButtonRow'
import ProfileFrame from '../component/ProfileFrame'

const index = () => {
  const store = useStore()
  return (
    <ProfileContext.Provider value={store}>
      <div>
        <Link href="/">
          <a>Index</a>
        </Link>
        <Link href="/movie">
          <a>Movie</a>
        </Link>
        <ButtonRow />
        <ProfileFrame />
      </div>
    </ProfileContext.Provider>
  )
}

export default index
