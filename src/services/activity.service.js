import { authHeader, stringFormat } from "@/helpers";
import { config } from "@/configurations";
import axios from "axios";

export const activityService = { getActivity, caseActivity, debateActivity };

function getActivity(uuid, category) {
  const headers = authHeader();

  let url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.activityConfig.api.fetchActivity.endpoint}`,
    uuid,
    category
  );
  return axios
    .get(url, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw config.messagingConfig.messages.error.unknown_error;
    });
}

function caseActivity(uuid, category) {
  const headers = authHeader();

  let url = stringFormat(`${config.commonConfig.$apiUrl}/${config.activityConfig.api.postCaseActivity.endpoint}`, uuid, category);
  console.log(headers);
  return axios
    .post(url,{}, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw config.messagingConfig.messages.error.unknown_error;
    });
}

function debateActivity(uuid, category) {
  const headers = authHeader();

  let url = stringFormat(`${config.commonConfig.$apiUrl}/${config.activityConfig.api.postDebateActivity.endpoint}`, uuid, category);
  return axios
    .post(url,{}, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw config.messagingConfig.messages.error.unknown_error;
    });
}
