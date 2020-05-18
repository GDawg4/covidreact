import { combineReducers } from 'redux'

const order = (state = [], action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

const users = combineReducers ({
    byId,
    order,
})

export default users

export const getUser = (state, id) => state[id]
export const getUsers = (state) => {
    return state.order.map(id => getUser(state.byId, id))
}