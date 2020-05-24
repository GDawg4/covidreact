import {call, takeEvery, put} from 'redux-saga/effects'
import {normalize} from 'normalizr'

import * as actions from '../actions/report'
import * as types from '../types/reports'
import * as schemas from '../schemas/report'

const BASE_URL = 'http://127.0.0.1:8000/api/v1';

function* fetchReports(action) {
    try{
        const response =yield call(
            fetch,
            `${BASE_URL}/users/`,
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
                entities:{person},
                result
            } = normalize(jsonResult, schemas.personListSchema)
            yield put(
                actions.completeFetchingReport(person, result)
            )
        }else {
            console.log('Something went wrong')
        }
    }catch (e) {
        console.log(e)
    }
}

export function* watchFetchReports() {
    yield takeEvery(
        types.REPORT_FETCH_STARTED,
        fetchReports
    )
}