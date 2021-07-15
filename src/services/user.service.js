import { authHeader } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";
import { stringFormat } from "@/helpers";

export const userService = { settings };

function settings(updateFields) {
    const authenticationHeader = authHeader();
    const existingUsername = JSON.parse(localStorage.getItem('user')).profile.user.username;
    const url =  stringFormat(`${config.commonConfig.$apiUrl}/${config.userConfig.api.settings.endpoint}`, existingUsername);
    console.log(authenticationHeader);

    return axios.put(
        url,
        updateFields,
        { headers: authenticationHeader } 
    )
        .then(response => {
            const data = response.data;
            if (data.profile) {
                console.log('response', data);
                localStorage.setItem('user', JSON.stringify(data));
                return data;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
