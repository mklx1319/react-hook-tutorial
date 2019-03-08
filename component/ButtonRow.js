import React, { useContext } from 'react'
import styled from 'styled-components'

import { ProfileContext } from './controller'

const Submit = styled.button`
  background: transparent;
  margin: 0 auto;
  width: 100px;
  border-radius: 3px;
  border: 2px solid black;
  display: inline-block;
`

const ButtonRow = () => {
  const { changeSex, randomWeightHeight } = useContext(ProfileContext)

  return (
    <div>
      <Submit onClick={changeSex}>
        change <br /> sex
      </Submit>
      <Submit onClick={() => randomWeightHeight('height')}>random Height </Submit>
      <Submit onClick={() => randomWeightHeight('weight')}>random Weight </Submit>
    </div>
  )
}

export default ButtonRow
