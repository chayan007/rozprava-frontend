<template>
  <div class="w-100 mt-2">
    <!-- filter btns -->
    <div class="com-filters row m-0 pb-3">
      <span
        class="row m-0 justify-content-center align-items-center col col-4 pr-1"
      >
        <small
          class="filter-btn shadow w-100 text-center p-2 rounded-pill"
          v-on:click="inclination=null"
          >All</small
        >
      </span>
      <span
        class="row m-0 justify-content-center align-items-center col col-4 pr-1"
      >
        <small
          class="filter-btn shadow w-100 text-center p-2 rounded-pill"
          v-on:click="inclination=1"
          >In Favour</small
        >
      </span>
      <span class="row m-0 justify-content-center align-items-center col col-4">
        <small
          class="filter-btn shadow w-100 text-center p-2 rounded-pill"
          v-on:click="inclination=0"
          >Against</small
        >
      </span>
    </div>

    <!-- comments -->

    <p v-if="debates" >Debates :</p>
    <div v-if="!debates" class="loader-box p-5 w-100 row m-0 justify-content-center align-center">
       <div  class="loader"></div>
    </div>
    <div v-else-if="!debates.length" >
      <p class="text-center">No Debates Yet!</p>
    </div>
    <div v-else class="comments-sec mb-6">
      <Comment
        v-for="(debate, index) in debates"
        :key="index"
        v-show="debate.inclination == inclination || inclination == null"
        :newDebate="debate"
        :createdAt="sanitizedTime(debate.created_at)"
      ></Comment>
    </div>

    <!-- rebuttal -->
    <div class="rebuttal-box w-100" v-show="rebuttal">
      <div class="w-100 row m-0 justify-content-center p-3">
        <p
          class="close-rebuttal shadow-soft p-1 pr-3 pl-3"
          v-on:click="toggleRebuttals"
        >
          Close all tabs
        </p>
      </div>
      <Rebuttal
        :rebuttalItem="rebuttalItem"
        :rebuttalTime="rebuttalTime"
        :uuid="uuid"
      ></Rebuttal>
    </div>

    <!-- add comment dumy box -->
    <div
      class="add-comment-btn-box p-2 row m-0 w-100"
      v-show="!addComment && !rebuttal"
      v-on:click="toggleComment"
    >
      <div class="comm-inp rounded-pill col col-11 p-2 pl-4">
        Add a comment... 
      </div>
      <div class="col col-1 p-0 row m-0 align-items-center pl-1">
        <img class="comm-send-btn" src="@/assets/send.svg" alt="" />
      </div>
    </div>
    <!-- Add comment form -->
    <div class="add-comment-form w-100" v-show="addComment">
      <div class="create-comment-form w-100 p-3 mb-2">
        <div class="w-100 row m-0 justify-content-center p-3">
          <h3
            class="
              create-post-close
              rounded-circle
              row
              m-0
              align-items-center
              justify-content-center
            "
            v-on:click="toggleComment"
          >
            x
          </h3>
        </div>
        <Create :caseUuid="caseUuid" :commentSection="'Debate'"></Create>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/debate/Comment.vue";
import Rebuttal from "@/components/debate/Rebuttal.vue";
import Create from "@/components/debate/Create.vue";

import { debateService } from "@/services";
import { config } from "@/configurations";
import { getSanitizedTime } from "@/helpers";

export default {
  name: "List",
  components: { Comment, Rebuttal, Create },
  props: ["slug", "caseUuid"],
  watch: {
    slug: function () {
      this.loadDebates();
    },
  },
  created() {
    this.loadDebates();
  },

  data() {
    return {
      debates: null,
      addComment: false,
      rebuttal: false,
      rebuttalItem: null,
      rebuttalTime: null,
      uuid: null,
      inclination: null,
    };
  },
  methods: {
    loadDebates() {
      const slug = this.$route.params.slug;
      debateService
        .getDebates(slug)
        .then((debates) => {
          this.debates = debates;
        })
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
        });
    },

    sanitizedTime(createdAt) {
      return getSanitizedTime(createdAt);
    },

    toggleComment() {
      this.addComment = !this.addComment;
    },

    toggleRebuttals(debate, time) {
      this.rebuttal = !this.rebuttal;
      if (this.rebuttal) {
        this.rebuttalItem = debate;
        this.rebuttalTime = time;
        this.uuid = debate.uuid;
      }
    },
  },
  computed: {
    
  }
};
</script>

<style scoped>
.rebuttal-box {
  position: fixed;
  top: 0%;
  left: 0;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.849);
}
.close-rebuttal {
  background-color: white;
  border-radius: 15px;
}

.filter-btn:hover {
  border: 2px solid rgb(173, 173, 173);
}
.add-comment-btn-box {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
}
.comm-inp {
  background-color: rgb(236, 236, 236);
}
.comm-send-btn{
  width: 2em;
}
.add-comment-form {
  position: fixed;
  top: 0%;
  left: 0;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.849);
}

.create-comment-form {
  position: fixed;
  bottom: 0;
  left: 0;
}
.create-post-close {
  height: 1.6em;
  width: 1.6em;
  background-color: white;
  box-shadow: 5px 5px 10px -1px rgba(77, 77, 77, 0.349);
}

/* loader */
.loader-box{
  height: 40vh;
}
.loader {
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #383838;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
