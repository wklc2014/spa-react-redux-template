'use strict';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import ReducerCounter from './ReducerCounter.js';

// 使用 redux 的 combineReducers 方法
// 将所有 reducer 打包起来
const rootReducer = combineReducers({
  counter: ReducerCounter,
  routing: routerReducer
})

export default rootReducer;
