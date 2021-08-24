let caseConfig;

caseConfig = {
    api: {
        list: {
            endpoint: "case/v1/list/",
            queryParameters: {
                username: "username={}",
                category: "category={}",
                isOrdered: "is_ordered={}"
            }
        },
        fetchNotification:{
            endpoint: "notification/v1/",  
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
    status: ['Revoked', 'Active', 'Under Review'],
    list_routes: {
        "/timeline": "TIMELINE",
        "/cases/profile": "SELF"
    }
};

export { caseConfig }
