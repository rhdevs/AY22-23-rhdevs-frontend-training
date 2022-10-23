/** Types */
// create your own type!
export type item = {
  key: number
  name: string
}

/** Actions' types */
export enum LIYUAN_SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  ADD_ITEM = 'LIYUAN_SHOPPING_LIST_ACTIONS.ADD_ITEM',
}

/** Actions */
export type AddItem = {
  type: typeof LIYUAN_SHOPPING_LIST_ACTIONS.ADD_ITEM
  val: number
  items: item[]
}

export type ActionTypes = AddItem
