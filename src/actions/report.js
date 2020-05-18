import * as types from '../types/reports/index.js'

export const changeStateReport = (type, id, reportStatus) => ({
    type: types.REPORT_STATE_CHANGED,
    payload: {id, reportStatus}
})

