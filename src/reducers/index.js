import {CHANGE_NAME} from '../actionTypes/ActionTypes'

const initialState = {
    name:'before'
}

function reducer(state=initialState,action){
    switch (action.type) {
        
        case CHANGE_NAME:
            console.log('case CHANGE_NAME')
            if(state.name==='before'){
                return Object.assign({},state,{name:'hello'})
            }
            if(state.name==='hello'){
                return Object.assign({},state,{name:'bye'})
            }
            else{
                return state
            }
    
        default:
            return state
    }
}

export default reducer;