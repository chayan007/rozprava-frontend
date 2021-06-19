let userConfig;

if (process.env.NODE_ENV === "PRODUCTION") {
    userConfig = {
        api: {
            register: {
                "endpoint": "profile/auth/registration/"
            },
            login: {
                "endpoint": "profile/auth/login/"
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
            }
        },
        constants: {
            debug: false
        }
    };
}

export { userConfig }
