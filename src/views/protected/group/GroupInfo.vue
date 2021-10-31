<template>
  <div class="">
    <img
      class="group-info-dp w-100 position-fixed"
      src="@/assets/groupDp.png"
      alt=""
    />
    <!-- Name and edit -->
    <div class="group-name-box row m-0 mb-2 w-100 px-3 justify-content-between">
      <h3 class="group-name d-inline">{{ groupDetails.name }}</h3>
      <router-link to="/group-settings">
        <span class="rounded-circle"
          ><img class="group-info-edit-pen" src="@/assets/edit.svg" alt=""
        /></span>
      </router-link>
    </div>
    <!-- info box -->
    <div class="group-info-box min-vh-100 p-4 pt-4">
      <!-- description -->
      <h6 class="group-desc-title"><b>Description</b></h6>
      <p class="group-desc m-0">
        {{ groupDetails.description }}
      </p>

      <hr class="group-hr w-100 my-4" />

      <div class="d-flex justify-content-between">
        <h6 class="group-desc-title d-inline">
          <b>{{ groupDetails.profiles.length }} Participants</b>
        </h6>
      </div>

      <!-- group-participant -->
      <div v-for="profile in groupDetails.profiles" :key="profile.uuid">
        <GroupParticipant :profile="profile" :admin="groupDetails.admins" />
      </div>
      <!-- group-participant -->

      <hr class="group-hr w-100 my-4" />
      <!-- leave btn -->
      <div
        class="leave-btn text-center shadow rounded-pill p-2 mt-3"
        v-on:click="leaveGroup"
      >
        <h5 class="leave-btn-text m-0 d-inline">Leave group</h5>
        <img
          class="logout-icon position-absolute"
          src="@/assets/logout.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import GroupParticipant from "@/components/group/GroupParticipant";
import { groupService } from "@/services";
import router from "@/router";

export default {
  name: "GroupInfo",
  components: { GroupParticipant },
  data() {
    return {
      groupDetails: null,
      uuid: this.$route.params.uuid,
    };
  },
  computed: {
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
  },
  methods: {
    getGroupDetail() {
      const { dispatch } = this.$store;
      groupService
        .getGroupInformation(this.uuid)
        .then((groupDetails) => {
          this.groupDetails = groupDetails;
        })
        .catch((error) => {
          dispatch("alertStore/error", error);
        });
    },
    leaveGroup() {
      const { dispatch } = this.$store;
      let profile = this.is_authenticated.profile.user.username;
      groupService
        .leaveGroup(this.uuid, profile)
        .then(() => {
          router.push({
            path: "my-groups",
          });
        })
        .catch((error) => {
          dispatch("alertStore/error", error);
        });
    }
  },
  created() {
    this.getGroupDetail();
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
.group-info-dp {
  top: 0;
  left: 0;
  z-index: -1;
}
.group-name-box {
  margin-top: 22em !important;
}
.group-name {
  color: #fff;
}
.group-info-edit-pen {
  width: 1.5em;
}
.group-info-box {
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 -30px 40px 20px rgba(0, 0, 0, 0.603);
}
.group-desc-title {
  color: rgba(72, 23, 176, 1);
}
.group-desc {
  white-space: pre-wrap;
  line-height: 1.3em;
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
.logout-icon {
  width: 2em;
  right: 2.6em;
}
</style>