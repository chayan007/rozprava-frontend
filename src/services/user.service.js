import {authHeader, handleResponse} from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";
import {stringFormat} from "@/helpers";

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
function setting(updateFields) {
    const registerBody = {
        updateFields
    }
    const authenticationHeader = authHeader();
    const existingUsername = JSON.parse(localStorage.getItem('user')).profile.user.username;
    const url =  stringFormat(`${config.commonConfig.$apiUrl}/${config.userConfig.api.settings.endpoint}`, existingUsername);

    return axios.put(
        url,
        registerBody,
        { headers: authenticationHeader } 
    )
        .then(response => {
            console.log(response)
            const data = response.data
            if (data.profile) {
                localStorage.setItem('user', JSON.stringify(data));
                return data.profile
            }
        })
        .catch((error) => {
            console.log("yo");
            console.log(error);
        });
}
