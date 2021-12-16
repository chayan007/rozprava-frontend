<template>
  <div class="followers-box w-100 p-3">
    <Loader class="mt-10" v-if="!followers"></Loader>
    <div
      class="d-flex justify-content-between my-4"
      v-for="follower in followers"
      :key="follower.uuid"
    >
    <Follower :follower="follower" />
    </div>
  </div>
</template>

<script>
import { userService } from "@/services";
import { config } from "@/configurations";
import Loader from "@/components/Loader.vue";
import Follower from "@/components/profile/Follower.vue";
export default {
  name: "Followers",
  components: { Loader, Follower },
  props: ["followersFlag"],
  data() {
    return {
      followers: null,
      following: false,
    };
  },
  created() {
    this.getFollowers();
  },
  methods: {
    getFollowers() {
      const flag = this.followersFlag;
      let username = this.$route.params.username;
      console.log(flag);
      userService
        .getFollowers(flag, username)
        .then((followers) => {
          this.followers = followers.results;
        })
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
        });
    },
  },
};
</script>

<style scoped>
.followers-box {
  background-color: #fff !important;
  height: 80vh;
  border-radius: 15px;
  overflow-y: auto;
  box-shadow: 0 -2px 15px 0 rgba(33, 54, 92, 0.212);
}
</style>