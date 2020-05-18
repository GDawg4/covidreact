import * as types from '../types/reports'
import {combineReducers} from 'redux'

const order = (state = [], action) => {
    switch (action.type) {
        case types.REPORT_STATE_CHANGED: {
            return [...state]
        }

        default: {
            return state
        }
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.REPORT_STATE_CHANGED: {
            return {
                ...state,
                [action.payload.id] : {
                    reportStatus: action.payload.reportStatus
                }
            }
        }
        default: {
            return state
        }
    }
}

const reports = combineReducers({
    byId,
    order
})

export default reports

export const getReport = (state, id) => state[id]
export const getReports = (state) => {
    return state.order.map(id => getReport(state.byId, id))
}