import { authHeader } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const groupService = { addGroup }

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
