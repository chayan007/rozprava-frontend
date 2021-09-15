import { authHeader, stringFormat } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const groupService = { searchProfile , addGroup }

function searchProfile(username){
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.groupConfig.api.searchProfile.endpoint}`, username);
    return axios
        .get(
            url,
            { headers: headers },
        )
        .then((response) => {
            const profile_info = response.data
            return profile_info;
        })
        .catch((error) => {
            console.log(error.response.data)
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
            const group_info = response.data
            console.log(group_info);
            return group_info;
        })
        .catch((error) => {
            console.log(error.response.data)
            throw config.messagingConfig.messages.unknown_error;
        });
}
