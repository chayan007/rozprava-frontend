import {authHeader, handleResponse} from '@/helpers';
import { config } from "@/configurations";

export const caseService = { getCases };

function getCases(category= null, username = null) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.commonConfig.$apiUrl}/users`, requestOptions).then(handleResponse);
}
