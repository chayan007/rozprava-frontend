let debateConfig;


debateConfig = {
    api: {
        getDebates: {
            endpoint: "debate/v1/list/?slug={0}"
        },
        getRebuttals: {
            endpoint: "debate/v1/detail/{0}/"
        },
        create:{
            endpoint:"​debate​/v1​/create​/{0}​/",
        }
    }
}
 
export { debateConfig }
