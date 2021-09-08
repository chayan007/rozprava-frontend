import {authHeader, stringFormat} from '@/helpers';
import {config} from "@/configurations";
import axios from "axios";

export const rebuttalService = { getRebuttals };

function getRebuttals(uuid) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.rebuttalConfig.api.getRebuttals.endpoint}`, uuid);

    return axios.get(url, { headers: headers })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err.response.data);
            throw config.messagingConfig.messages.error.unknown_error ;
        });
}

