let activityConfig;

activityConfig = {
    api: {
        case: {
            endpoint: "case/activity/{}/{}"
        },
        debate: {
            endpoint: "debate/activity/{}/{}"
        },
        fetchActivity: {
            endpoint: "activity/v1/list/"
        },
        postCaseActivity: {
            endpoint: "case/v1/activity/{0}/{1}"
        },
        postDebateActivity: {
            endpoint: "debate/v1/activity/{0}/{1}"
        },
    },
    categories: {
        REPORT: 0,
        UPVOTE: 1,
        DOWNVOTE: 2,
        VIEW: 3
    }
};

export { activityConfig };
