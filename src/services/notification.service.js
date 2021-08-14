import { authHeader } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const notificationService = { getNotification };

function getNotification() {
    const headers = authHeader();
    let url = `${config.commonConfig.$apiUrl}/${config.caseConfig.api.fetchNotification.endpoint}`;

    return axios
        .get(
            url,
            { headers: headers }
        )
        .then((response) => {
            let info_notify = (response.data)
            console.log((info_notify))
            return (info_notify)
        })
        .catch((error) => {
            console.log(error)
            if (typeof error === 'string') {
                throw error;
            }
        });
}

