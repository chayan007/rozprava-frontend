import { config } from "@/configurations";
import axios from "axios";

export const socialAuthService = { google };

function google() {
    return axios.post(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.socialAuth.google.endpoint}`
    )
        .then(user => console.log(user))
        .catch(error => console.log(error));
}
