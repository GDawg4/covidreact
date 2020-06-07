import * as types from '../types/questionnaire'
import {pendingTask, begin, end, endAll} from "react-redux-spinner";

export const startFetchingQuestionnaire = () => ({
    type: types.QUESTIONNAIRE_FETCH_STARTED,
    [pendingTask]:begin
});
export const completeFetchingQuestionnaire = (entities, order) => ({
    type: types.QUESTIONNAIRE_FETCH_COMPLETED,
    [pendingTask]:end,
    payload: {
        entities,
        order,
    },
});

export const failFetchingQuestionnaire = error => ({
    type: types.QUESTIONNAIRE_FETCH_FAILED,
    [pendingTask]:endAll,
    payload: {
        error,
    },
});