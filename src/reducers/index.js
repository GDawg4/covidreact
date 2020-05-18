import { combineReducers } from 'redux'
import users, * as usersSelectors from './user'
import reports, * as reportsSelectors from './reports'

const reducer = combineReducers({
    users,
    reports
})

export default reducer

export const getUser = (state, id) => usersSelectors.getUser(state.users.byId, id)
export const getUsers = (state) => usersSelectors.getUsers(state.users)
export const getReport = (state, id) => reportsSelectors.getReport(state.reports.byId ,id)
export const getReports = (state) => reportsSelectors.getReports(state.reports)