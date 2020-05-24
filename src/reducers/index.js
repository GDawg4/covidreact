import { combineReducers } from 'redux'
import users, * as usersSelectors from './user'
import reports, * as reportsSelectors from './report'

const reducer = combineReducers({
    users,
    reports
})

export default reducer

/*export const getUser = (state, id) => usersSelectors.getUser(state.users.byId, id)
export const getUsers = (state) => usersSelectors.getUsers(state.users)
export const getReport = (state, id) => reportsSelectors.getReport(state.reports.byId ,id)*/
export const getAllReports = (state) => reportsSelectors.getAllReports(state.reports)
export const getSomeReports = (state, cutOff) => reportsSelectors.getSomeReports(state.reports, cutOff)
export const getSelected = (state) => reportsSelectors.getSelected(state.reports)
export const getSelectedId = (state) => reportsSelectors.getSelected(state.reports)