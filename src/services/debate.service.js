import {authHeader, stringFormat} from '@/helpers';
import {config} from "@/configurations";
import axios from "axios";

export const debateService = {getDebates, getRebuttals, createDebate};

function getDebates(slug) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.debateConfig.api.getDebates.endpoint}`, slug);

    return axios.get(url, { headers: headers })
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            throw config.messagingConfig.messages.error.unknown_error ;
        });
}

function createDebate(createDebateBody, uuid) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.debateConfig.api.create.endpoint}`, uuid);
    console.log(createDebateBody)
    return axios
        .post(
            url,
            createDebateBody,
            { headers: headers },
        )
        .then((response) => {
            const debate_info = response.data
            return debate_info;
        })
        .catch((error) => {
            console.log(error.response.data)
            throw config.messagingConfig.messages.unknown_error;
        });
}

 
export const rebuttalService = { getRebuttals };

function getRebuttals(uuid) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.debateConfig.api.getRebuttals.endpoint}`, uuid);

    return axios.get(url, { headers: headers })
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            throw config.messagingConfig.messages.error.unknown_error ;
        });
}
