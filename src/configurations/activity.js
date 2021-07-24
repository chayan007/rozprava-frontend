let activityConfig;

activityConfig = {
    api: {
        case: {
            endpoint: "case/activity/{}/{}"
        },
        debate: {
            endpoint: "debate/activity/{}/{}"
        }
    },
    categories: {
        REPORT: 0,
        UPVOTE: 1,
        DOWNVOTE: 2,
        VIEW: 3
    }
};

export { activityConfig };
