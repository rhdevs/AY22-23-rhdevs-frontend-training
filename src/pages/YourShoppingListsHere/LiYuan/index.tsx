import styled from 'styled-components'
import { Button, Input, Table } from 'antd'
import React, { useState } from 'react'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`

const SL_LiYuan = () => {
  const originData = [
    {
      key: 0,
      name: 'Eggs',
    },
    {
      key: 1,
      name: 'Pineapples',
    },
  ]

  const [data, setData] = useState(originData)
  const [value, setValue] = useState('')

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
      render: (record: any) => {
        return (
          <Button onClick={() => deleteValue(record)} type="primary" style={{ marginBottom: 16 }}>
            Delete
          </Button>
        )
      },
    },
  ]
  const [count, setCount] = useState(2)

  const deleteValue = (record: any) => {
    setData((pre) => {
      return pre.filter((person) => person.key != record.key)
    })
  }

  const addValue = () => {
    if (value.trim().length > 0) {
      const newData = {
        key: count,
        name: value,
      }
      setData((pre) => {
        return [...data, newData]
      })
      setCount((count) => {
        return count + 1
      })
    }
  }

  return (
    <ShoppingListDiv>
      <h1>Shopping List</h1>
      <div>
        <Input
          size="large"
          placeholder="Item"
          onChange={(e) => setValue(e.target.value)}
          style={{ marginBottom: 16, width: 500 }}
        />
        <Button size="large" onClick={addValue} type="primary" style={{ marginBottom: 16, float: 'right' }}>
          Add Item
        </Button>

        <Table dataSource={data} columns={columns} />
      </div>
    </ShoppingListDiv>
  )
}

export default SL_LiYuan
