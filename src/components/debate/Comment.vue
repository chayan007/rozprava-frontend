<template>
  <div
    v-if="debate"
    class="row m-0 mb-3"
    :class="[
      !debate.inclination ? 'justify-content-end' : 'justify-content-start',
    ]"
  >
    <div
      class="col col-10 p-2"
      :class="[!debate.inclination ? 'aga-com' : 'for-com']"
    >
      <!-- profile -->
      <div
        class="
          com-profile-box
          row
          align-items-center
          justify-content-between
          m-0
        "
      >
        <div>
          <img
            class="com-pro-img rounded-circle"
            :src="debate.profile.display_pic"
            alt="profile picture"
          />
          <small class="ml-2 h6 m-0">{{ debate.profile.user.full_name }}</small>
        </div>
        <div class="text-right dropdown">
          <img
            class="comment-menu nav-link p-0"
            data-toggle="dropdown"
            src="@/assets/menu-dots.svg"
            alt="menu dots"
          />

          <!-- dropdown -->
          <ul class="dropdown-menu p-3">
            <li
              v-if="
                is_authenticated.profile.user.username ==
                debate.profile.user.username
              "
            >
              <div
                class="d-flex justify-content-between align-items-center"
                @click="deleteDebate()"
              >
                <span class="leave-btn-text h6 m-0">Delete</span>
                <img class="icon" src="@/assets/delete.svg" alt="delete icon" />
              </div>
            </li>
            <li v-else>
              <div
                class="d-flex justify-content-between align-items-center"
                @click="activity(0)"
              >
                <span class="admin-tag h6 m-0">Report</span>
                <img
                  class="icon"
                  src="@/assets/report.svg"
                  alt="report a post icon"
                />
              </div>
            </li>
          </ul>
          <!-- dropdown -->
        </div>
      </div>

      <!-- body -->
      <div class="com-body mt-2 pl-1">
        <small>
          {{ debate.comment }}
        </small>
      </div>

      <!-- proofs -->
      <!-- <div class="mt-2" v-if="debate.proofs">
        <small v-if="!showProofs" @click="showProofs = 1">Show proofs</small>
        <small v-else @click="showProofs = 0">Hide proofs</small>
      </div>
      <div v-if="debate.proofs && showProofs" class="proofs-box w-100 my-4 d-flex">
        <div
          class="proof mr-4"
          v-for="proof in debate.proofs"
          :key="proof.uuid"
        >
          <Proof :proof="proof" />
        </div>
      </div> -->

      <hr class="mb-0 mt-2" />
      <!-- reactions -->
      <div class="com-react-box row justify-content-between m-0 p-1">
        <span class="row m-0 align-items-center">
          <span @click="activity(1)" class="row m-0 align-items-center">
            <img
              v-if="activityDone == 1"
              class="case-react-icons mr-1"
              src="@/assets/liked.svg"
              alt="liked icon"
            />
            <img
              v-else
              class="case-react-icons mr-1"
              src="@/assets/like.svg"
              alt="like icon"
            />
            <small class="react-txt m-0 mr-3 h6">{{
              debate.activities[1]
            }}</small>
          </span>
          <span @click="activity(2)" class="row m-0 align-items-center">
            <img
              v-if="activityDone == 2"
              class="case-react-icons mr-1"
              src="@/assets/disliked.svg"
              alt="disliked icon"
            />
            <img
              v-else
              class="case-react-icons mr-1"
              src="@/assets/dislike.svg"
              alt="dislike icon"
            />
            <small class="react-txt m-0 mr-2 h6">{{
              debate.activities[2]
            }}</small>
          </span>
          <span>
            <small
              class="font-weight-bold"
              v-on:click="toggleRebuttals()"
              v-if="!isRebuttal"
              >Rebuttals</small
            >
          </span>
        </span>
        <span class="case-view-box row m-0 align-items-center">
          <small class="react-txt h6 m-0 pl-1">{{ createdAt }}</small>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from "@/configurations";
import { debateService } from "@/services";
import { activityService } from "@/services";
// import Proof from "@/components/case/Proofs.vue";

import router from "@/router";

export default {
  name: "Against",
  // components: { Proof },
  props: ["newDebate", "createdAt", "isRebuttal"],
  data() {
    return {
      debate: this.newDebate,
      cAgainst: false,
      uuid: this.newDebate.uuid,
      activityDone: null,
      showProofs: 0
    };
  },
  methods: {
    toggleRebuttals() {
      this.$parent.toggleRebuttals(this.newDebate, this.createdAt);
    },

    deleteDebate() {
      const uuid = this.uuid;
      const { dispatch } = this.$store;

      debateService
        .deleteDebate(uuid)
        .then(() => {
          const slug = this.$route.params.slug;
          router.push({
            name: "CaseDetail",
            params: { slug: slug },
          });

          this.$router.go();
        })
        .catch(() => {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.unknown_error
          );
        });
    },
    activity(act) {
      this.activityDone = act;
      const uuid = this.debate.uuid;
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
  computed: {
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1.5em;
}
.dropdown-menu {
  left: -6em !important;
  border: none;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.233);
}
.for-com {
  background-color: #e7ffe5;
  border-radius: 15px;
}
.aga-com {
  background-color: #ffebe5;
  border-radius: 15px;
}
.com-pro-img {
  width: 2.2em;
  height: 2.2em;
}
.com-body small {
  font-size: 0.9em;
  letter-spacing: 1px;
  white-space: pre-wrap;
}
.case-react-icons {
  width: 1.2em;
}
.react-txt {
  font-size: 0.8em;
}
.comment-menu {
  width: 1.2em;
}
.comment-menu-box {
  position: absolute;
  left: 0%;
}
.comment-menu-box p {
  border-radius: 10px;
  background-color: #a91e2c;
  color: #fff;
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