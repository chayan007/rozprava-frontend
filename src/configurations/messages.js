const messagingConfig = {
    messages: {
        error: {
            password_mismatch: 'Both passwords do not match. Please try again.',
            field_error: 'Please fill the {0} properly! {1}',
            unknown_error: 'Look\'s like there is a problem in our side. Please try again later.',
            already_exists_error: 'Look\'s like this {0} is already taken. Please try again.',
            non_authenticated_error: 'You need to be logged in to proceed ahead.',
            empty_field_error: 'The {} field cannot be empty. Please try again.',
            empty_otp_field: 'Please enter otp',
            user_not_found: 'No records found for the username / email.',
            does_not_exist_error: 'This {0} does not exist. Please check again.',
        },
        notification: {
            watched_all_cases: 'You have watched all cases. Please wait till someone raises some.'
        }
    }
};


export { messagingConfig }
