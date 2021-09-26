let caseConfig;

caseConfig = {
    api: {
        list: {
            endpoint: "case/v1/list/",
            queryParameters: {
                username: "username={0}",
                category: "category={0}",
                isOrdered: "is_ordered={0}"
            }
        },
        fetchNotification:{
            endpoint: "notification/v1/",  
        },
        create:{
            endpoint:"case/v1/create/",
        },
        getCase:{
            endpoint:"case/v1/{0}/"
        },
<<<<<<< HEAD
        uploadCaseProof:{
            endpoint:"proof/v1/case/{0}/"
        },
        deleteCaseProof:{
            endpoint:"proof/v1/case/"
        },
=======
        deleteCase:{
            endpoint:"case/v1/{0}/"
        }
>>>>>>> 9bc0a4e0b676c3fc68f2062b6c3867b23067e0ac
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
