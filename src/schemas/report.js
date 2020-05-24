import { schema } from 'normalizr'

const answersSchema = new schema.Entity(
    'answers_given'
)

const personSchema = new schema.Entity(
    'person',{answers:answersSchema}
)

export const personListSchema = [personSchema]