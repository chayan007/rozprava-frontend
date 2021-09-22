import {authHeader, stringFormat} from '@/helpers';
import {config} from "@/configurations";
import axios from "axios";

export const debateService = {getDebates, getRebuttals, createDebate, createRebuttal, deleteDebate};

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
            console.log(error.response)
            throw config.messagingConfig.messages.unknown_error;
        });
}


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

function createRebuttal(createRebuttalBody) {
    const headers = authHeader();
    const url = `${config.commonConfig.$apiUrl}/${config.debateConfig.api.createRebuttal.endpoint}`;
    return axios
        .post(
            url,
            createRebuttalBody,
            { headers: headers },
        )
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(error.response)
            throw config.messagingConfig.messages.unknown_error;
        });
}


function deleteDebate(uuid) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.debateConfig.api.deleteDebate.endpoint}`, uuid);
    return axios
        .delete(
            url,
            { headers: headers },
        )
        .then((response) => {
            const debate_info = response.data
            return debate_info;
        })
        .catch((error) => {
            console.log(error.response)
            throw config.messagingConfig.messages.unknown_error;
        });
}