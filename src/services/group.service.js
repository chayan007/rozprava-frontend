import { authHeader, stringFormat } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const groupService = { searchProfile, addGroup, getGroupInformation }

function searchProfile(username) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.groupConfig.api.searchProfile.endpoint}`, username);
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

function addGroup(createGroupBody) {
    const headers = authHeader();
    const url = `${config.commonConfig.$apiUrl}/${config.groupConfig.api.createGroup.endpoint}`;
    return axios
        .post(
            url,
            createGroupBody,
            { headers: headers },
        )
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            throw config.messagingConfig.messages.unknown_error;
        });
}

function getGroupInformation(uuid) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.groupConfig.api.getGroupInformation.endpoint}`, uuid);
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
