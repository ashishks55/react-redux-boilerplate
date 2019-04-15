import { TEMP_TYPE } from '../actions/Types';

const initialState = {
    users: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case TEMP_TYPE: 
            return {
                ...state,
                users: action.payload
            };
        default: 
            return state
    }
}