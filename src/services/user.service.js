import {authHeader, handleResponse} from '@/helpers';
import { config } from "@/configurations";

export const userService = {
    getDetails
};

function getDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.commonConfig.$apiUrl}/users`, requestOptions).then(handleResponse);
}
