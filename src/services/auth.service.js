import { config } from "@/configurations";
import axios from "axios";
import {handleResponse} from "@/helpers";

export const authService = {
    login,
    logout,
    register
};

function login(username, password) {
    const loginBody = {
        username: username,
        password: password
    }

    return axios
        .post(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.login.endpoint}`,
        loginBody
        )
        .then(response => {
            const data = response.data
            if (data.profile) {
                localStorage.setItem('user', JSON.stringify(data));
                return data.profile
            }
        })
        .catch(error => {
            console.log(error);
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(username, password) {
    const registerBody = {
        username: username,
        password: password
    }

    axios.post(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.login.endpoint}`,
        registerBody
    )
        .then((response) => {
            handleResponse(response)
            if (response.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(response));
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
