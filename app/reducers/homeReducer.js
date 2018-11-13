import { GET_TIMELINE } from "../actions/types" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true };
 
export default function(state = dataState, action) {
    switch (action.type) {
        case GET_TIMELINE:
            return {
                ...state,
                data: action.payload,
                loading:false
            }
        default:
            return state;
    }
}