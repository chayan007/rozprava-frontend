<template>
  <Loader v-if="!profile" />
  <div v-else>
    <div>
      <div class="p-3 d-flex justify-content-between">
        <i class="fas fa-arrow-left small-icon"></i>
        <i class="fas fa-ellipsis-v small-icon"></i>
      </div>
      <img
        class="profile-cover position-fixed w-100"
        src="@/assets/post_pic.png"
        alt=""
      />
    </div>
    <div>
      <img
        class="rounded-circle profile-pic"
        src="@/assets/profile-picture-1.jpg"
        alt=""
      />
    </div>
    <div>
      <h1 class="fw-bolder m-0 mt-2 profile-name">
        {{ profile.user.full_name }}
      </h1>
      <h5 class="m-0">
        {{ profile.user.username }}
      </h5>
      <p class="m-0">( {{ profile.profession }} )</p>
      <div class="row m-0">
        <div class="col-4">
          <p class="m-0">Posts</p>
          <h5>{{ profile.metrics.posts }}</h5>
        </div>
        <div class="col-4">
          <p class="m-0">Followers</p>
          <h5>{{ profile.metrics.followers }}</h5>
        </div>
        <div class="col-4">
          <p class="m-0">Following</p>
          <h5>{{ profile.metrics.following }}</h5>
        </div>
      </div>
      <div class="px-3">
        <h6>
          {{ profile.bio }}
        </h6>
      </div>
      <div class="w-100 row m-0 justify-content-around my-4">
        <span
          :class="[following ? 'followed-btn' : 'follow-btn']"
          class="rounded-pill py-2 px-4 col-5 btn"
          @click="followUser()"
          ><h6 class="m-0 follow-btn-txt">
            <span v-if="!following">Follow</span> <span v-else>Following</span>
          </h6></span
        >
        <span class="profile-action-btn rounded-pill py-2 px-4 col-5 btn"
          ><h6 class="m-0">Message</h6></span
        >
      </div>
      <div>
        <template v-for="case_detail in cases" :key="case_detail.uuid">
          <Case
            v-show="filter === -1 || filter === case_detail.category"
            :detail="case_detail"
          ></Case>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
//import PopupMenu from "@/components/profile/PopupMenu.vue"
//import Case from "@/components/case/Case.vue";
import { ref } from "vue";
import { userService } from "@/services";
import router from "../../router";

export default {
  name: "Profile",
  components: { Loader },
  data() {
    return {
      profile: null,
      username: "",
      following: false,
    };
  },

  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false,
    });

    const Toggle = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    const ToggleClose = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      Toggle,
      ToggleClose,
    };
  },

  created() {
    this.declareUser();
  },

  methods: {
    declareUser() {
      this.username = this.$route.params.username;
      this.profile = JSON.parse(localStorage.getItem("user"));
      if (!this.profile) {
        router.push("/login");
      }
      this.profile = this.profile.profile;
      const { dispatch } = this.$store;

      if (this.profile.user.username !== this.username) {
        // When profile is not the authenticated profile (any other random profile).
        userService
          .getProfile(this.username)
          .then(
            (userProfile) => {
              this.profile = userProfile;
              this.setFollow();
              console.log(userProfile);
            },
            (error) => {
              dispatch("alertStore/error", error, { root: true });
            }
          )
          .catch((error) => {
            dispatch("alertStore/error", error, { root: true });
          });
      }
    },
    followUser() {
      const username = this.profile.user.username;
      this.following = !this.following;
      userService
        .followUser(username)
        .then(() => {
          
        })
        .catch(() => {
          // throw config.messagingConfig.messages.error.unknown_error;
        });
    },
    setFollow() {
      this.following = this.profile.authenticated_details.is_following;
    },
  },
};
</script>

<style scoped>
.profile-name {
  font-size: 2.5em;
}
.small-icon {
  font-size: 2em;
  color: #fff;
}
.profile-cover {
  top: 3.5em;
  left: 0;
  z-index: -1;
}
.profile-pic {
  width: 8em;
  border: 3px solid #fff;
}
.bio {
  width: 30rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  margin-top: 1.5rem;
}
.image {
  max-height: 25rem;
}
.c1 {
  margin-left: auto;
  padding: 0rem 1rem;
  order: 2;
}
.c2 {
  margin-left: auto;
  padding-left: 1rem;
  order: 2;
}
.c3 {
  padding: 0rem 1rem;
}
.cant {
  width: 65rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  max-width: 100%;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #44476a;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 0.0625rem solid transparent;
  padding: 0rem 0.95rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.55rem;
}
.margin {
  margin-left: 2rem;
  margin-right: 2rem;
  white-space: nowrap !important;
}
.btn-primary {
  color: #31344b;
  background-color: #e6e7ee;
  border-color: #e6e7ee;
  box-shadow: none;
}
.nowrap {
  display: flex;
  width: 30rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.a1 {
  position: relative;
}
.a1 .aero {
  position: absolute;
  top: 10%;
  left: 4%;
}
.a2 {
  background: transparent;
  color: white;
  border: none;
  font-size: 1.5rem;
}
.a1 .a3 {
  position: absolute;
  top: 5%;
  left: 90%;
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
}
.a4 {
  top: 45%;
  margin-right: auto;
  margin-left: auto;
  width: 14rem;
  height: 14rem;
  padding: 0.15rem;
}
.middle {
  position: absolute;
  top: 12rem;
  width: 100%;
}
@media (max-width: 700px) {
  .space {
    margin-right: 4%;
    margin-left: 4%;
  }
}
.follow-btn {
  background-color: rgba(72, 23, 176, 1);
}
.follow-btn-txt {
  color: #fff;
}
.followed-btn {
  background-color: rgb(31, 31, 31);
}
</style>