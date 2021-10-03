<template>
  <div class="rebuttal-outer p-2 mb-3 w-100" v-if="rebuttalItem">
    <div class="rebuttal-inner shadow-soft">
      <div class="pre-comment p-3">
        <!-- profile bar -->
        <div class="row m-0 justify-content-between w-100">
          <span class="row m-0 align-items-center">
            <span class="">
              <img
                class="case-profile-pic rounded-circle"
                :src="rebuttalItem.profile.display_pic"
                alt=""
              />
            </span>
            <span class="pl-2">
              <small class="case-profile-name m-0">{{
                rebuttalItem.profile.user.full_name
              }}</small>
              <small>{{ rebuttalTime }}</small>
            </span>
          </span>
          <!-- <span class="row m-0 align-items-center">
                       <img class="case-menu" src="@/assets/back.svg" alt="">
                   </span> -->
        </div>

        <!-- case text -->
        <div class="case-box pt-2 mt-2">
          <small> {{ rebuttalItem.comment }}</small>
        </div>

        <!-- case reaction box -->
        <div class="reactions-box row justify-content-between m-0 mt-3">
          <span class="row m-0 align-items-center">
            <span class="row m-0 align-items-center">
              <img
                class="case-react-icons mr-1"
                src="@/assets/case-like.svg"
                alt=""
              />
              <small class="react-txt m-0 mr-3 h6">{{
                rebuttalItem.activities[1]
              }}</small>
            </span>
            <span class="row m-0 align-items-center">
              <img
                class="case-react-icons mr-1"
                src="@/assets/case-dislike.svg"
                alt=""
              />
              <small class="react-txt m-0 mr-3 h6">{{
                rebuttalItem.activities[2]
              }}</small>
            </span>
          </span>
          <span class="case-view-box row m-0 align-items-center">
            <small class="react-txt h6 m-0 pl-1">10 proofs</small>
          </span>
          <small
            class="col-12 col mt-3 p-0 m-0 font-weight-bold"
            v-if="rebuttals"
            >{{ rebuttals.length }} rebuttals</small
          >
        </div>
      </div>

      <!-- ......List component..... -->
      <div class="w-100 p-3">
        <!-- filter btns -->
        <div class="com-filters row m-0 pb-3">
          <span
            class="
              row
              m-0
              justify-content-center
              align-items-center
              col col-4
              pr-1
            "
          >
            <small
              class="filter-btn shadow w-100 text-center p-2 rounded-pill"
              v-on:click="inclination = null"
              >All</small
            >
          </span>
          <span
            class="
              row
              m-0
              justify-content-center
              align-items-center
              col col-4
              pr-1
            "
          >
            <small
              class="filter-btn shadow w-100 text-center p-2 rounded-pill"
              v-on:click="inclination = 1"
              >In Favour</small
            >
          </span>
          <span
            class="row m-0 justify-content-center align-items-center col col-4"
          >
            <small
              class="filter-btn shadow w-100 text-center p-2 rounded-pill"
              v-on:click="inclination = 0"
              >Against</small
            >
          </span>
        </div>

        <!-- comments -->
        <p>Rebuttals :</p>
        <div
          v-if="!rebuttals"
          class="
            loader-box
            p-5
            w-100
            row
            m-0
            justify-content-center
            align-center
          "
        >
          <div class="loader"></div>
        </div>
        <div v-else-if="!rebuttals.length">
          <p class="text-center p-4">No Rebuttals Yet!</p>
        </div>
        <div v-else class="comments-sec mb-6">
          <Comment
            v-for="(rebuttal, index) in rebuttals"
            :key="index"
            v-show="rebuttal.inclination == inclination || inclination == null"
            :newDebate="rebuttal"
            :createdAt="sanitizedTime(rebuttal.created_at)"
            :isRebuttal="true"
          ></Comment>
        </div>

        <!-- add comment dumy box -->
        <div class="add-comment-btn-box-outer p-2 w-100">
          <div
            class="add-comment-btn-box p-2 row m-0"
            v-show="!addComment && !openRebuttal"
            v-on:click="toggleComment"
          >
            <div class="comm-inp rounded-pill col col-11 p-2 pl-4">
              Add a comment...
            </div>
            <div class="col col-1 p-0 row m-0 align-items-center pl-1">
              <img class="comm-send-btn" src="@/assets/send.svg" alt="" />
            </div>
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
            <Create :caseUuid="rebuttalItem.uuid" :commentSection="'Rebuttal'"></Create>
          </div>
        </div>
      </div>
      <!-- ......List component..... -->
    </div>
  </div>
</template>

<script>
import Create from "@/components/debate/Create.vue";
import Comment from "@/components/debate/Comment.vue";

import { debateService } from "@/services";
import { config } from "@/configurations";
import { getSanitizedTime } from "@/helpers";
export default {
  name: "Rebuttal",
  components: { Create, Comment },
  props: ["rebuttalItem", "rebuttalTime", "uuid"],
  watch: {
    uuid: function () {
      this.rebuttals = null;
      this.loadRebuttals();
    },
  },
  created() {
    this.loadRebuttals();
  },
  data() {
    return {
      rebuttals: null,
      addComment: false,
      openRebuttal: false,
      inclination: null,
    };
  },

  methods: {
    loadRebuttals() {
      const uuid = this.uuid;
      if (!uuid) {
        return;
      }
      debateService
        .getRebuttals(uuid)
        .then((rebuttals) => {
          this.rebuttals = rebuttals.rebuttals;
          console.log(this.rebuttals);
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
    toggleRebuttals() {
      this.rebuttals = null;
      this.openRebuttal = !this.openRebuttal;
    },
  },
};
</script>

<style scoped>
.rebuttal-outer {
  position: fixed;
  bottom: 0%;
}
.rebuttal-inner {
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  overflow-y: scroll;
}
.pre-comment {
  background-color: rgb(238, 238, 238);
}

.case-profile-pic {
  width: 3em;
  height: 3em;
}
.case-profile-name {
  display: block;
  font-size: 1em;
}
.case-menu {
  width: 1.2em;
}
.case-box hr {
  border: none;
  border-bottom: 1px solid rgb(163, 163, 163);
}
.case-box small {
  font-size: 0.95em;
  letter-spacing: 1px;
}
.react-txt {
  font-size: 0.89em;
}
.case-react-icons {
  width: 1.6em;
}
.case-view-icon {
  width: 1.5em;
}
/* .. */

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
.add-comment-btn-box-outer {
  position: fixed;
  bottom: 0;
  left: 0;
}
.add-comment-btn-box {
  background-color: white;
  border-radius: 0 0 20px 20px;
  box-shadow: 3px 8px 10px -3px #53535356;
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
.loader-box {
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
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
