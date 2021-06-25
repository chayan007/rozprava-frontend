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
            debug: true,
            password_length: [8, 100]
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
            debug: false,
            password_length: [8, 100]
        }
    };
}

export { userConfig }
