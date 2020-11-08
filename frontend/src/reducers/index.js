import { combineReducers } from 'redux'
import loadingReducer from './isLoading'
import itemsReducer from './setItems'

const allReducers = combineReducers({
    loading: loadingReducer,
    items: itemsReducer
})
export default allReducers