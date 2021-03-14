import { combineReducers } from 'redux'
import {musicListReducer} from './musicList'

export const rootReducer = combineReducers({
    musicList: musicListReducer
})

