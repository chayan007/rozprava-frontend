let caseConfig;

caseConfig = {
    api: {
        list: {
            endpoint: "case/list/",
            queryParameters: {
                username: "username={}",
                category: "category={}",
                isOrdered: "is_ordered={}"
            }
        }
    },
    categories: {
        OTHER: 0,
        POLITICS: 1,
        SPORTS: 2,
        EDUCATION: 3,
        ADULT: 4,
        SPIRITUAL: 5,
        ENTERTAINMENT: 6,
        BUSINESS: 7,
        TECHNOLOGY: 8,
        NATURE: 9,
    },
    status: ['Revoked', 'Active', 'Under Review']
};

export { caseConfig }
