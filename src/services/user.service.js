import { authHeader } from "@/helpers";
import { config } from "@/configurations";
import axios from "axios";
import { stringFormat } from "@/helpers";

export const userService = {
  settings,
  getProfile,
  getRecommendations,
  followUser,
};

function settings(updateFields) {
  const authenticationHeader = authHeader();
  const existingUsername = JSON.parse(localStorage.getItem("user")).profile.user
    .username;
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.userConfig.api.settings.endpoint}`,
    existingUsername
  );

  console.log("field",updateFields);

  let updatedSettings = new FormData();
  for (const [key, settingsObj] of Object.entries(updateFields))
    updatedSettings.append(key, settingsObj);

  return axios
    .put(url, updatedSettings, { headers: authenticationHeader })
    .then((response) => {
      const data = response.data;
      if (data.profile) {
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function getProfile(username) {
  const authenticationHeader = authHeader();
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.userConfig.api.getProfile.endpoint}`,
    username
  );

  return axios
    .get(url, { headers: authenticationHeader })
    .then((response) => {
      const data = response.data;
      if (data) {
        return data;
      } else {
        throw config.messagingConfig.messages.error.unknown_error;
      }
    })
    .catch(() => {
      throw stringFormat(
        config.messagingConfig.messages.error.does_not_exist_error,
        username
      );
    });
}

function getRecommendations() {
  let url = `${config.commonConfig.$apiUrl}/${config.userConfig.api.fetchRecommendations.endpoint}`;

  return axios
    .get(url)
    .then((response) => {
      let recommend = response.data;
      return recommend;
    })
    .catch(() => {
      throw stringFormat(
        config.messagingConfig.messages.error.unknown_error,
        "recommend"
      );
    });
}

function followUser(username) {
  const authenticationHeader = authHeader();
  const url = stringFormat(
    `${config.commonConfig.$apiUrl}/${config.userConfig.api.sendFollowUser.endpoint}`,
    username
  );

  return axios
    .post(url, {}, { headers: authenticationHeader })
    .then((response) => {
      const data = response.data;

      if (data) {
        console.log(data);
        return data;
      } else {
        throw config.messagingConfig.messages.error.unknown_error;
      }
    })
    .catch(() => {
      throw stringFormat(
        config.messagingConfig.messages.error.does_not_exist_error,
        username
      );
    });
}
