let debateConfig;


debateConfig = {
    api: {
        getDebates : {
            endpoint : "debate/v1/list/?slug={0}"
        },
        getRebuttals : {
            endpoint : "debate/v1/detail/{0}/"
        },
        create:{
            endpoint : "debate/v1/create/{0}/",
        },
        createRebuttal : {
            endpoint : "debate/v1/rebuttal/create/"
<<<<<<< HEAD
        },
        deleteDebate : {
            endpoint : "debate/v1/detail/{0}/"
=======
>>>>>>> 52af52a448ffcc6e29d69b809b2643eaec492ec6
        }
    }
}

export { debateConfig }
