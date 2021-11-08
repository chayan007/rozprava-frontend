import * as moment from "moment";

export function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const requestTimestamp = moment().format("DDMMYYhh").toString();
    const randomPadding = Math.random() * (999999 - 100000) + 100000;
    const securityKey = btoa(
        `${requestTimestamp}${randomPadding}${requestTimestamp.split("").reverse().join("")}`
    );
    let apiHeader = { 'X-Security-Key': securityKey };
    if (user && user.token)
        apiHeader['Authorization'] = 'JWT ' + user.token;
    return apiHeader;
}

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem('user');
                this.$router.go(1)
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
