import {combineReducers} from 'redux'
import omit from "lodash/omit";
import uniq from "lodash/uniq";

import * as types from '../types/answer'

const byId = (state = {}, action) => {
    switch(action.type) {
        case types.ANSWER_FETCH_COMPLETED: {
            const { entities, order } = action.payload;
            const newState = { ...state };
            order.forEach(id => {
                newState[id] = {
                    ...entities[id],
                    isConfirmed: true,
                };
            });
            return newState;
        }
        default: {
            return state;
        }
    }
};

const order = (state = [], action) => {
    switch(action.type) {
        case types.ANSWER_FETCH_COMPLETED: {
            return uniq([...state, ...action.payload.order]);
        }
        default: {
            return state;
        }
    }
};

const isFetching = (state = false, action) => {
    switch(action.type) {
        case types.ANSWER_FETCH_COMPLETED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

const hasError = (state = null, action) => {
    switch (action.type) {
        case types.ANSWER_ADD_FAILED:{
            return action.payload
        }
        case types.ANSWER_ADD_STARTED:{
            return null
        }
        case types.ANSWER_ADD_COMPLETED:{
            return null
        }
        default:{
            return state
        }
    }
}

const error = (state = null, action) => {
    switch (action) {
        case types.ANSWER_ADD_COMPLETED:{
            return null
        }
        case types.ANSWER_ADD_STARTED:{
            return null
        }
        case types.ANSWER_ADD_FAILED:{
            return action.payload
        }
        default:{
            return state
        }
    }
}

export default combineReducers({
    byId,
    order,
    isFetching,
    hasError,
    error
})

export const getAnswerByID = (state, ID) => state.byId[ID]
export const getAllAnswers = (state) => order.map(report => getAnswerByID(state, report.id))
export const getIsFetchingAnswer = (state) => state.isFetching
export const getError = (state) => state.hasError ? state.hasError: null