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
            settings: {
                "endpoint": "profile/user/{0}/"
            }
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
            settings: {
                "endpoint": "profile/user/{0}/"
            }
        },
        constants: {
            debug: false
        }
    };
}

export { userConfig }
