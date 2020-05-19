import {fork, all} from 'redux-saga/effects'

import {watchFetchReports} from "./report";

function* mainSaga() {
    yield all([
        fork(watchFetchReports)
    ])
}

export default mainSaga