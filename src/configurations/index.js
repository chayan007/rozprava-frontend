import {activityConfig} from "@/configurations/activity";
import {userConfig} from "@/configurations/user";
import {messagingConfig} from "@/configurations/messages";
import {caseConfig} from "@/configurations/case";

let commonConfig;

if (process.env.NODE_ENV === "PRODUCTION") {
    commonConfig = {
        $apiUrl: "https://rozprava.url",
        timeoutDuration: 30000,
    };
} else {
    commonConfig = {
        $apiUrl: "http://127.0.0.1:8000",
        timeoutDuration: 30000,
    };
}

export const config = {
    'activityConfig': activityConfig,
    'commonConfig': commonConfig,
    'userConfig': userConfig,
    'messagingConfig': messagingConfig,
    'caseConfig': caseConfig
};
