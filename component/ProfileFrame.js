import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { ProfileContext } from './controller'
import { StoreContext, dispatcher } from './store'

const Main = styled.div`
  width: 300px;
`

const Frame = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid chocolate;
  color: dodgerblue;
  margin: 1em;
  padding: 0.25em 1em;
`

const ProfileFrame = () => {
  const { state } = useContext(ProfileContext)
  const { state: store, dispatch } = useContext(StoreContext)
  useEffect(() => {
    dispatch(dispatcher.setCountView)
  }, [])
  return (
    <Main>
      <p>counter click: {store.countView}</p>
      <Frame>
        <p>Name : {state.name}</p>
        <p>age : {state.age}</p>
        <p>sex : {state.sex}</p>
        <p>height : {state.height}</p>
        <p>weight : {state.weight}</p>
      </Frame>
    </Main>
  )
}

export default ProfileFrame
