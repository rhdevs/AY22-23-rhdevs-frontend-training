import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { incrementValue } from '../../../store/example/actions'
import { RootState } from '../../../store/types'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`

const SL_Example_Redux = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const { val } = useSelector((state: RootState) => state.exampleStore)
  return (
    <ShoppingListDiv>
      <h1>Copy Your Shopping List Here, and implement with Redux!</h1>
      <h2>{val}</h2>
      <button onClick={() => dispatch(incrementValue())}>Increment</button>
    </ShoppingListDiv>
  )
}

export default SL_Example_Redux
