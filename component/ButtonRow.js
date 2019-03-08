import React from 'react'
import styled from 'styled-components'

import { ProfileConsumer } from './controller'

const Submit = styled.button`
  background: transparent;
  margin: 0 auto;
  width: 100px;
  border-radius: 3px;
  border: 2px solid black;
  display: inline-block;
`

const ButtonRow = (props) => (
  <div>
    <Submit onClick={props.changeSex}>
      change <br /> sex
    </Submit>
    <Submit onClick={() => props.randomWeightHeight('height')}>random Height </Submit>
    <Submit onClick={() => props.randomWeightHeight('weight')}>random Weight </Submit>
  </div>
)

export default ButtonRow
