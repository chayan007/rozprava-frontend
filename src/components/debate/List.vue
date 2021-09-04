<template>
    <div class="w-100 mt-2">

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

        <!-- rebuttal -->
        <div class="rebuttal-box w-100" v-show="rebuttal">
            <div class="w-100 row m-0 justify-content-center p-3">
                <p class="close-rebuttal shadow-soft p-1 pr-3 pl-3" v-on:click="toggleRebuttals">Close all tabs</p>
            </div>
            <Rebuttal :debateUuid="1"></Rebuttal>
        </div>

        <!-- add comment dumy box -->
        <div class="add-comment-btn-box p-2 row m-0 w-100" v-show="!addComment&&!rebuttal" v-on:click="toggleComment">
            <div class="comm-inp rounded-pill col col-11 p-2 pl-4">
                Add a comment...
            </div>
            <div class="col col-1 p-0 row m-0 align-items-center pl-1">
                <img class="comm-send-btn w-100 " src="@/assets/send.svg" alt="">
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
</template>


<script>

import For from "@/components/debate/For.vue"
import Against from "@/components/debate/Against.vue"
import Rebuttal from "@/components/debate/Rebuttal.vue";
import Create from "@/components/debate/Create.vue"
export default {
    name: 'List',
    components: {For, Against,Rebuttal, Create},
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
.add-comment-btn-box{
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
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