import {authHeader, stringFormat} from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const caseService = { getCases };

function getCases(category= null, username = null) {
    const headers = authHeader();
    let url = `${config.commonConfig.$apiUrl}/${config.caseConfig.api.list.endpoint}`;

    // Check if any query parameter is present or not. If present add trailing `?`
    url = (category || username) ? `${url}?` : url

    // Add category to URL if present.
    url = category ? `${url}${stringFormat(
        config.caseConfig.api.list.queryParameters.category,
        category
    )}` : url

    // Add username to URL if present.
    url = username ? `${url}${stringFormat(
        config.caseConfig.api.list.queryParameters.username,
        username
    )}` : url

    return axios
        .get(
            url,
            { headers: headers }
        )
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)});
}
