let groupConfig;

groupConfig = {
    api: {
        createGroup:{
            endpoint: "profile/group/",  
        },
        getGroupInformation:{
            endpoint: "profile/group/{0}",  
        },
        makeGroupAdmin:{
           endpoint: "profile/group/admin/{0}"
        },
        leaveGroup:{
            endpoint:"profile/group/leave/{0}"
        }  
    }
}

export {groupConfig}