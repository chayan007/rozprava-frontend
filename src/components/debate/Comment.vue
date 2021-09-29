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
          />
          <small class="ml-2 h6 m-0">{{ debate.profile.user.full_name }}</small>
        </div>
        <div class="text-right">
          <img
            @click="commentMenu = !commentMenu"
            v-if="
              is_authenticated.profile.user.username ==
              debate.profile.user.username
            "
            class="comment-menu"
            src="@/assets/menu-dots.svg"
            alt=""
          />
          <div v-show="commentMenu" class="comment-menu-box p-3 w-100">
            <p class="p-2 mt-1 w-100 text-center shadow" @click="deleteDebate()">Delete</p>
          </div>
        </div>
      </div>

      <!-- body -->
      <div class="com-body mt-2 pl-1">
        <small>
          {{ debate.comment }}
        </small>
      </div>

      <hr class="mb-0 mt-2" />
      <!-- reactions -->
      <div class="com-react-box row justify-content-between m-0 p-1">
        <span class="row m-0 align-items-center">
          <span class="row m-0 align-items-center">
            <img
              class="case-react-icons mr-1"
              src="@/assets/case-like.svg"
              alt=""
            />
            <small class="react-txt m-0 mr-3 h6">{{
              debate.activities[1]
            }}</small>
          </span>
          <span class="row m-0 align-items-center">
            <img
              class="case-react-icons mr-1"
              src="@/assets/case-dislike.svg"
              alt=""
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
import router from "@/router";

export default {
  name: "Against",
  props: ["newDebate", "createdAt", "isRebuttal"],
  data() {
    return {
      commentMenu: 0,
      debate: this.newDebate,
      cAgainst: false,
      uuid: this.newDebate.uuid
    };
  },
  methods: {
    toggleRebuttals() {
      this.$parent.toggleRebuttals(this.newDebate, this.createdAt);
    },

    deleteDebate() {
      console.log(this.uuid);
      const uuid  = this.uuid;
      const { dispatch } = this.$store;

      debateService
        .deleteDebate(uuid)
        .then(() => {
          const slug = this.$route.params.slug;
          router.push({
            name: "CaseDetail",
            params: { slug: slug },
          });
        })
        .catch(() => {
          dispatch(
            "alertStore/error", 
            config.messagingConfig.messages.error.unknown_error
          );
        });
        this.$router.go()
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
  background-color: #A91E2C;
  color: #fff;
}
</style>