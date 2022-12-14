import { combineReducers } from 'redux'
import auth from './authReduce'

import theme from './themeReducer'

export default combineReducers({
    auth,
    theme,
})