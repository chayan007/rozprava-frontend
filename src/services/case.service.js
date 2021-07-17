import {authHeader, handleResponse} from '@/helpers';
import { config } from "@/configurations";

export const caseService = {
    getCases,
    getMyCases
};

function getCases() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.commonConfig.$apiUrl}/users`, requestOptions).then(handleResponse);
}

function getMyCases() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.commonConfig.$apiUrl}/users`, requestOptions).then(handleResponse);
}
