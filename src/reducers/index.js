import { combineReducers } from 'redux'
import users, * as usersSelectors from './user'
import questionnaire, * as questionnaireSelectors from "./questionnaire";
import answer, * as answerSelectors from "./answer";
import reports, * as reportsSelectors from './report'
import {reducer as formReducer} from 'redux-form'
import difference from "lodash/difference";
import {pendingTasksReducer} from 'react-redux-spinner'

const reducer = combineReducers({
    users,
    reports,
    questionnaire,
    answer,
    form:formReducer,
    //pendingTasks:pendingTasksReducer
})

export default reducer

/*export const getUser = (state, id) => usersSelectors.getUser(state.users.byId, id)
export const getUsers = (state) => usersSelectors.getUsers(state.users)
export const getReport = (state, id) => reportsSelectors.getReport(state.reports.byId ,id)*/

export const getAllReports = (state) => reportsSelectors.getAllReports(state.reports)
export const getReportList = (state) => reportsSelectors.getReportList(state.reports)
export const getSomeReports = (state, cutOff) => reportsSelectors.getSomeReports(state.reports, cutOff)

export const getSelected = (state) => reportsSelectors.getSelected(state.reports)
export const getSelectedId = (state) => reportsSelectors.getSelected(state.reports)
export const getDismissedList = (state) => reportsSelectors.getDismissedList(state.reports)
export const getDismissedObject = (state) => reportsSelectors.getDismissedObject(state.reports)
export const getActiveList = (state) => reportsSelectors.getActiveList(state.reports)
export const getActiveObject = (state) => reportsSelectors.getActiveObject(state.reports)

export const getQuestionnaireByID = (state, ID) => questionnaireSelectors.getQuestionnaireByID(state.questionnaire, ID)
export const getAllQuestionnaires = (state) => questionnaireSelectors.getAllQuestionnaires(state.questionnaire)
export const getIsFetchingQuestionnaire = (state) => questionnaireSelectors.getIsFetchingQuestionnaire(state.questionnaire)

export const getAnswerByID = (state, ID) => answerSelectors.getAnswerByID(state.answer, ID)
export const getAllAnswers = (state) => answerSelectors.getAllAnswers(state.answer)
export const getIsFetchingAnswer = (state) => answerSelectors.getIsFetchingAnswer(state.answer)