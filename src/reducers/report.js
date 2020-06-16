import omit from 'lodash/omit';
import { combineReducers } from 'redux';
import uniq from 'lodash/uniq'

import * as types from '../types/report';
import difference from "lodash/difference";


const byId = (state = {}, action) => {
    switch(action.type) {
        case types.REPORT_FETCH_COMPLETED: {
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
        case types.REPORT_ADD_STARTED: {
            const newState = { ...state };
            newState[action.payload.id] = {
                ...action.payload,
                isConfirmed: false,
            };
            return newState;
        }
        case types.REPORT_ADD_COMPLETED: {
            const { oldId, petOwner } = action.payload;
            const newState = omit(state, oldId);
            newState[petOwner.id] = {
                ...petOwner,
                isConfirmed: true,
            };
            return newState;
        }
        case types.REPORT_REMOVE_STARTED: {
            return omit(state, action.payload.id);
        }
        case types.REPORT_DISMISSED:{
            return {
                ...state,
                [action.payload.id]:{
                    ...state[action.payload.id],
                    consent:false
                }
            }
        }
        case types.REPORT_FOLLOWED:{
            return {
                ...state,
                [action.payload.id]:{
                    ...state[action.payload.id],
                    is_contacted:true
                }
            }
        }
        case types.REPORT_CONFIRMED:{
            return {
                ...state,
                [action.payload.id]:{
                    ...state[action.payload.id],
                    is_confirmed:true
                }
            }
        }
        default: {
            return state;
        }
    }
};

const order = (state = [], action) => {
    switch(action.type) {
        case types.REPORT_FETCH_COMPLETED: {
            return uniq([...state, ...action.payload.order]);
        }
        case types.REPORT_ADD_STARTED: {
            return [...state, action.payload.id];
        }
        case types.REPORT_ADD_COMPLETED: {
            const { oldId, petOwner } = action.payload;
            return state.map(id => id === oldId ? petOwner.id : id);
        }
        case types.REPORT_REMOVE_STARTED: {
            return state.filter(id => id !== action.payload.id);
        }
        default: {
            return state;
        }
    }
};

const isFetching = (state = false, action) => {
    switch(action.type) {
        case types.REPORT_FETCH_STARTED: {
            return true;
        }
        case types.REPORT_FETCH_COMPLETED: {
            return false;
        }
        case types.REPORT_FETCH_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

const selected = (state = null, action) => {
    switch (action.type) {
        case types.REPORT_SELECTED:{
            return action.payload.id
        }
        case types.REPORT_DESELECTED:{
            return null
        }
        default:{
            return state
        }
    }
}

const dismissed = (state = [], action) => {
    switch (action.type) {
        case types.REPORT_DISMISSED_COMPLETED:{
            return uniq([...state, action.payload.id])
        }
        default:{
            return state
        }
    }
}

const noConsent = (state = [], action) => {
    switch (action.type) {
        case types.REPORT_NOT_CONSENTED_COMPLETED:{
            return uniq([...state, action.payload.id])
        }
        default:{
            return state
        }
    }
}

const confirmed = (state = [], action) => {
    switch (action.type) {
        case types.REPORT_CONFIRMED_COMPLETED:{
            return uniq([...state, action.payload.id])
        }
        default:{
            return state
        }
    }
}

const error = (state = null, action) => {
    switch(action.type) {
        case types.REPORT_FETCH_FAILED: {
            return action.payload.error;
        }
        case types.REPORT_FETCH_STARTED: {
            return null;
        }
        case types.REPORT_FETCH_COMPLETED: {
            return null;
        }
        default: {
            return state;
        }
    }
};


export default combineReducers({
    byId,
    order,
    isFetching,
    selected,
    error,
    dismissed,
    noConsent,
    confirmed
});

export const getReport = (state, id) => state.byId[id];
export const getAllReports = state => state.order.map(id => getReport(state, id));
export const getReportList = state => state.order
export const getSomeReports = (state, cutOff) => state.order.map(id => getReport(state, id)).filter(report => report.possible_case >= cutOff)
export const isFetchingReports = state => state.isFetching;
export const getFetchingReportsError = state => state.error;
export const getSelected = state => getReport(state, state.selected)
export const getSelectedId = state => state.selected
export const getAnswers = (state, id) => state.byId[id].answers_given
export const getDismissedList = (state) => state.dismissed
export const getDismissedObject = (state) => state.dismissed.map(id => getReport(state, id))
export const getNotConsentingList = (state) => state.noConsent
export const getNotConsentingObject = (state) => state.noConsent.map(id => getReport(state, id))
export const getConfirmedList = (state) => state.confirmed
export const getConfirmedObject = (state) => state.confirmed.map(id => getReport(state, id))
export const getActiveList = (state) => difference(difference(getReportList(state), getDismissedList(state)), getNotConsentingList(state))
export const getActiveObject = (state) => getActiveList(state).map(id => getReport(state, id))