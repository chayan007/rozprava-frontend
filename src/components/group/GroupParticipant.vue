<template>
  <div class="py-2 row m-0 align-items-center justify-content-between dropdown">
    <a class="nav-link p-0" data-toggle="dropdown">
      <div>
        <img
          class="part-pro rounded-circle mr-3"
          src="@/assets/profile-picture-1.jpg"
          alt=""
        />
        <h6 class="d-inline m-0">{{ profile.user.username }}</h6>
      </div>
    </a>
    <span v-if="checkAdmin" class="admin-tag">Admin</span>

    <!-- dropdown -->
    <ul class="dropdown-menu p-3" v-if="!checkAdmin">
      <li class="mb-3">
        <router-link to="/group-info">
          <div class="d-flex justify-content-between align-items-center">
            <span class="admin-tag h6 m-0" @click="makeAdmin">Make Admin</span>
            <img class="icon" src="@/assets/ticks.svg" alt="" />
          </div>
        </router-link>
      </li>
      <hr class="my-3" />
      <li>
        <router-link to="/group-info">
          <div class="d-flex justify-content-between align-items-center">
            <span class="leave-btn-text h6 m-0" v-on:click="removeFromGroup"
              >Remove</span
            >
            <img class="icon" src="@/assets/logout.svg" alt="" />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- dropdown -->
</template>

<script>
import { groupService } from "@/services";

export default {
  name: "GroupParticipant",
  props: ["profile", "admin"],
  data() {
    return {
      uuid: this.$route.params.uuid,
    };
  },
  computed: {
    checkAdmin() {
      let foundAdmin = false;
      for (let i = 0; i < this.admin.length; i++) {
        if (this.admin[i].user.username === this.profile.user.username) {
          foundAdmin = true;
          break;
        }
      }
      if (foundAdmin) {
        return 1;
      } else {
        return 0;
      }
    },
  },
  methods: {
    makeAdmin() {
      const { dispatch } = this.$store;
      groupService
        .makeGroupAdmin(this.uuid)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          dispatch("alertStore/error", error);
        });
    },
    removeFromGroup() {
      const { dispatch } = this.$store;
      // let profile = profile.user.username;
      groupService
        .leaveGroup(this.uuid, this.profile)
        .then((res) => {
          console.log("removed from group", res);
          // router.push({
          //   path: "my-groups",
          // });
        })
        .catch((error) => {
          dispatch("alertStore/error", error);
        });
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1.5em;
}
.dropdown-menu {
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.164);
  border: none;
  background-color: #fff;
}
.group-hr {
  border: none;
  border-bottom: 1px solid rgb(168, 168, 168);
}
.part-pro {
  width: 2.7em;
  height: 2.7em;
  opacity: 1 !important;
}
.admin-tag {
  color: rgba(72, 23, 176, 1);
}
.leave-btn-text {
  color: rgba(235, 50, 35, 1);
}
</style>
