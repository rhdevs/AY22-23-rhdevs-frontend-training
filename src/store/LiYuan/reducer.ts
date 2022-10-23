import { Reducer } from 'redux'
import { ActionTypes, LIYUAN_SHOPPING_LIST_ACTIONS, item } from './types'

//set an initial state for your variable
const initialState = {
  val: 0,
  items: [],
}

//declare your variable type
type State = {
  val: number
  items: item[]
}

export const LiYuanStore: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case LIYUAN_SHOPPING_LIST_ACTIONS.ADD_ITEM: {
      return { ...state, val: action.val, items: action.items }
    }
    default:
      return state
  }
}
