import * as types from '../types/report';
import {pendingTask, begin, end, endAll} from "react-redux-spinner";

export const startFetchingReport = () => ({
    type: types.REPORT_FETCH_STARTED,
    [ pendingTask ]: begin,
});
export const completeFetchingReport = (entities, order) => ({
    type: types.REPORT_FETCH_COMPLETED,
    [ pendingTask ]: end,
    payload: {
        entities,
        order,
    },
});

export const selectReport = (id) =>({
    type:types.REPORT_SELECTED,
    payload:{
        id
    }
})

export const deSelectReport = (id) =>({
    type:types.REPORT_DESELECTED
})

export const notConsentingReport = (id) => ({
    type:types.REPORT_NOT_CONSENTED,
    payload:{
        id
    }
})

export const failFetchingReport = error => ({
    type: types.REPORT_FETCH_FAILED,
    [ pendingTask ]: endAll,
    payload: {
        error,
    },
});

export const startAddingReport = report => ({
    type: types.REPORT_ADD_STARTED,
    payload: report,
});
export const completeAddingReport = (oldId, report) => ({
    type: types.REPORT_ADD_COMPLETED,
    payload: {
        oldId,
        report,
    },
});
export const failAddingReport = (oldId, error) => ({
    type: types.REPORT_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});

export const startRemovingReport = id => ({
    type: types.REPORT_REMOVE_STARTED,
    payload: {
        id,
    },
});
export const completeRemovingReport = () => ({
    type: types.REPORT_REMOVE_COMPLETED,
});
export const failRemovingReport = (id, error) => ({
    type: types.REPORT_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});

export const dismissReport = (id) => ({
    type:types.REPORT_DISMISSED,
    payload:{
        id
    }
})

export const followReport = (id) => ({
    type:types.REPORT_FOLLOWED,
    payload:{
        id
    }
})

export const confirmReport = (id) => ({
    type:types.REPORT_CONFIRMED,
    payload:{
        id
    }
})
