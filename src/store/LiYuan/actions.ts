import { validateLocaleAndSetLanguage } from 'typescript'
import { Dispatch, GetState } from '../types'
import { ActionTypes, LIYUAN_SHOPPING_LIST_ACTIONS, item } from './types'

export const addItem = (newVal: string) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { val } = getState().LiYuanStore
  const { items } = getState().LiYuanStore
  const newItem: item = {
    key: val,
    name: newVal,
  }
  dispatch({
    type: LIYUAN_SHOPPING_LIST_ACTIONS.ADD_ITEM,
    val: val + 1,
    items: [...items, newItem],
  })
}
export const deleteItem = (record: item) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { items } = getState().LiYuanStore
  const { val } = getState().LiYuanStore
  dispatch({
    type: LIYUAN_SHOPPING_LIST_ACTIONS.ADD_ITEM,
    val: val,
    items: items.filter((thing: item) => thing.key != record.key),
  })
}
