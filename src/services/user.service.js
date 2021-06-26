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
function setting(username, profilePicture, bio, password1, password2) {
    const registerBody = {
        profilePicture : profilePicture,
        username: username,
        bio: bio,
        password1: password1,
        password2: password2
    }
    const existingUsername = JSON.parse(localStorage.get('user')).profile.user.username;

    return axios.post(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.setting.endpoint}`,
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
