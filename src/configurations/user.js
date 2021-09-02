let userConfig;

if (process.env.NODE_ENV === "PRODUCTION") {
    userConfig = {
        api: {
            register: {
                endpoint : "profile/auth/registration/"
            },
            login: {
                "endpoint": "profile/auth/login/"
            },
            settings: {
                "endpoint": "profile/user/{0}/"
            },
            checkUser: {
                "endpoint": "profile/reset-password/check-user/{0}/"
            },
            sendOtp: {
                "endpoint": "profile/reset-password/send-otp/{0}/"
            },
            verifyOtp: {
                "endpoint": "profile/reset-password/verify-otp/{0}/{1}/"
            },
            resetPassword: {
                "endpoint": "profile/reset-password/change-password/{0}/"
            },
            getProfile:{
                "endpoint": "profile/user/{0}/"
            },
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
                endpoint : "profile/auth/registration/",
            },
            login: {
                "endpoint": "profile/auth/login/"
            },
            settings: {
                "endpoint": "profile/user/{0}/"
            },
            checkUser: {
                "endpoint": "profile/reset-password/check-user/{0}/"
            },
            sendOtp: {
                "endpoint": "profile/reset-password/send-otp/{0}/"
            },
            verifyOtp: {
                "endpoint": "profile/reset-password/verify-otp/{0}/{1}/"
            },   
            resetPassword: {
                "endpoint": "profile/reset-password/change-password/{0}/"
            },      
            getProfile:{
                "endpoint": "profile/user/{0}/"
            },
        },
        constants: {
            debug: false,
            password_length: [8, 100],
            mobile_length: [10, 10]
        }
    };
}

export { userConfig }
