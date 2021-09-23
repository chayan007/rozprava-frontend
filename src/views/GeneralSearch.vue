<template>
  <div class="search-body m-0">
    <!-- search -->
    <div class="p-2 mb-2">
      <div class="row m-0 align-items-center form-control1 w-100 rounded">
        <span class="fas fa-search col p-1 col-1" />
        <input
          class="inputsearch col p-0 pl-2 col-11 m-0"
          placeholder="Search to add people"
          v-model="searchValue"
        />
      </div>
    </div>

    <!-- search categories -->
    <div class="search-cat-box row mb-2 m-0 w-100">
      <span
        class="rounded-pill p-2 pl-4 pr-4 m-2 search-cat"
        @click="toggleAll"
        :class="{ active: displayFlag }"
        >All</span
      >
      <span
        class="rounded-pill p-2 pl-4 pr-4 m-2 search-cat"
        @click="toggleAccounts"
        :class="{ active: accounts && !displayFlag }"
        >Accounts</span
      >
      <span
        class="rounded-pill p-2 pl-4 pr-4 m-2 search-cat"
        @click="toggleGroups"
        :class="{ active: groups && !displayFlag }"
        >Groups</span
      >
      <span
        class="rounded-pill p-2 pl-4 pr-4 m-2 search-cat"
        @click="toggleCases"
        :class="{ active: cases && !displayFlag }"
        >Cases</span
      >
    </div>

    <!-- search results -->

    <!-- accounts -->
    <div class="row m-0" v-if="accounts && profileInfo">
      <h4 class="cat-head col col-12 mt-1 m-0" @click="toggleAccounts">
        Accounts
      </h4>
      <div class="col col-12 pl-3 pr-3">
        <hr />
      </div>
      <template v-for="account in accountShowInfo" :key="account.uuid">
        <ProfileSearchComponent :account="account" />
      </template>
      <div class="m-0 row justify-content-end col col-12">
        <h6
          class="pt-1 pb-1 pr-3 pl-3 view rounded-pill"
          v-if="displayFlag"
          @click="toggleAccounts"
        >
          View All
        </h6>
      </div>
    </div>

    <!-- groups -->
    <div class="row m-0" v-if="groups && groupInfo">
      <h4 class="cat-head col col-12 mt-1 m-0">Groups</h4>
      <div class="col col-12 pl-3 pr-3">
        <hr />
      </div>
      <template v-for="group in groupShowInfo" :key="group.uuid">
        <GroupSearchComponent :group="group" />
      </template>
      <div class="m-0 row justify-content-end col col-12">
        <h6
          class="pt-1 pb-1 pr-3 pl-3 view rounded-pill"
          v-if="displayFlag"
          @click="toggleGroups"
        >
          View All
        </h6>
      </div>
    </div>

    <!-- cases -->
    <div class="row m-0" v-if="cases && casesInfo">
      <h4 class="cat-head col col-12 mt-1 m-0">Cases</h4>
      <div class="col col-12 pl-3 pr-3">
        <hr />
      </div>
      <template v-for="cases in caseShowInfo" :key="cases.uuid">
        <CaseSearchComponent :cases="cases" />
      </template>
      <div class="m-0 row justify-content-end col col-12">
        <h6
          class="pt-1 pb-1 pr-3 pl-3 view rounded-pill"
          v-if="displayFlag"
          @click="toggleCases"
        >
          View All
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSearch from "@/components/generalSearch/ProfileSearch.vue";
import GroupSearch from "@/components/generalSearch/GroupSearch.vue";
import CaseSearch from "@/components/generalSearch/CaseSearch.vue";
import { config } from "@/configurations";
import { generalSearchService } from "@/services";

export default {
  name: "GeneralSearch",
  components: {
    ProfileSearchComponent: ProfileSearch,
    GroupSearchComponent: GroupSearch,
    CaseSearchComponent: CaseSearch,
  },
  data() {
    return {
      searchValue: "",
      profileInfo: 0,
      groupInfo: 0,
      casesInfo: 0,
      accounts: 1,
      groups: 1,
      cases: 1,
      displayFlag: 1,
    };
  },
  watch: {
    searchValue() {
      this.search();
    },
  },
  computed: {
    accountShowInfo() {
      if (this.profileInfo) {
        if (this.displayFlag) {
          return this.profileInfo.slice(0, 5);
        } else {
          return this.profileInfo;
        }
      } else {
        return [];
      }
    },
    GroupShowInfo() {
      if (this.groupInfo) {
        if (this.displayFlag) {
          return this.groupInfo.slice(0, 5);
        } else {
          return this.groupInfo;
        }
      } else {
        return [];
      }
    },
     CaseShowInfo() {
      if (this.groupInfo) {
        if (this.displayFlag) {
          return this.groupInfo.slice(0, 5);
        } else {
          return this.groupInfo;
        }
      } else {
        return [];
      }
    },
  },
  methods: {
    search() {
      const username = this.searchValue;
      const { dispatch } = this.$store;

      generalSearchService
        .searchProfile(username)
        .then((profileInfo) => {
          this.profileInfo = profileInfo;
        })
        .catch(() => {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.unknown_error
          );
        });
      generalSearchService
        .searchGroup(username)
        .then((groupInfo) => {
          this.groupInfo = groupInfo;
        })
        .catch(() => {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.unknown_error
          );
        });
    },
    toggleAll() {
      this.displayFlag = 1;
      this.accounts = 1;
      this.groups = 1;
      this.cases = 1;
    },
    toggleAccounts() {
      this.displayFlag = 0;
      this.groups = 0;
      this.cases = 0;
      this.accounts = 1;
    },
    toggleGroups() {
      this.displayFlag = 0;
      this.accounts = 0;
      this.cases = 0;
      this.groups = 1;
    },
    toggleCases() {
      this.displayFlag = 0;
      this.accounts = 0;
      this.groups = 0;
      this.cases = 1;
    },
  },
};
</script>

<style scoped>
.search-body {
  background-color: #fff;
  padding-top: 7.5em;
}
.form-control1 {
  display: inline-block;
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #44476a;
  background-color: rgb(236, 236, 236);
  background-clip: padding-box;
  border: 0.07rem solid #d1d9e6;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}
.form-control1:focus {
  outline: none;
}

.inputsearch {
  border: none;
  background-color: rgb(236, 236, 236);
}

input:focus {
  border-style: none;
}

.cat-head {
  padding: 0.25em 0.75em;
}

.search-cat {
  background-color: #fff;
  box-shadow: 3px 3px 12px -1px rgba(0, 0, 0, 0.212);
  text-align: center;
  cursor: pointer;
}

.search-cat-box {
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: 4em;
  flex-direction: column;
}

.search-cat-box::-webkit-scrollbar {
  display: none;
}

hr {
  border-bottom: 1px solid #a7aeb9;
  margin: 0.25em auto !important;
}

.pro-pic-sm {
  height: 3em;
  width: 3em;
}

.pro-pic-md {
  height: 3.5em;
  width: 3.5em;
}

.view {
  background-color: rgb(236, 236, 236);
  border: none;
  justify-self: flex-end;
  cursor: pointer;
}

.search-case {
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 3px 3px 20px -3px rgba(0, 0, 0, 0.212);
}

.active {
  border: 2px solid rgb(117, 117, 117);
}
</style>