import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { PercentageOutlined } from '@ant-design/icons'
import { stringify } from 'rc-field-form/es/useWatch'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1680px;
  height: 702px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  border: solid;
  height: 50px;
  width: 400px;
`
const Table = styled.div`
  display: flex;
  flex-direction: column;
`
const Cell = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  border: solid;
`
const Squeeze = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
`

//prettier-ignore
const SL_Anton = () => {

  const [things, SetThings] = useState(['egg'])
  const [value, setValue] = useState(0)
  const thingRef = useRef<HTMLInputElement>(null)

  function erase(thing: string) {
    const newset = things.filter(element => element !== thing)
    SetThings(newset)
  }
  function printOut(thing: string) {

    return <Box key={thing}>
      <Cell>{thing}</Cell>
      <Cell><Button onClick={() => erase(thing)}>Delete</Button></Cell>
    </Box>
  }
  function listOfThings(thing: string[]) {
    return thing.map(thing => printOut(thing))
  }

  return <ShoppingListDiv>
    <h1>Shopping lizt</h1>
    <Table>
      Items
      {listOfThings(things)}
    </Table>
    <Squeeze><input placeholder="Item" ref={thingRef} type="text" /></Squeeze>
    <Squeeze><Button type="primary" onClick={() => SetThings(list => { return [...list, thingRef.current!.value] })} >Add</Button></Squeeze>
  </ShoppingListDiv>
}
export default SL_Anton
