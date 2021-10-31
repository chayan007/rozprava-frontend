<template>
  <div
    class="row m-0 justify-content-between align-items-center p-3 w-100 mt-7"
  >
    <h1 class="m-0">Groups</h1>
    <img
      class="addimg"
      src="@/assets/Add.png"
      v-on:click="openAddMembers = !openAddMembers"
    />
  </div>

  <!-- Groups of Person -->

  <div v-if="groupLists.length == 0">
    <h1>No groups found !</h1>
  </div>

  <div v-else>
    <div v-if="!groupLists">
      <Loader class="my-10" />
    </div>

    <div v-else class="p-3">
      <div
        class="card bg-primary shadow-soft border-light py-2 my-4"
        v-for="groupList in groupLists"
        :key="groupList.message"
      >
        <div
          class="p-2 col col-12 row m-0 align-items-center"
          @click="getGroupDetail(groupList)"
        >
          <div class="w-100">
            <img
              class="pro-pic-sm rounded-circle mr-2"
              v-if="groupList.display_pic"
              :src="groupList.display_pic"
              alt=""
            />
            <img
              class="pro-pic-md rounded-circle mr-2"
              v-else
              src="@/assets/profile-picture-1.jpg"
              alt=""
            />
            <h2 class="m-0 ml-2 d-inline">{{ groupList.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- add grp component -->

  <div class="add-grp-box w-100" v-if="openAddMembers">
    <div class="mt-10 p-3">
      <div class="add-grp-inner shadow p-3">
        <h3 class="float-right" v-on:click="openAddMembers = !openAddMembers">
          x
        </h3>
        <div v-if="groupFormed">
          <input
            class="form-control1 w-100 mb-2 rounded"
            placeholder="Enter group name"
            v-model="groupName"
          />
          <input
            class="form-control1 w-100 mb-2 rounded"
            placeholder="Enter group description"
            v-model="groupDescription"
          />
          <button
            class="col col-5 text-center create-btn p-2 rounded border-none btn"
            v-on:click="createGroup"
          >
            Create
          </button>
        </div>

        <div v-else>
          <div class="w-100" v-if="members.length">
            <h3>Group Members:</h3>
            <span
              class="pb-3"
              v-for="(member, index) in members"
              :key="member.uuid"
            >
              <p class="tag h6 rounded-pill pr-3 pl-3 pt-2 pb-2 mr-2 mb-2">
                <img
                  class="pro-pic-sm rounded-circle mr-2"
                  v-if="member.display_pic"
                  :src="member.display_pic"
                  alt=""
                />
                <img
                  class="pro-pic-sm rounded-circle mr-2"
                  v-else
                  src="@/assets/profile-picture-1.jpg"
                  alt=""
                />
                {{ member }}
                <span class="pl-3" v-on:click="removeMember(index)"> x</span>
              </p>
            </span>
          </div>

          <div class="row m-0 justify-content-between">
            <h4 class="font-weight-bold">Add People</h4>
          </div>

          <div class="row m-0 align-items-center form-control1 w-100 rounded">
            <span class="fas fa-search col p-1 col-1" />
            <input
              class="form-control1 col p-0 pl-2 col-11 w-100 m-0"
              placeholder="Search to add people"
              v-model="searchValue"
            />
          </div>

          <!-- add names -->
          <div class="search-profile-box">
            <div
              class="
                outer
                row
                m-0
                justify-content-between
                mt-3
                align-items-center
              "
              v-for="(profile, index) in profile_info"
              :key="profile.uuid"
              v-on:click="addMember(index)"
            >
              <div class="pro-box row m-0 align-items-center">
                <img
                  class="pro-pic rounded-circle"
                  src="@/assets/profile-picture-1.jpg"
                  alt=""
                />
                <div class="pro-name pl-3">
                  <p>{{ profile.user.username }}</p>
                </div>
              </div>
              <!-- <img src="@/assets/dtick.png" alt="tick" class="pro-tick" /> -->
            </div>
          </div>

          <!-- create button -->
          <div class="w-100 row m-0 justify-content-center">
            <button
              class="
                col col-5
                text-center
                create-btn
                p-2
                rounded
                border-none
                btn
              "
              v-on:click="groupFormed = 1"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stringFormat } from "@/helpers";
import { config } from "@/configurations";
import { groupService, searchService } from "@/services";
// import Loader from "@/components/Loader.vue";
import router from "@/router";

export default {
  name: "CreateGroup",
  // components: { Loader },
  data() {
    return {
      groupName: "",
      groupDescription: "",
      members: [],
      is_paid: false,
      openAddMembers: 0,
      profile_info: [],
      searchValue: "",
      groupFormed: 0,
      is_my_groups: 1,
      offset: 0,
      limit: 10,
      groupList: null,
    };
  },

  watch: {
    searchValue: function () {
      this.searchProfile();
    },
  },

  computed: {
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
  },

  methods: {
    addMember(index) {
      this.members.push(this.profile_info[index].user.username);
    },

    removeMember(index) {
      this.members.splice(index, 1);
    },

    getGroupDetail(groupList) {
      router.push({
        name: "GroupInfo",
        params: { uuid: groupList.uuid },
      });
    },

    searchProfile() {
      const username = this.searchValue;
      const { dispatch } = this.$store;
      searchService
        .searchProfile(username)
        .then((profile_info) => {
          this.profile_info = profile_info.results.slice();
        })
        .catch(() => {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.unknown_error
          );
        });
    },

    createGroup() {
      const { groupName, groupDescription, members, isPaid } = this;
      const { dispatch } = this.$store;

      if (!groupName) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.empty_field_error,
            "Groupname",
            []
          ).trim(),
          { root: true }
        );
        return;
      }

      groupService
        .addGroup({
          name: groupName,
          description: groupDescription,
          is_paid: isPaid,
          members: members,
        })
        .then((createdGroup) => {
          router.push({
            name: "GroupInfo",
            params: { uuid: createdGroup.group.uuid },
          });
        })
        .catch(() => {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.unknown_error
          );
        });
    },
    getGroup() {
      const { dispatch } = this.$store;
      // this.offset = this.offset + this.limit;

      groupService
        .getGroupList(this.is_my_groups, this.offset, this.limit)
        .then((groupLists) => {
          this.groupLists = groupLists.results;
          console.log(groupLists.results);
        })
        .catch(() => {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.unknown_error
          );
        });
    },
  },
  created() {
    this.getGroup();
  },
};
</script>

<style scoped>
.form-control1 {
  display: inline-block;
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #44476a;
  background-color: #e6e7ee;
  background-clip: padding-box;
  border: none;
  border-bottom: 0.07rem solid #d1d9e6;
  border-radius: 0rem;
  transition: all 0.3s ease-in-out;
}
.form-control1:focus {
  outline: none;
}
.addimg {
  width: 2.7em;
  height: 2.7em;
}

.add-grp-box {
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.452);
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
}

.add-grp-inner {
  background-color: white;
  border-radius: 15px;
  margin-top: 0;
}

.pro-pic {
  height: 3em;
  width: 3em;
}

.pro-pic-sm {
  height: 2em;
  width: 2em;
}

.tag {
  background-color: #e6e7ee;
  display: inline-block;
}

.pro-tick {
  width: 2.5em;
  height: 2.5em;
}

.create-btn {
  background-color: #e6e7ee;
  margin: 1em auto !important;
  width: 5em;
}

.search-profile-box {
  max-height: 50vh;
  overflow-y: auto;
}

.pro-pic-md {
  height: 3.5em;
  width: 3.5em;
}
</style>