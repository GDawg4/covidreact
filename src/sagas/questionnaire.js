import {call, takeEvery, put} from 'redux-saga/effects'
import {normalize} from 'normalizr'

import * as actions from '../actions/questionnaire'
import * as types from '../types/questionnaire'
import * as schemas from '../schemas/questionnaire'

const BASE_URL = 'http://127.0.0.1:8000/api/v1';

function* fetchQuestionnaires(action) {
    try{
        const response =yield call(
            fetch,
            `${BASE_URL}/questionnaire/4/questions`,
            {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }
        );
        if (response.status === 200){
            const jsonResult = yield response.json();
            const{
                entities:{questions, answer},
                result
            } = normalize(jsonResult, schemas.questionnaireListSchema)
            yield put(
                actions.completeFetchingQuestionnaire(questions, result)
            )
        }else {
            console.log('Something went wrong')
        }
    }catch (e) {
        console.log(e)
    }
}

export function* watchFetchQuestionnaires() {
    yield takeEvery(
        types.QUESTIONNAIRE_FETCH_STARTED,
        fetchQuestionnaires
    )
}