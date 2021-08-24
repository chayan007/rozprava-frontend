import { authHeader , stringFormat} from '@/helpers';
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
            return info_notify;
        })
        .catch(() => {
            throw stringFormat(config.messagingConfig.messages.notification.failure , 'info_notify');
        });
}

