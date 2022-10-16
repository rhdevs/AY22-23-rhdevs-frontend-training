import styled from 'styled-components'
import type { InputRef } from 'antd'
import type { ColumnType } from 'antd/es/table'
import { Space, Button, Form, Input, Popconfirm, Table } from 'antd'
import type { FormInstance } from 'antd/es/form'
import React, { useContext, useEffect, useRef, useState } from 'react'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`

const SL_LiYuan = () => {
  const data = [
    {
      key: 0,
      name: 'Eggs',
    },
    {
      key: 1,
      name: 'Pineapples',
    },
  ]

  const [Data, setData] = useState(data)
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
          <Button onClick={() => Delete(record)} type="primary" style={{ marginBottom: 16 }}>
            Delete
          </Button>
        )
      },
    },
  ]
  const [count, setCount] = useState(2)

  const Delete = (record: any) => {
    setData((pre) => {
      return pre.filter((person) => person.key != record.key)
    })
  }

  const Add = () => {
    const newData = {
      key: count,
      name: value,
    }
    setData((pre) => {
      return [...Data, newData]
    })
    setCount((count) => {
      return count + 1
    })
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
        <Button size="large" onClick={Add} type="primary" style={{ marginBottom: 16, float: 'right' }}>
          Add Item
        </Button>

        <Table dataSource={Data} columns={columns} />
      </div>
    </ShoppingListDiv>
  )
}

export default SL_LiYuan
