import { authHeader} from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const notificationService = { getNotification };

function getNotification() {
    const headers = authHeader();
    let url = `${config.commonConfig.$apiUrl}/${config.notificationConfig.api.fetchNotification.endpoint}`;

    return axios
        .get(
            url,
            { headers: headers }
        )
        .then((response) => {
            let info_notify = (response.data)
            return info_notify;
        })
        .catch(() => {
            throw config.messagingConfig.messages.error.unknown_error;
        });
}

