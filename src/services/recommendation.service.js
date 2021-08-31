import { stringFormat } from '@/helpers';
import { config } from "@/configurations";
import axios from "axios";

export const recommendationService = { getRecommendations };

function getRecommendations() {
    let url = `${config.commonConfig.$apiUrl}/${config.userConfig.api.fetchRecommendation.endpoint}`;

    return axios
    .get(url)
    .then((response) => {
        let recommend = response.data;
        return recommend;
    })
    .catch(() => {
        throw stringFormat(config.messagingConfig.messages.recommendation.failure , 'recommend');
    });
}