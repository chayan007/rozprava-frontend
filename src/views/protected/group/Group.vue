<template>
  <div class="mt-7 p-5" v-if="!cases">
    <h2>No cases</h2>
  </div>
  <div class="group-chat">
    <!-- group nav -->
    <div
      class="
        group-nav
        position-fixed
        p-2
        d-flex
        justify-content-between
        align-items-center
        w-100
      "
    >
      <div class="group-name d-flex nav-item align-items-center">
        <router-link to="/group-info">
          <img
            class="dp rounded-circle"
            src="@/assets/groupDp.png"
            alt="group dp"
          />
          <span class="name ml-2">{{ groupname }}</span>
        </router-link>
      </div>
      <!-- group options -->
      <div class="dropdown">
        <a class="nav-link p-0" data-toggle="dropdown">
          <img class="icon" src="@/assets/menu-dots.svg" alt="" />
        </a>
        <!-- dropdown -->
        <ul class="dropdown-menu shadow p-3">
          <li class="mb-3">
            <router-link to="/group-info">
              <div class="d-flex justify-content-between align-items-center">
                <span class="h6 m-0">Group info</span>
                <img class="icon" src="@/assets/info.svg" alt="" />
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/group-info">
              <div class="d-flex justify-content-between align-items-center">
                <span class="h6 m-0">Share group</span>
                <img class="icon" src="@/assets/share.svg" alt="" />
              </div>
            </router-link>
          </li>
          <hr class="my-3" />
          <li>
            <router-link to="/group-info">
              <div class="d-flex justify-content-between align-items-center">
                <span class="leave-btn h6 m-0">Leave</span>
                <img class="icon" src="@/assets/logout.svg" alt="" />
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- group options -->
    </div>
    <!-- group nav -->
    <!-- base -->
    <div class="base min-vh-100 w-100 py-6">
      <div class="case-box w-100" v-for="cases in cases" :key="cases.uuid">
        <GroupCase
          :cases="cases"
          :user="cases.profile.user.username"
        ></GroupCase>
      </div>
      <div
        class="add-box w-100 p-3 position-fixed d-flex justify-content-center"
      >

        <div @click="createGroupCase">
          <div
            class="
              add-btn
              rounded-circle
              d-flex
              justify-content-center
              align-items-center
              p-1
            "
          >
            <img class="add-icon" src="@/assets/addLight.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- base -->
  </div>
</template>

<script>
import GroupCase from "@/components/group/GroupCase.vue";
import { caseService } from "@/services";

export default {
  name: "Group",
  components: { GroupCase },
  data() {
    return {
      groupname: this.$route.params.groupname,
      offset: "0",
      limit: 5,
      viewLoader: 0,
      cases: [],
    };
  },

  methods: {
    createGroupCase() {
      this.$router.push({
        name: "CaseCreate",
        params: { uuid: this.$route.params.uuid },
      });
    },

    getGroupCases() {
      const { dispatch } = this.$store;
      let uuid = this.$route.params.uuid;

      caseService
        .getCases(
          (this.category = null),
          (this.username = null),
          (this.uuid = uuid),
          this.offset,
          this.limit
        )
        .then((cases) => {
          this.cases = cases;
        })
        .catch((error) =>
          dispatch("alertStore/success", error, { root: true })
        );
    },
  },

  created() {
    this.getGroupCases();
  },
};
</script>

<style scoped>
.group-nav {
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #f2f2f5;
}
.dp {
  width: 3em;
  height: 3em;
  border: 2px solid #fff;
}
.name {
  font-size: 1.3em;
  white-space: nowrap;
  width: 60vw;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon {
  width: 1.5em;
}
.leave-btn {
  color: #eb3223;
}
.dropdown-menu {
  border: none;
  background-color: #fff;
}
.base {
  background-color: #fff;
}
.case-box {
  overflow-y: scroll;
}
.add-box {
  bottom: 0;
  left: 0;
  z-index: 10;
}
.add-btn {
  background-color: rgba(72, 23, 176, 1);
  width: 3.3em;
  height: 3.3em;
  border: 2px solid #fff;
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.445);
}
.add-icon {
  width: 3em;
  height: 3em;
}
</style>