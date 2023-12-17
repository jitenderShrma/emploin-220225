import { GET_EMPLOYEES, EMPLOYEE_LOADING } from '../actions/types';

const initialState = {
    employees: [],
    total:0,
    isLoading: true,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEE_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_EMPLOYEES: {
            return {
                isLoading:false,
                employees:action.payload.data,
                total:action.payload.total,
            }
        }
        default: {
            return state;
        }
    }
}
