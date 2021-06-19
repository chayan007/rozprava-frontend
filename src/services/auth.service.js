import { config } from "@/configurations";
import axios from "axios";

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

function register(name, email, phone, username, password1, password2) {
    const registerBody = {
        username: username,
        password1: password1,
        password2: password2,
        email: email,
        phone: phone,
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' ').replace(/\s+/g,' ').trim()
    }

    return axios.post(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.register.endpoint}`,
        registerBody
    )
        .then((response) => {
            const data = response.data
            if (data.profile) {
                localStorage.setItem('user', JSON.stringify(data));
                return data.profile
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
