import { authHeader, stringFormat } from "@/helpers";
import { config } from "@/configurations";
import axios from "axios";

export const searchService = { searchProfile, searchGroup, searchCase };

function searchProfile(username, offset = 0, limit = 10) {
  const headers = authHeader();
  let url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.generalSearchConfig.api.searchProfile.endpoint}?limit=${limit}`,
    username
  );
  if (offset) url = `${url}&offset=${offset.toString()}`;
  return axios
    .get(url, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status == 404) return [];
      throw config.messagingConfig.messages.unknown_error;
    });
}

function searchGroup(username, offset = 0, limit = 10) {
  const headers = authHeader();
  let url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.generalSearchConfig.api.searchGroup.endpoint}?limit=${limit}`,
    username
  );
  if (offset) url = `${url}&offset=${offset}`;
  return axios
    .get(url, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status == 404) return [];
      throw config.messagingConfig.messages.unknown_error;
    });
}

function searchCase(username, offset = 0, limit = 10) {
  const headers = authHeader();
  let url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.generalSearchConfig.api.searchCase.endpoint}?limit=${limit}`,
    username
  );
  if (offset) url = `${url}&offset=${offset}`;
  return axios
    .get(url, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status == 404) return [];
      throw config.messagingConfig.messages.unknown_error;
    });
}
