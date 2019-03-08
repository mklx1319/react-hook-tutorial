import React from 'react'
import styled from 'styled-components'

import { ProfileConsumer } from './controller'

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

const ProfileFrame = (props) => (
  <Main>
    <Frame>
      <p>Name : {props.state.name}</p>
      <p>age : {props.state.age}</p>
      <p>sex : {props.state.sex}</p>
      <p>height : {props.state.height}</p>
      <p>weight : {props.state.weight}</p>
    </Frame>
  </Main>
)

export default ProfileFrame
