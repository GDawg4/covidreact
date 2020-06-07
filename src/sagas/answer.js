import {call, takeEvery, put, select} from 'redux-saga/effects'
import {normalize} from 'normalizr'

import * as actions from '../actions/answer'
import * as types from '../types/answer'
import * as selectors from '../reducers'

const BASE_URL = 'http://localhost:8000/api/v1';

function* addAnswer(action) {
    try{
        const user = yield select (selectors.getSelected)
        const response = yield call(
            fetch,
            `${BASE_URL}/questionnaire/4/add-answer/`,
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({...action.payload, 'user':user.id})
            }

        )
        if(response.status === 200){
            yield put(
                actions.completeAddingAnswer()
            )
        }else {
            yield put(
                actions.failAddingAnswer()
            )
        }
    }catch (error) {
        /*yield put (
            actions.failAddingAnswer(error)
        )*/
    }
}

export function* watchAddAnswer() {
    yield takeEvery(
        types.ANSWER_ADD_STARTED,
        addAnswer
    )
}