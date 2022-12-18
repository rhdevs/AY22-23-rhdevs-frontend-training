import styled from 'styled-components'
import React, { useState, useRef } from 'react'
import { Table, Button } from 'antd'
// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`
interface Item {
  key: string
  name: string
}

const SL_SongYang: React.FC = () => {
  const [nextId, setNextId] = useState(0)
  const itemInputRef = useRef<HTMLInputElement>(null)
  const [table, setTable] = useState<Item[]>([])

  const addItemHandler = () => {
    setTable((prevTable) => {
      if (itemInputRef.current !== null) {
        setNextId(nextId + 1)
        return prevTable.concat({ key: nextId.toString(), name: itemInputRef.current.value })
      }
      return prevTable
    })
  }

  const deleteItemHandler = (recordKey: string) => {
    setTable((prevTable) => {
      return prevTable.filter((item) => item.key !== recordKey)
    })
  }

  return (
    <ShoppingListDiv>
      <h1 style={{ textAlign: 'center' }}>Shopping List</h1>
      <Table
        rowKey={(record) => record.key}
        dataSource={table}
        columns={[
          // {
          //   title: 'Quantity',
          //   dataIndex: 'quantity',
          //   key: 'quantity',
          // },
          {
            title: 'Item name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Action',
            key: 'action',
            render: (record) => {
              return (
                <Button type="primary" onClick={() => deleteItemHandler(record.key)}>
                  Delete
                </Button>
              )
            },
          },
        ]}
      />
      {/* <input style={{ width: '30%' }} placeholder="Qty" /> */}
      <input
        //style={{ width: '30%' }}
        autoComplete="off"
        required
        id="name"
        type="text"
        placeholder="Item Name"
        ref={itemInputRef}
      />
      <Button type="primary" onClick={addItemHandler}>
        + Add Item
      </Button>
    </ShoppingListDiv>
  )
}

export default SL_SongYang
