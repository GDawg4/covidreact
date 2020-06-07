import { schema } from 'normalizr'

const answerSchema = new schema.Entity(
    'answers'
)

const questionnaireSchema = new schema.Entity(
    'questions', {
        answers:[answerSchema]
    }
)

const simpleQuestionnaireSchema = new schema.Entity(
    'questions'
)

export const questionnaireListSchema = [simpleQuestionnaireSchema]