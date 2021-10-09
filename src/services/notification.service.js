<<<<<<< HEAD
import { authHeader } from '@/helpers';
=======
import { authHeader} from '@/helpers';
>>>>>>> 8875e0e97c910039a2c08e59c999f87a1df71220
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

