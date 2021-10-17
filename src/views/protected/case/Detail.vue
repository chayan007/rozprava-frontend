<template>
  <div class="detail-case-box w-100" v-if="caseDetail">
    <!-- case banner art -->
    <div class="case-head-box w-100">
      <img class="case-head-img w-100" src="@/assets/Detail-case.png" alt="" />
    </div>
    <!-- close btn -->

    <!-- full case box -->
    <div class="case-detail w-100 mt-9 p-3">
      <!-- profile bar -->
      <div class="row m-0 justify-content-between w-100">
        <span class="row m-0 align-items-center">
          <span class="">
            <img
              class="case-profile-pic rounded-circle"
              :src="caseDetail.profile.display_pic"
              alt=""
            />
          </span>
          <span class="pl-2">
            <small class="case-profile-name m-0">{{
              caseDetail.profile.user.full_name
            }}</small>
            <small>{{ sanitizedTime(caseDetail.created_at) }}</small>
          </span>
        </span>
        <span class="row m-0 align-items-center dropdown">
          <img
            class="case-menu nav-link p-0"
            data-toggle="dropdown"
            src="@/assets/menu-dots.svg"
            alt=""
          />
          <!-- dropdown -->
          <ul class="dropdown-menu p-3">
            <li
              v-if="
                is_authenticated.profile.user.username ==
                caseDetail.profile.user.username
              "
            >
              <div
                class="d-flex justify-content-between align-items-center"
                @click="deleteDebate()"
              >
                <span class="leave-btn-text h6 m-0">Delete</span>
                <img class="icon" src="@/assets/delete.svg" alt="" />
              </div>
            </li>
            <li v-else>
              <div
                class="d-flex justify-content-between align-items-center"
                @click="activity(0)"
              >
                <span class="admin-tag h6 m-0">Report</span>
                <img class="icon" src="@/assets/report.svg" alt="" />
              </div>
            </li>
          </ul>
          <!-- dropdown -->
        </span>
      </div>

      <!-- case text -->
      <div class="case-box pt-2 mt-2">
        <h5>{{ caseDetail.question }}</h5>
        <hr class="m-0 mb-1" />
        <small>{{ caseDetail.description }}</small>
      </div>
      <!-- proofs -->
      <div v-if="caseDetail.proofs" class="proofs-box w-100 my-4 d-flex">
        <div class="proof mr-4" v-for="proof in caseDetail.proofs" :key="proof.uuid">
          <img class="proof-img" :src="proof.file" alt="">
        </div>
      </div>

      <!-- case reaction box -->
      <div class="reactions-box row justify-content-between m-0 mt-3">
        <span class="row m-0 align-items-center">
          <span @click="activity(1)" class="row m-0 align-items-center">
            <img
              v-if="activityDone == 1"
              class="case-react-icons mr-1"
              src="@/assets/liked.svg"
              alt=""
            />
            <img
              v-else
              class="case-react-icons mr-1"
              src="@/assets/case-like.svg"
              alt=""
            />
            <small class="react-txt m-0 mr-3 h6">{{
              caseDetail.metrics[1]
            }}</small>
          </span>
          <span @click="activity(2)" class="row m-0 align-items-center">
            <img
              v-if="activityDone == 2"
              class="case-react-icons mr-1"
              src="@/assets/disliked.svg"
              alt=""
            />
            <img
              v-else
              class="case-react-icons mr-1"
              src="@/assets/case-dislike.svg"
              alt=""
            />
            <small class="react-txt m-0 mr-3 h6">{{
              caseDetail.metrics[2]
            }}</small>
          </span>
        </span>
        <span class="case-view-box row m-0 align-items-center">
          <img class="case-view-icon" src="@/assets/case-view.svg" alt="" />
          <small class="react-txt h6 m-0 pl-1">{{
            caseDetail.metrics[3]
          }}</small>
        </span>
      </div>
      <!-- case reaction box 2 -->
      <div class="row m-0 justify-content-between align-items-end mt-3">
        <span>
          <img
            class="case-react-profile-pic rounded-circle"
            src="@/assets/profile-picture-1.jpg"
            alt=""
          />
          <img
            class="rel-right-1 case-react-profile-pic rounded-circle"
            src="@/assets/profile-picture-1.jpg"
            alt=""
          />
          <img
            class="rel-right-2 case-react-profile-pic rounded-circle"
            src="@/assets/profile-picture-1.jpg"
            alt=""
          />
        </span>
        <small>{{caseDetail.proofs.length}} proofs</small>
      </div>

      <!-- case comments -->
      <hr class="mt-4 m-0" />
      <div class="pri-comments">
        <List :slug="caseDetail.slug" :caseUuid="caseDetail.uuid"></List>
      </div>
    </div>
  </div>
  <!-- loader -->
  <Loader v-else />
</template>


<script>
import Loader from "@/components/Loader.vue";
import List from "@/components/debate/List.vue";
import { caseService } from "@/services";
import { activityService } from "@/services";
import { config } from "@/configurations";
import { getSanitizedTime } from "@/helpers";
import router from "@/router";


export default {
  name: "DetailCase",
  components: { List, Loader },
  data() {
    return {
      caseDetail: null,
      activityDone: null,
    };
  },
  methods: {
    loadCase() {
      const slug = this.$route.params.slug;
      caseService
        .getCase(slug)
        .then((caseDetail) => {
          this.caseDetail = caseDetail;
          this.activity(3);
        })
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
        });
    },

    sanitizedTime(createdAt) {
      return getSanitizedTime(createdAt);
    },

    deleteDebate() {
      console.log(this.$route.params.slug);
      const slug = this.$route.params.slug;
      const { dispatch } = this.$store;

      caseService
        .deleteCase(slug)
        .then(() => {
          router.push({
            name: "CaseView",
          });
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
      const uuid = this.caseDetail.uuid;
      activityService
        .caseActivity(uuid, act)
        .then(() => {
          console.log(act);
        })
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
        });
    },
  },

  created() {
    this.loadCase();
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
}
.close-case-detail h2 {
  width: 1.7em;
  height: 1.7em;
  background-color: white;
}
.case-head-box {
  position: fixed;
  top: 0%;
}
.case-head {
  position: absolute;
  top: 0%;
  color: white;
  text-shadow: 3px 3px 5px #262626;
}
.case-detail {
  position: absolute;
  top: 0;
  background-color: white;
  border-radius: 1.2em 1.2em 0 0;
  min-height: 100vh;
  z-index: 1;
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
.case-menu-box {
  position: absolute;
  left: 0%;
  top: 3em;
}
.case-menu-box p {
  border-radius: 10px;
  background-color: #a91e2c;
  color: #fff;
}

.case-box hr {
  border: none;
  border-bottom: 1px solid rgb(163, 163, 163);
}
.case-box small {
  font-size: 0.95em;
  letter-spacing: 1px;
  white-space: pre-wrap;
}

.proofs-box {
  overflow-x: auto;
  white-space: nowrap;
}
.proofs-box::-webkit-scrollbar {
  display: none;
}
.proof-img{
  width: 23em;
  height: 15em;
  object-fit: cover;
  border-radius: 15px;
}

.react-txt {
  font-size: 1.1em;
  margin-top: 0.45em !important;
}
.case-react-icons {
  width: 1.9em;
}
.case-view-icon {
  width: 1.7em;
  margin-top: 0.3em !important;
}
.case-react-profile-pic {
  width: 2.3em;
  position: relative;
  border: 2px solid white;
}
.rel-right-1 {
  right: 0.8em;
}
.rel-right-2 {
  right: 1.6em;
}

</style>
