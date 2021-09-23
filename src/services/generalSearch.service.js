import { authHeader, stringFormat } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const generalSearchService = { searchProfile, searchGroup, searchCase }

function searchProfile(username) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.generalSearchConfig.api.searchProfile.endpoint}`, username);
    return axios
        .get(
            url,
            { headers: headers },
        )
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            throw config.messagingConfig.messages.unknown_error;
        });
}

function searchGroup(username) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.generalSearchConfig.api.searchGroup.endpoint}`, username);
    return axios
        .get(
            url,
            { headers: headers },
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            if (error.response.status == 404)
                return [];
            throw config.messagingConfig.messages.unknown_error;
        });
}

function searchCase(username) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.generalSearchConfig.api.searchCase.endpoint}`, username);
    return axios
        .get(
            url,
            { headers: headers },
        )
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            throw config.messagingConfig.messages.unknown_error;
        });
}