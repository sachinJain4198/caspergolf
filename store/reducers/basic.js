import { BASIC } from '../constants/index';
const initialState = {
    email: "casper"
};
const basicReducer = (state = initialState, action) => {
    switch (action.type) {
        case BASIC:
            return {
                ...state,
                email: action.payload
            };
        default:
            return state;
    }
}
export default basicReducer;