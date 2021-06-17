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

    axios
        .post(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.login.endpoint}`,
        loginBody
        )
        .then(response => {
            console.log(response.data)
            console.log(response.status)
            console.log(response.headers)
            if (response) {
                localStorage.setItem('user', JSON.stringify(response));
            }
        })
        .catch(error => {
            console.log('Error =>', error.response.data);
            console.log('Error =>', error.response.status);
            console.log('Error =>', error);
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
