import { GET_TIMELINE, CHECK_FILTER } from "../actions/types" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true};
 
export default function(state = dataState, action) {
    switch (action.type) {
        case GET_TIMELINE:
            return {
                ...state,
                data: action.payload,
                loading:false
            }
        case CHECK_FILTER:
            return{
                ...state,
            }
        default:
            return state;
    }
}