import React, { Dispatch, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addItem, deleteItem } from '../../../store/LiYuan/actions'
import { item } from '../../../store/LiYuan/types'
import { RootState } from '../../../store/types'
import { Button, Input, Table } from 'antd'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`s
  margin: 1.5rem 1rem;
`

const SL_LiYuan_redux = () => {
  const [inputVal, setInputVal] = useState('')
  const dispatch: Dispatch<any> = useDispatch()
  const { items } = useSelector((state: RootState) => state.LiYuanStore)
  const columns = [
    {
      key: 'name',
      title: 'Item Name',
      dataIndex: 'name',
    },
    {
      key: 'actions',
      title: 'Actions',
      width: 400,
      render: (record: item) => {
        return (
          <Button onClick={() => dispatch(deleteItem(record))} type="primary" style={{ marginBottom: 16 }}>
            Delete
          </Button>
        )
      },
    },
  ]
  const addValue = () => {
    if (inputVal.trim().length > 0) {
      dispatch(addItem(inputVal))
    }
  }
  return (
    <ShoppingListDiv>
      <h1>Shopping List</h1>
      <div>
        <Input
          size="large"
          placeholder="Item"
          onChange={(e) => setInputVal(e.target.value)}
          style={{ marginBottom: 16, width: 500 }}
        />
        <Button size="large" onClick={addValue} type="primary" style={{ marginBottom: 16, float: 'right' }}>
          Add Item
        </Button>

        <Table dataSource={items} columns={columns} />
      </div>
    </ShoppingListDiv>
  )
}

export default SL_LiYuan_redux
