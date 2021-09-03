const messagingConfig = {
    messages: {
        error: {
            password_mismatch: 'Both passwords do not match. Please try again.',
            field_error: 'Please fill the {0} properly! {1}',
            unknown_error: 'Look\'s like there is a problem in our side. Please try again later.',
            already_exists_error: 'Look\'s like this {0} is already taken. Please try again.',
            non_authenticated_error: 'You need to be logged in to proceed ahead.',
            empty_field_error: 'The {0} field cannot be empty. Please try again.',
            user_not_found: 'No records found for the username / email.',
            does_not_exist_error: 'This {0} does not exist. Please check again.',
            otp_not_match: 'Wrong OTP submitted. Please request new OTP and try again',
            watched_all: 'You have watched all {0}. Please wait for {0}.'
        },
    }
};

export { messagingConfig }
