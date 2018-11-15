import { GET_TWEETS, GET_MORETWEETS, REFRESH_TIMELINE, GET_TIMELINE, CHECK_FILTER } from "../actions/types" //Import the actions types constant we defined in our actions
 
let dataState = { 
    data: [], 
    loading:true, 
    page: 1,
    seed: 1,
    refreshing: false,
};
 
export default function(state = dataState, action) {
    switch (action.type) {
        case GET_TWEETS:
            return {
                ...state,
                data: action.payload,
                loading:false,
                refreshing: false,
                page: state.page + 1
            }
        case GET_MORETWEETS:
            return {
                ...state,
                data: action.payload,
                loading:false,
                page: state.page + 1
            }
        case REFRESH_TIMELINE:
            return {
                ...state,
                data: action.payload,
                page: 1,
                seed: state.seed + 1
            }
        case CHECK_FILTER:
            return{
                ...state,
            }
        default:
            return state;
    }
}