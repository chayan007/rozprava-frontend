let userConfig;

if (process.env.NODE_ENV === "PRODUCTION") {
    userConfig = {
        api: {
            register: {
                endpoint: "profile/auth/registration/"
            },
            login: {
                endpoint: "profile/auth/login/"
            },
            socialAuth: {
                google: {
                    endpoint: "profile/social-auth/google/"
                }
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
                endpoint: "profile/auth/registration/",
            },
            login: {
                endpoint: "profile/auth/login/"
            },
            socialAuth: {
                google: {
                    endpoint: "profile/social-auth/google/"
                }
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
