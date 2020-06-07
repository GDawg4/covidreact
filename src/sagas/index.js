import {fork, all} from 'redux-saga/effects'

import {watchFetchReports} from "./report";
import {watchFetchQuestionnaires} from "./questionnaire";
import {watchAddAnswer} from "./answer";

function* mainSaga() {
    yield all([
        fork(watchFetchReports),
        fork(watchFetchQuestionnaires),
        fork(watchAddAnswer)
    ])
}

export default mainSaga