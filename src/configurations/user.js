let userConfig;

if (process.env.NODE_ENV === "PRODUCTION") {
    userConfig = {
        api: {
            register: {
                "endpoint": "register"
            },
            login: {
                "endpoint": "login"
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
                "endpoint": "register",
            },
            login: {
                "endpoint": "login"
            }
        },
        constants: {
            debug: false
        }
    };
}

export { userConfig }
