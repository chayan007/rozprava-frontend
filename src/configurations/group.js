let groupConfig;

groupConfig = {
  api: {
    createGroup: {
      endpoint: "profile/group/",
    },
    getGroupInformation: {
      endpoint: "profile/group/{0}",
    },
    leaveGroup: {
      endpoint: "profile/group/leave/{0}",
    },
    makeGroupAdmin: {
      endpoint: "profile/group/admin/{0}",
    },
    getGroupList: {
      endpoint: "profile/groups/"
    },
    deleteGroup:{
      endpoint:"profile/group/delete/{0}"
    }
  },
};

export { groupConfig };
