import { config } from "@/configurations";
import axios from "axios";
import {stringFormat} from "@/helpers";

export const authService = {
    login,
    logout,
    register,
    checkUser,
    OTP,
    verifyOtp,
    resetPassword
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
            const data = error.response.data;
            if ('non_field_errors' in data){
                throw data.non_field_errors[0];
            } else {
                throw config.messagingConfig.messages.error.unknown_error;
            }
        });
}

function logout() {
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
            const data = error.response.data;
            if ('non_field_errors' in data){
                throw data.non_field_errors[0];
            } else if ('email' in data) {
                throw stringFormat(config.messagingConfig.messages.error.already_exists_error, 'email');
            } else if ('username' in data) {
                throw stringFormat(config.messagingConfig.messages.error.already_exists_error, 'username');
            } else if ('first_name' in data || 'last_name' in data) {
                throw stringFormat(config.messagingConfig.messages.error.field_error, 'name', 'It cannot be empty.');
            } else if ('mobile_number' in data) {
                throw stringFormat(config.messagingConfig.messages.error.already_exists_error, 'mobile number');
            } else {
                throw config.messagingConfig.messages.error.unknown_error;
            }
        });
}

function checkUser(userId) {
    
    console.log(userId);
     return axios.get(
        stringFormat(`${config.commonConfig.$apiUrl}/${config.userConfig.api.checkUser.endpoint}`, userId)
    )
        .then((response) =>{
            console.log('response =', response.data);
            if ('username' in response.data) {
                return response.data.username;
            } else{
                throw 'this username does not exist, please enter proper username';
            }
        })
        .catch((error) => {
            console.log('error =', error.data);
        }) 
}

function OTP() {
    return axios.post(
        stringFormat(`${config.commonConfig.$apiUrl}/${config.userConfig.api.sendOtp.endpoint}`)
   )  
}

function verifyOtp(otp){
    return axios.put(
        stringFormat(`${config.commonConfig.$apiUrl}/${config.userConfig.api.verifyOtp.endpoint}`, otp)
    )
}

function resetPassword(otp, password){
    return axios.put(
        `${config.commonConfig.$apiUrl}/${config.userConfig.api.resetPassword.endpoint}`, otp, password
    )
}
