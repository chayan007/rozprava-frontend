import { authHeader, stringFormat } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const generalSearchService = { searchProfile, searchGroup }

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
            return response.data;
        })
        .catch(() => {
            throw config.messagingConfig.messages.unknown_error;
        });
}