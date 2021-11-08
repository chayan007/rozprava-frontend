<template>
  <router-link :to="'/profile/'+follower.user.username">
    <span class="d-flex align-items-center">
      <img
        class="avatar-lg rounded-circle"
        src="@/assets/profile-picture-1.jpg"
        alt=""
      />
      <h6 class="d-inline m-0 ml-3">{{ follower.user.username }}</h6>
    </span>
  </router-link>
  <span class="d-flex align-items-center">
    <p
      class="m-0"
      :class="[following ? 'text-danger ' : 'text-secondary ']"
      @click="followUser()"
    >
      <span v-if="!following">Follow</span> <span v-else>Unfollow</span>
    </p>
  </span>
</template>

<script>
import { userService } from "@/services";
import { config } from "@/configurations";
export default {
  name: "Follower",
  props: ["follower"],
  data() {
    return {
      following: false,
    };
  },
  computed: {
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
  },
  created() {
    this.setFollow();
  },
  methods: {
    followUser() {
      const username = this.follower.user.username;
      this.following = !this.following;
      userService
        .followUser(username)
        .then(() => {})
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
        });
    },
    setFollow() {
      this.following = this.follower.authenticated_details.is_following;
    },
  },
};
</script>