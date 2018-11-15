import { CHECK_FILTER } from "../actions/types"

export const CheckFilter = (filter) => dispatch({
    type:CHECK_FILTER,
    payload:filter
});
