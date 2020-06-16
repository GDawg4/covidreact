import {combineReducers} from 'redux'
import omit from "lodash/omit";
import uniq from "lodash/uniq";

import * as types from '../types/questionnaire'

const byId = (state = {}, action) => {
    switch(action.type) {
        case types.QUESTIONNAIRE_FETCH_COMPLETED: {
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
        case types.QUESTIONNAIRE_FETCH_COMPLETED: {
            return uniq([...state, ...action.payload.order]);
        }
        default: {
            return state;
        }
    }
};

const isFetching = (state = false, action) => {
    switch(action.type) {
        case types.QUESTIONNAIRE_FETCH_STARTED: {
            return true;
        }
        case types.QUESTIONNAIRE_FETCH_COMPLETED: {
            return false;
        }
        case types.QUESTIONNAIRE_FETCH_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    byId,
    order,
    isFetching
})

export const getQuestionnaireByID = (state, ID) => state.byId[ID]
export const getAllQuestionnaires = (state) => state.order.map(report => getQuestionnaireByID(state, report))
export const getIsFetchingQuestionnaire = (state) => state.isFetching