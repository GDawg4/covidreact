import * as types from "../types/answer";
import {pendingTask, begin, end, endAll} from "react-redux-spinner";

export const completeFetchingAnswer = (entities) => ({
    type: types.ANSWER_FETCH_COMPLETED,
    [pendingTask]:end,
    payload: {
        entities
    },
});

export const startAddingAnswer = (answer) => ({
    type:types.ANSWER_ADD_STARTED,
    [pendingTask]:begin,
    payload:{
        answer
    }
});

export const completeAddingAnswer = () => ({
    type:types.ANSWER_ADD_COMPLETED
});

export const failAddingAnswer = (answer) => ({
    type:types.ANSWER_ADD_FAILED,
    [pendingTask]:endAll,
    payload:{
        answer
    }
});