import {authHeader, stringFormat} from '@/helpers';
import {config} from "@/configurations";
import axios from "axios";

export const debateService = { getDebates };

function getDebates(slug) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.debateConfig.api.getDebates.endpoint}`, slug);

    return axios.get(url, { headers: headers })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err.response.data);
            throw config.messagingConfig.messages.error.unknown_error ;
        });
}

