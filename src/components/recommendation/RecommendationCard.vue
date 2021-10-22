<template>
  <div class="rec-card-inner p-4 shadow text-center">
    <router-link :to="'/profile/' + recommendation.user.username">
      <img
        class="rec-pro-img rounded-circle"
        src="@/assets/profile-picture-1.jpg"
        alt=""
      />
      <h6 class="mt-3 mb-0">{{ recommendation.user.username }}</h6>
    </router-link>
    <!-- Follow btn -->
    <div class="follow-outer px-3 pt-3">
      <div
        :class="[following ? 'followed-btn' : 'follow-btn']"
        class="rounded-pill p-1"
        @click="followUser(recommendation.user.username)"
      >
        <b>
          <span v-if="!following">Follow</span> <span v-else>Following</span></b
        >
      </div>
    </div>
    <!-- Follow btn -->
  </div>
</template>

<script>
import { userService } from "@/services";
export default {
  name: "RecommendationCard",
  props: ["recommendation"],
  data() {
    return {
      following: false,
    };
  },
  created() {
    this.setFollow();
  },
  methods: {
    followUser(username) {
      this.following = !this.following;
      userService
        .followUser(username)
        .then(() => {
          this.followed = !this.followed;
        })
        .catch(() => {
          // throw config.messagingConfig.messages.error.unknown_error;
        });
    },
    setFollow() {
      this.following = this.recommendation.authenticated_details.is_following;
    },
  },
};
</script>

<style scoped>
.rec-card-inner {
  border-radius: 1.3rem;
}
.rec-pro-img {
  width: 6rem;
  height: 6rem;
}
.follow-btn {
  background-color: rgba(72, 23, 176, 1);
  color: #fff;
}
.followed-btn {
  background-color: rgb(51, 51, 51);
  color: #fff;
}
</style>