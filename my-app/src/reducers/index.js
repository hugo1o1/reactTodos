import { combineReducers } from 'redux'

import todos from './visibilityFilters'
import visibilityFilters from './visibilityFilters'


export default combineReducers({
    todos,
    visibilityFilters
}
)
