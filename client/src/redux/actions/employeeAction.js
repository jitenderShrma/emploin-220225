import { GET_EMPLOYEES, EMPLOYEE_LOADING } from './types';
import config from '../../config/config';


export const getEmployees = (page=1) => async dispatch => {
   dispatch({ type: EMPLOYEE_LOADING, payload: null })
   await fetch(`${config.baseUrl}/api/v1/employee?page=${page}`)
      .then(response => response.json())
      .then(result => {
         dispatch({ type: GET_EMPLOYEES, payload:result });
      })
}

