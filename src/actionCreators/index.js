import * as types from '../actionTypes/ActionTypes'


export function add(name) {
    return {
        type: types.CHANGE_NAME,
        name
    }
}

