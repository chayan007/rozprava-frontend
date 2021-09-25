import {userConfig} from "@/configurations/user";
import {messagingConfig} from "@/configurations/messages";
import {caseConfig} from "@/configurations/case";
import {notificationConfig} from "@/configurations/notification";
import {groupConfig} from "@/configurations/group";
import {generalSearchConfig} from "@/configurations/generalSearch";
import {debateConfig} from "@/configurations/debate";
import { activityConfig } from "@/configurations/activity";

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
    'notificationConfig':notificationConfig,
    'groupConfig':groupConfig,
    'generalSearchConfig':generalSearchConfig,
    'debateConfig': debateConfig,
    'activityConfig':activityConfig
};
