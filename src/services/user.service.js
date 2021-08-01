import { authHeader } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";
import { stringFormat } from "@/helpers";

export const userService = { settings, getProfile };

function settings(updateFields) {
    const authenticationHeader = authHeader();
    const existingUsername = JSON.parse(localStorage.getItem('user')).profile.user.username;
    const url =  stringFormat(`${config.commonConfig.$apiUrl}/${config.userConfig.api.settings.endpoint}`, existingUsername);

    return axios.put(
        url,
        updateFields,
        { headers: authenticationHeader } 
    )
        .then(response => {
            const data = response.data;
            if (data.profile) {
                localStorage.setItem('user', JSON.stringify(data));
                return data;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
function getProfile(username){
    const authenticationHeader = authHeader();
    const url =  stringFormat(`${config.commonConfig.$apiUrl}/${config.userConfig.api.getProfile.endpoint}`, username);
    return axios.get(url, { headers: authenticationHeader })
    .then(response => {
        console.log('response = ',response.data);
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
}