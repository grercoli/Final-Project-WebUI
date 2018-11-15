import { CHECK_FILTER } from "../actions/types" //Import the actions types constant we defined in our actions
 
let filterState = { filter:{
    NotVerified:false,
    NotFollow:false,
    NotDefaultProfile:false,
    NotLink:false,
    NotTruncated:false
} };
 
export default function(state = filterState, action) {
    
    if(action.type === CHECK_FILTER){
        switch(action.payload){
            case "NotVerified":
                return {
                    ...state,
                    filter:{NotVerified:!state.filter.NotVerified}}
            case "NotFollow":
                return {
                    ...state,
                    filter:{NotFollow:!state.filter.NotFollow}}
            case "NotDefaultProfile":
                return {
                    ...state,
                    filter:{NotDefaultProfile:!state.filter.NotDefaultProfile}}
            case "NotLink":
                return {
                    ...state,
                    filter:{NotLink:!state.filter.NotLink}}
            case "NotDefaultProfile":
                return {
                    ...state,
                    filter:{NotTruncated:!state.filter.NotTruncated}}
        }
    }else{
        return state;
    }
}

    

