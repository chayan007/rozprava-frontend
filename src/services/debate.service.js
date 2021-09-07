import { authHeader, stringFormat } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const debateService = { getDebates };

function getDebates(slug) {
    const headers = authHeader();
    const url = stringFormat(`${config.commonConfig.$apiUrl}/${config.debateConfig.api.endpoint}`, slug);

    return axios
        .get(
            url,
            { headers: headers }
        )
        .then((response) => {
            let info_debate = (response.data)
            return info_debate;
            // console.log(info_debate);
        })
        .catch(() => {
            throw config.messagingConfig.messages.error.unknown_error ;
        });
}

