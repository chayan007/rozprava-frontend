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
function setting(username, profilePicture, bio, password1, password2) {
    const registerBody = {
        profilePicture : profilePicture,
        username: username,
        bio: bio,
        password1: password1,
        password2: password2
    }
    
    const existingUsername = JSON.parse(localStorage.getItem('user')).profile.user.username;
    const url =  stringFormat(`${config.commonConfig.$apiUrl}/${config.userConfig.api.settings.endpoint}`, existingUsername);
    console.log(url);
    console.log(existingUsername);

    return axios.post(
        url,
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
