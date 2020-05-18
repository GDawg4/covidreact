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