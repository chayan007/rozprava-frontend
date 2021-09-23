let generalSearchConfig;

generalSearchConfig = {
    api:{
        searchProfile:{
            endpoint: "profile/search/{0}",
        },
        searchGroup:{
            endpoint:"profile/group/search/{0}",
        },
        searchCase:{
            endpoint:"case/v1/search/{0}"
        }
    }
}

export {generalSearchConfig}