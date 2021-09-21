import {authHeader} from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const activityService = { getActivity };

function getActivity() {
    const headers = authHeader();
    let url = `${config.commonConfig.$apiUrl}/${config.activityConfig.api.fetchActivity.endpoint}`;
    return axios
        .get(
            url,
            { headers: headers }
        )
        .then((response) => {                      
            return response.data;
        })
        .catch(() => {
            throw config.messagingConfig.messages.error.unknown_error;
        });

}