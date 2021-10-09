import { authHeader, stringFormat } from "@/helpers";
import { config } from "@/configurations";
import axios from "axios";

export const caseService = {
  getCases,
  createCase,
  getCase,
  uploadProof,
  deleteCase,
};

function getCases(category = null, username = null) {
  const headers = authHeader();
  let url = `${config.commonConfig.$apiUrl}/${config.caseConfig.api.list.endpoint}`;

  // Check if any query parameter is present or not. If present add trailing `?`
  url = category || username ? `${url}?` : url;

  // Add category to URL if present.
  url = category
    ? `${url}${stringFormat(
        config.caseConfig.api.list.queryParameters.category,
        category
      )}`
    : url;

  // Add username to URL if present.
  url = username
    ? `${url}${stringFormat(
        config.caseConfig.api.list.queryParameters.username,
        username
      )}`
    : url;

  return axios
    .get(url, { headers: headers })
    .then((response) => {
      if (response.data.length) {
        return response.data;
      } else {
        throw stringFormat(
          config.messagingConfig.messages.notification.watched_all,
          "cases"
        );
      }
    })
    .catch((error) => {
      if (typeof error === "string") {
        throw error;
      }
    });
}

function createCase(createCaseBody) {
  const headers = authHeader();
  const url = `${config.commonConfig.$apiUrl}/${config.caseConfig.api.create.endpoint}`;
  return axios
    .post(url, createCaseBody, { headers: headers })
    .then((response) => {
      const case_info = response.data;
      return case_info;
    })
    .catch((error) => {
      console.log(error.response.data);
      throw config.messagingConfig.messages.unknown_error;
    });
}

function getCase(slug) {
  const headers = authHeader();
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.caseConfig.api.getCase.endpoint}`,
    slug
  );
  return axios
    .get(url, { headers: headers })
    .then((response) => {
      const getCaseInfo = response.data;
      this.uploadProof(getCaseInfo);
      return getCaseInfo;
    })
    .catch(() => {
      throw config.messagingConfig.messages.unknown_error;
    });
}

function uploadProof(proofRequestBody, slug) {
  if (!slug) return;

  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.caseConfig.api.uploadCaseProof.endpoint}`,
    slug
  );
  const authHeaders = authHeader();
  authHeaders["Content-Type"] = "multipart/form-data";

  let data = new FormData();
  for (const [key, fileObj] of Object.entries(proofRequestBody))
    data.append(key, fileObj);
  return axios
    .post(url, data, { headers: authHeaders })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("service level error: ", error.response);
    });
}

function deleteCase(slug) {
  const headers = authHeader();
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.caseConfig.api.deleteCase.endpoint}`,
    slug
  );
  return axios
    .delete(url, { headers: headers })
    .then((response) => {
      const case_info = response.data;
      return case_info;
    })
    .catch(() => {
      throw config.messagingConfig.messages.unknown_error;
    });
}
