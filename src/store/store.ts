import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { exampleStore } from './example/reducer'
import { LiYuanStore } from './LiYuan/reducer'
import { playground } from './playground/reducer'

export const rootReducer = combineReducers({
  exampleStore,
  playground,
  LiYuanStore,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
