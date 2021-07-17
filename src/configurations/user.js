let userConfig;

if (process.env.NODE_ENV === "PRODUCTION") {
    userConfig = {
        api: {
            register: {
                "endpoint": "profile/protected/registration/"
            },
            login: {
                "endpoint": "profile/protected/login/"
            }
        },
        constants: {
            debug: true,
            password_length: [8, 100],
            mobile_length: [10, 10]
        }
    };
} else {
    userConfig = {
        api: {
            register: {
                "endpoint": "profile/protected/registration/",
            },
            login: {
                "endpoint": "profile/protected/login/"
            }
        },
        constants: {
            debug: false,
            password_length: [8, 100],
            mobile_length: [10, 10]
        }
    };
}

export { userConfig }
