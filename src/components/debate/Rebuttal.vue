<template>
  <div class="rebuttal-outer p-2 mb-3 w-100" v-if="rebuttalItem">
    <div class="rebuttal-inner shadow border-light border">
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

        <!-- proofs -->
        <div class="mt-2" v-if="rebuttalItem.proofs.length">
          <p v-if="!showProofs" @click="showProofs = 1">Show proofs</p>
          <p v-else @click="showProofs = 0">Hide proofs</p>
        </div>
        <div
          v-if="showProofs && rebuttalItem.proofs"
          class="proofs-box w-100 my-4 d-flex"
        >
          <div
            class="proof mr-4"
            v-for="proof in rebuttalItem.proofs"
            :key="proof.uuid"
          >
            <Proof :proof="proof" />
          </div>
        </div>

        <!-- case reaction box -->
        <div class="reactions-box row justify-content-between m-0 mt-3">
          <span class="row m-0 align-items-center">
            <span @click="activity(1)" class="row m-0 align-items-center">
              <img
                v-if="liked"
                class="case-react-icons mr-1"
                src="@/assets/liked.svg"
                alt=""
              />
              <img
                v-else
                class="case-react-icons mr-1"
                src="@/assets/like.svg"
                alt=""
              />
              <small class="react-txt m-0 mr-3 h6">{{ metrics[1] }}</small>
            </span>
            <span @click="activity(2)" class="row m-0 align-items-center">
              <img
                v-if="disliked"
                class="case-react-icons mr-1"
                src="@/assets/disliked.svg"
                alt=""
              />
              <img
                v-else
                class="case-react-icons mr-1"
                src="@/assets/dislike.svg"
                alt=""
              />
              <small class="react-txt m-0 mr-3 h6">{{ metrics[2] }}</small>
            </span>
          </span>
          <span class="case-view-box row m-0 align-items-center">
            <small class="react-txt h6 m-0 pl-1"
              >{{ rebuttalItem.proofs.length }} proofs</small
            >
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
        <Loader class="my-4" v-if="!rebuttals"></Loader>
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
            <Create
              :caseUuid="rebuttalItem.uuid"
              :commentSection="'Rebuttal'"
            ></Create>
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
import Proof from "@/components/case/Proofs.vue";
import Loader from "@/components/Loader.vue";

import { debateService } from "@/services";
import { activityService } from "@/services";
import { config } from "@/configurations";
import { getSanitizedTime } from "@/helpers";
export default {
  name: "Rebuttal",
  components: { Create, Comment, Proof, Loader },
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
  computed: {
    metrics() {
      if (this.rebuttalItem) {
        return this.rebuttalItem.activities;
      } else {
        return [0, 0, 0, 0];
      }
    },
  },
  data() {
    return {
      rebuttals: null,
      addComment: false,
      openRebuttal: false,
      inclination: null,
      showProofs: 1,
      liked: null,
      disliked: null,
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

    activity(act) {
      if (act == 1) {
        if (this.liked) {
          this.metrics[1]--;
          this.liked = 0;
        } else {
          this.metrics[1]++;
          this.liked = 1;
          if (this.disliked) {
            this.metrics[2]--;
            this.disliked = 0;
          }
        }
      } else if (act == 2) {
        if (this.disliked) {
          this.metrics[2]--;
          this.disliked = 0;
        } else {
          this.metrics[2]++;
          this.disliked = 1;
          if (this.liked) {
            this.metrics[1]--;
            this.liked = 0;
          }
        }
      }
      const uuid = this.rebuttalItem.uuid;
      activityService
        .debateActivity(uuid, act)
        .then(() => {
          console.log(act);
        })
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
        });
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
.comm-send-btn {
  width: 2em;
}
.add-comment-form {
  position: fixed;
  top: 0%;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.418);
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
/* proofs */
.proofs-box {
  overflow-x: auto;
  white-space: nowrap;
}
.proofs-box::-webkit-scrollbar {
  display: none;
}
</style>
