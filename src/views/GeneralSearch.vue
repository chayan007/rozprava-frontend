<template>
  <div class="search-body m-0">
    <!-- search -->

    <div class="p-2 mb-2">
      <div class="row m-0 align-items-center form-control1 w-100 rounded-pill py-2">
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
        class="rounded-pill p-1 px-4 m-2 search-cat"
        @click="filterSearch(0)"
        :class="{ active: displayFlag == 0 }"
        >All</span
      >
      <span
        class="rounded-pill p-1 px-4 m-2 search-cat"
        @click="filterSearch(1)"
        :class="{ active: displayFlag == 1 }"
        >Accounts</span
      >
      <span
        class="rounded-pill p-1 px-4 m-2 search-cat"
        @click="filterSearch(2)"
        :class="{ active: displayFlag == 2 }"
        >Groups</span
      >
      <span
        class="rounded-pill p-1 px-4 m-2 search-cat"
        @click="filterSearch(3)"
        :class="{ active: displayFlag == 3 }"
        >Cases</span
      >
    </div>

    <!-- search results -->

    <!-- recommendations -->
    <Recomendations v-if="!searchValue" />
    <Loader class="my-10 vh-100"
      v-if="searchValue && !accountShowInfo && !groupShowInfo && !caseShowInfo"
    />

    <!-- Search results -->
    <div class="infinite-list infinite-list-search">
      <div v-if="searchValue">
        <!-- accounts -->
        <div
          class="row m-0 display-row"
          v-if="(displayFlag == 0 || displayFlag == 1) && accountShowInfo"
        >
          <h4 class="cat-head col col-12 mt-1 m-0">Accounts</h4>
          <div class="col col-12 pl-3 pr-3">
            <hr />
          </div>
          <div v-for="account in accountShowInfo" :key="account.uuid">
            <router-link :to="'/profile/' + account.user.username">
              <ProfileSearchComponent :account="account" />
            </router-link>
          </div>
          <div class="m-0 row justify-content-end col col-12">
            <h6
              class="pt-1 pb-1 pr-3 pl-3 view rounded-pill"
              v-if="displayFlag == 0"
              @click="filterSearch(1)"
            >
              View All
            </h6>
          </div>
        </div>
      </div>

      <!-- groups -->
      <div
        class="row m-0 display-row"
        v-if="(displayFlag == 0 || displayFlag == 2) && groupShowInfo"
      >
        <h4 class="cat-head col col-12 mt-1 m-0">Groups</h4>
        <div class="col col-12 pl-3 pr-3">
          <hr />
        </div>
        <div
          v-for="group in groupShowInfo"
          :key="group.uuid"
          @click="getGroupCases(group)"
        >
          <GroupSearchComponent :group="group" />
        </div>
        <div class="m-0 row justify-content-end col col-12">
          <h6
            class="pt-1 pb-1 pr-3 pl-3 view rounded-pill"
            v-if="displayFlag == 0"
            @click="filterSearch(2)"
          >
            View All
          </h6>
        </div>
      </div>

      <!-- cases -->
      <div
        class="row m-0 display-row"
        v-if="(displayFlag == 0 || displayFlag == 3) && caseShowInfo"
      >
        <h4 class="cat-head col col-12 mt-1 m-0">Cases</h4>
        <div class="col col-12 pl-3 pr-3">
          <hr />
        </div>
        <div v-for="allCases in caseShowInfo" :key="allCases.uuid">
          <router-link :to="'/case/' + allCases.slug">
            <CaseSearchComponent :allCases="allCases" />
          </router-link>
        </div>
        <div class="m-0 row justify-content-end col col-12">
          <h6
            class="pt-1 pb-1 pr-3 pl-3 view rounded-pill"
            v-if="displayFlag == 0"
            @click="filterSearch(3)"
          >
            View All
          </h6>
        </div>
      </div>
    </div>
    <!-- Search results -->
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import ProfileSearch from "@/components/generalSearch/ProfileSearch.vue";
import GroupSearch from "@/components/generalSearch/GroupSearch.vue";
import CaseSearch from "@/components/generalSearch/CaseSearch.vue";
import Recomendations from "@/components/recommendation/Recommendations.vue";
import { searchService } from "@/services";

export default {
  name: "GeneralSearch",
  components: {
    ProfileSearchComponent: ProfileSearch,
    GroupSearchComponent: GroupSearch,
    CaseSearchComponent: CaseSearch,
    Recomendations,
    Loader,
  },
  data() {
    return {
      searchValue: "",
      profileInfo: 0,
      groupInfo: 0,
      caseInfo: 0,
      displayFlag: 0,
      offset: "0",
      limit: 10,
      stopSearch: 0,
    };
  },
  watch: {
    searchValue() {
      this.stopSearch = 0;
      this.load();
    },
  },
  mounted() {
    // Detect when scrolled to bottom.
    const listElm = document.querySelector(".infinite-list-search");
    listElm.addEventListener("scroll", () => {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.load();
      }
    });
  },
  computed: {
    accountShowInfo() {
      if (this.profileInfo) {
        if (this.displayFlag == 0) {
          return this.profileInfo.slice(0, 5);
        } else {
          return this.profileInfo;
        }
      } else {
        return null;
      }
    },
    groupShowInfo() {
      if (this.groupInfo) {
        if (this.displayFlag == 0) {
          return this.groupInfo.slice(0, 5);
        } else {
          return this.groupInfo;
        }
      } else {
        return null;
      }
    },
    caseShowInfo() {
      if (this.caseInfo) {
        if (this.displayFlag == 0) {
          return this.caseInfo.slice(0, 5);
        } else {
          return this.caseInfo;
        }
      } else {
        return null;
      }
    },
  },
  methods: {
    getGroupCases(group) {
      this.$router.push({
        name: "Group",
        params: { uuid: group.uuid, groupname: group.name },
      });
    },

    load() {
      if (this.searchValue) {
        if (this.displayFlag == 0) {
          this.loadProfile();
          this.loadGroup();
          this.loadCases();
        } else if (this.displayFlag == 1) {
          this.loadProfile();
        } else if (this.displayFlag == 2) {
          this.loadGroup();
        } else {
          this.loadCases();
        }
      }
    },

    loadProfile() {
      const username = this.searchValue;
      const { dispatch } = this.$store;

      if (!this.stopSearch) {
        searchService
          .searchProfile(username, this.offset, this.limit)
          .then((profileInfo) => {
            if (this.profileInfo == 0) {
              this.profileInfo = profileInfo.results;
            } else {
              this.profileInfo.push(...profileInfo.results);
            }
            if (profileInfo.results.length < 10) {
              this.stopSearch = 1;
            }
          })
          .catch((e) => {
            dispatch("alertStore/error", e);
          });
        this.offset = parseInt(this.offset) + this.limit;
      }
    },
    loadGroup() {
      const username = this.searchValue;
      const { dispatch } = this.$store;

      searchService
        .searchGroup(username, this.offset, this.limit)
        .then((groupInfo) => {
          console.log("hi");
          if (this.groupInfo == 0) {
            this.groupInfo = groupInfo.results;
          } else {
            this.groupInfo.push(...groupInfo.results);
          }
          if (groupInfo.results.length < 10) {
            this.stopSearch = 1;
          }
        })
        .catch((e) => {
          dispatch("alertStore/error", e);
        });
      this.offset = parseInt(this.offset) + this.limit;
    },
    loadCases() {
      const username = this.searchValue;
      const { dispatch } = this.$store;

      searchService
        .searchCase(username, this.offset, this.limit)
        .then((caseInfo) => {
          if (this.caseInfo == 0) {
            this.caseInfo = caseInfo.results;
          } else {
            this.caseInfo.push(...caseInfo.results);
          }
          if (caseInfo.results.length < 10) {
            this.stopSearch = 1;
          }
        })
        .catch((e) => {
          dispatch("alertStore/error", e);
        });
      this.offset = parseInt(this.offset) + this.limit;
    },

    filterSearch(f) {
      this.stopSearch = 0;
      this.displayFlag = f;
      this.offset = 0;
      this.profileInfo = 0;
      this.groupInfo = 0;
      this.caseInfo = 0;
      this.load();
    },
  },
};
</script>

<style scoped>
.search-body {
  background-color: #fff;
  padding-top: 6em;
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

.display-row {
  flex-direction: column;
}

.inputsearch {
  border: none;
  background-color: rgb(236, 236, 236);
}
.inputsearch:focus {
  outline: none;
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

.infinite-list {
  overflow-y: scroll;
  max-height: 70vh;
}
</style>