import { authHeader, stringFormat } from "@/helpers";
import { config } from "@/configurations";
import axios from "axios";

export const groupService = {
  addGroup,
  getGroupInformation,
  leaveGroup,
  makeGroupAdmin,
  getGroupList,
  deleteGroup
};

function addGroup(createGroupBody) {
  const headers = authHeader();
  const url = `${config.commonConfig.$apiUrl}/${config.groupConfig.api.createGroup.endpoint}`;
  return axios
    .post(url, createGroupBody, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw config.messagingConfig.messages.unknown_error;
    });
}

function getGroupInformation(uuid) {
  const headers = authHeader();
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.groupConfig.api.getGroupInformation.endpoint}`,
    uuid
  );
  return axios
    .get(url, this.uuid, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw config.messagingConfig.messages.unknown_error;
    });
}

function leaveGroup(uuid, profile) {
  const headers = authHeader();
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.groupConfig.api.leaveGroup.endpoint}`,
    uuid
  );
  return axios
    .post(url, profile, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw config.messagingConfig.messages.unknown_error;
    });
}

function makeGroupAdmin(uuid) {
  const headers = authHeader();
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.groupConfig.api.makeGroupAdmin.endpoint}`,
    uuid
  );
  return axios
    .post(url, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw config.messagingConfig.messages.unknown_error;
    });
}

function getGroupList(is_my_groups = 0, offset = 0, limit) {
  const headers = authHeader();
  let url = `${config.commonConfig.$apiUrl}/${config.groupConfig.api.getGroupList.endpoint}?is_my_groups=${is_my_groups}&limit=${limit}`;
  if (offset) url = `${url}&offset=${offset.toString()}`;
  return axios
    .get(url, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw config.messagingConfig.messages.unknown_error;
    });
}

function deleteGroup(uuid) {
  const headers = authHeader();
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.groupConfig.api.deleteGroup.endpoint}`,
    uuid
  );
  return axios
    .delete(url, { headers: headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
      throw config.messagingConfig.messages.unknown_error;
    });
}