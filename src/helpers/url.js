import {stringFormat} from "@/helpers/string";

export function compileURL(apiConfig, pathValues = null, queryValues = null) {
    if (!apiConfig.endpoint){
        throw ReferenceError('No `endpoint` found in the API configuration.');
    }
    let URL = apiConfig.endpoint;

    if (pathValues){
        URL = stringFormat(URL, ...pathValues);
    }

    if (apiConfig.queryParameters && queryValues){
        URL = `${URL}?`;
        for (const [key, value] of Object.entries(apiConfig.queryParameters)) {
            if (key in queryValues) {
                URL = `${URL}${stringFormat(value, queryValues.key)}`;
            }
        }
    }

    return URL;
}
