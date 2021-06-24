import {authHeader, handleResponse} from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const userService = {
    getDetails,
    setting
};

function getDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.commonConfig.$apiUrl}/users`, requestOptions).then(handleResponse);
}
function setting(username,) {
    const registerBody = {
        username: username,
        // password1: password1,
        // password2: password2,
        // email: email,
        // phone: phone,
        // first_name: name.split(' ')[0],
        // last_name: name.split(' ').slice(1).join(' ').replace(/\s+/g,' ').trim()
    }

    return axios.post(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.register.endpoint}`,
        registerBody
    )
        .then((response) => {
            const data = response.data
            if (data.profile) {
                localStorage.setItem('user', JSON.stringify(data));
                return data.profile
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
