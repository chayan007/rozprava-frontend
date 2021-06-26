import {authHeader, handleResponse} from '@/helpers';
import { config } from "@/configurations";

export const userService = {
    getDetails,
    //edit_settings
};

function getDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.commonConfig.$apiUrl}/users`, requestOptions).then(handleResponse);
}
/*function edit_settings(settings_data){
    return axios
        .post(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.edit.endpoint}`,
        settings_data
        )
        .then(response => {
            const data = response.data
            if (data.profile) {
                localStorage.setItem('user', JSON.stringify(data));
                return data.profile
            }
        })
        .catch(error => {
            console.log(error);
        });
}*/
