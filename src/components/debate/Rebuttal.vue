<template>
    <div class="rebuttal-outer p-2 mb-3 w-100">

        <div class="rebuttal-inner shadow-soft">

            <div class="pre-comment p-3">
                
                <!-- profile bar -->
                <div class="row m-0 justify-content-between w-100">
                    <span class="row m-0 align-items-center">
                        <span class="">
                            <img class="case-profile-pic rounded-circle" src="@/assets/profile-picture-1.jpg" alt="">
                        </span>
                        <span class="pl-2">
                            <small class="case-profile-name m-0 ">Shawn Carter</small>
                            <small>4 min ago</small>
                       </span>
                   </span>
                   <span class="row m-0 align-items-center">
                       <img class="case-menu" src="@/assets/back.svg" alt="">
                   </span>
                </div>

                <!-- case text -->
                <div class="case-box pt-2 mt-2">
                   <h5>Social sites taking away our PRIVACY</h5>  
                   <hr class="m-0 mb-1">
                   <small>We are facing a serious business dilemma, with Facebook taking away a good chunk of traffic to news and content sites, and ad blockers eating into what’s left of it while...</small>
                </div>

                <!-- case reaction box -->
                <div class="reactions-box row justify-content-between m-0 mt-3">
                    <span class="row m-0 align-items-center">

                        <span class="row m-0 align-items-center">
                            <img class="case-react-icons mr-1" src="@/assets/case-like.svg" alt="">
                            <small class="react-txt m-0 mr-3 h6 ">58</small>
                        </span>
                        <span class="row m-0 align-items-center">
                           <img class="case-react-icons mr-1" src="@/assets/case-dislike.svg" alt="">
                            <small class="react-txt m-0 mr-3 h6 ">12</small>
                        </span>
                   </span>
                    <span class="case-view-box row m-0 align-items-center">
                       <small class="react-txt h6 m-0 pl-1">2h ago</small>
                    </span>
                    <small class="col-12 col mt-3 p-0 m-0 font-weight-bold">12 rebuttals</small>
                </div>

            </div>

            <!-- ......List component..... -->
            <div class="w-100 p-3">
                <!-- filter btns -->
                <div class="com-filters row m-0 pb-3">
                <span class="row m-0 justify-content-center align-items-center col col-4 pr-1"> 
                    <small class="filter-btn shadow w-100 text-center p-2 rounded-pill" v-on:click="filterAll">All</small> 
                </span>
                <span class="row m-0 justify-content-center align-items-center col col-4 pr-1"> 
                    <small class="filter-btn shadow w-100 text-center p-2 rounded-pill" v-on:click="filterFor">In Favour</small> 
                </span>
                <span class="row m-0 justify-content-center align-items-center col col-4 "> 
                    <small class="filter-btn shadow w-100 text-center p-2 rounded-pill" v-on:click="filterAgainst">Against</small> 
                </span>
                </div>

                <!-- comments -->
                <p>Comments :</p>
                <div class="comments-sec mb-6">
                <For v-show="fFor" v-on:click="toggleRebuttals()"></For>
                <Against v-show="fAgainst"  v-on:click="toggleRebuttals()"></Against>
                <Against v-show="fAgainst"  v-on:click="toggleRebuttals()"></Against>
                <For v-show="fFor"  v-on:click="toggleRebuttals()"></For>
                </div>

                <!-- add comment dumy box -->
                <div class="add-comment-btn-box-outer p-2 w-100">
                <div class="add-comment-btn-box p-2 row m-0 " v-show="!addComment&&!rebuttal" v-on:click="toggleComment">
                    <div class="comm-inp rounded-pill col col-11 p-2 pl-4">
                       Add a comment...
                    </div>
                    <div class="col col-1 p-0 row m-0 align-items-center pl-1">
                       <img class="comm-send-btn w-100 " src="@/assets/send.svg" alt="">
                    </div>
                </div>
                </div>
                <!-- Add comment form -->
                <div class="add-comment-form w-100" v-show="addComment">
                    <div class="create-comment-form w-100 p-3 mb-2">
                        <div class="w-100 row m-0 justify-content-center p-3">
                            <h3 
                              class="create-post-close rounded-circle 
                              row m-0 align-items-center 
                              justify-content-center"
                               v-on:click="toggleComment">
                            x</h3>
                        </div>
                        <Create></Create>
                    </div>
                </div>

        </div>
        <!-- ......List component..... -->
        </div>

    </div>
</template>


<script>

import For from "@/components/debate/For.vue"
import Against from "@/components/debate/Against.vue"
import Create from "@/components/debate/Create.vue"
export default {
    name: 'List',
    components: {For, Against, Create},
    data(){
        return{
            addComment:false,
            rebuttal: false,
            fFor: true,
            fAgainst: true
        }
    },
    methods:{
        toggleComment(){
            if(this.addComment){
                this.addComment = false
            } else {
                this.addComment = true
            }
        },

        toggleRebuttals(){
             if(this.rebuttal){
                this.rebuttal = false
            } else {
                this.rebuttal = true
            }
        },

        filterAll(){
            this.fFor = true
            this.fAgainst = true
        },
        filterFor(){
            this.fFor = true
            this.fAgainst = false
        },
        filterAgainst(){
            this.fFor = false
            this.fAgainst = true
        }
    }
}
</script>

<style scoped>

.rebuttal-outer{
    position: fixed;
    bottom: 0%;
}
.rebuttal-inner{
    height: 88vh;
    background-color: white;
    border-radius: 20px;
    overflow-y: scroll ;
}
.pre-comment{
    background-color: rgb(238, 238, 238);
}

.case-profile-pic{
    width: 3em;
}
.case-profile-name{
    display: block;
    font-size: 1em;
}
.case-menu{
    width: 1.2em;
}
.case-box hr{
    border: none;
    border-bottom: 1px solid rgb(163, 163, 163);
}
.case-box small{
    font-size: .95em;
    letter-spacing: 1px;
}
.react-txt{
    font-size: .89em;
}
.case-react-icons{
    width: 1.6em;
}
.case-view-icon{
    width: 1.5em;
}
/* .. */

.rebuttal-box{
    position: fixed;
    top: 0%;
    left: 0;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.849);
}
.close-rebuttal{
    background-color: white;
    border-radius: 15px;
}

.filter-btn:hover{
    border: 2px solid rgb(173, 173, 173);
}
.add-comment-btn-box-outer{
    position: fixed;
    bottom: 0;
    left: 0;
}
.add-comment-btn-box{
    background-color: white;
    border-radius: 0 0 20px 20px;
    box-shadow: 3px 8px 10px -3px #53535356;
}
.comm-inp{
    background-color: rgb(236, 236, 236);
}

.add-comment-form{
    position: fixed;
    top: 0%;
    left: 0;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.849);
}

.create-comment-form{
    position: fixed;
    bottom: 0;
    left: 0;
}
.create-post-close{
    height: 1.6em;
    width: 1.6em;
    background-color: white;
    box-shadow: 5px 5px 10px -1px rgba(77, 77, 77, 0.349);
}

</style>

