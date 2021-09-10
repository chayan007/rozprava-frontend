import {userConfig} from "@/configurations/user";
import {messagingConfig} from "@/configurations/messages";
import {caseConfig} from "@/configurations/case";
import {notificationConfig} from "@/configurations/notification";
import {debateConfig} from "@/configurations/debate";
import {rebuttalConfig} from "@/configurations/rebuttal";

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
    'commonConfig': commonConfig,
    'userConfig': userConfig,
    'messagingConfig': messagingConfig,
    'caseConfig': caseConfig,
    'notificationConfig': notificationConfig,
    'debateConfig': debateConfig,
    'rebuttalConfig': rebuttalConfig
};
