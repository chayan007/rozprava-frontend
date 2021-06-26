let userConfig;

if (process.env.NODE_ENV === "PRODUCTION") {
    userConfig = {
        api: {
            register: {
                "endpoint": "profile/auth/registration/"
            },
            login: {
                "endpoint": "profile/auth/login/"
            },
            /*edit: {
                "endpoint":"profile/user/{{username}}"
            },*/
        },
        constants: {
            debug: true
        }
    };
} else {
    userConfig = {
        api: {
            register: {
                "endpoint": "profile/auth/registration/",
            },
            login: {
                "endpoint": "profile/auth/login/"
            },
            /*edit: {
                "endpoint":"profile/user/{{username}}"
            }*/
        },
        constants: {
            debug: false
        }
    };
}

export { userConfig }
