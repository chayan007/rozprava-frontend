<template>
  <div class="container mt-6 mb-6">
    <div class="row justify-content-md-around">
      <!-- search -->
      <div class="search-outer pt-0 pl-3 pr-3 w-100">
        <router-link to="/search">
          <div
            class="
              search
              p-2
              pl-3
              border
              rounded-pill
              row
              m-0
              align-items-center
            "
          >
            <i class="fas fa-search mr-2"></i>
            Search
          </div>
        </router-link>
      </div>
      <!-- search -->
      <!-- filters -->
      <div class="filter-outer p-0 vw-100">
        <div class="filter-inner row m-0 w-100 pl-3 pr-3 p-2">
          <span
            @click="filter = -1"
            :class="{ active: filter === -1 }"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              rounded-pill
              row
              m-0
              align-items-center
            "
            >All</span
          >
          <span
            @click="filter = 1"
            :class="{ active: filter === 1}"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              rounded-pill
              row
              m-0
              align-items-center
            "
            >Politics</span
          >
          <span
            @click="filter = 2"
            :class="{ active: filter === 2 }"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              rounded-pill
              row
              m-0
              align-items-center
            "
            >Sports</span
          >
          <span
            @click="filter = 3"
            :class="{ active: filter === 3 }"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              rounded-pill
              row
              m-0
              align-items-center
            "
            >Education</span
          >
          <span
            @click="filter = 4"
            :class="{ active: filter === 4 }"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              rounded-pill
              row
              m-0
              align-items-center
            "
            >Adult</span
          >
          <span
            @click="filter = 5"
            :class="{ active: filter === 5 }"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              rounded-pill
              row
              m-0
              align-items-center
            "
            >Spiritual</span
          >
          <span
            @click="filter = 6"
            :class="{ active: filter === 6 }"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              row
              m-0
              align-items-center
              rounded-pill
            "
            >Entertainment</span
          >
          <span
            @click="filter = 7"
            :class="{ active: filter === 7 }"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              row
              m-0
              align-items-center
              rounded-pill
            "
            >Business</span
          >
          <span
            @click="filter = 7"
            :class="{ active: filter === 8 }"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              row
              m-0
              align-items-center
              rounded-pill
            "
            >Technology</span
          >
          <span
            @click="filter = 8"
            :class="{ active: filter === 9}"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              row
              m-0
              align-items-center
              rounded-pill
            "
            >Nature</span
          >
          <span
            @click="filter = 0"
            :class="{ active: filter === 0}"
            class="
              filter
              p-1
              pl-3
              pr-3
              mr-2
              mb-3
              mt-2
              shadow
              row
              m-0
              align-items-center
              rounded-pill
            "
            >Other</span
          >
        </div>
      </div>

      <!-- loader -->
      <Loader v-show="cases.length === 0" />
      <!-- loader -->

      <!-- cases -->
      <template v-for="case_detail in cases" :key="case_detail.uuid">
        <router-link :to="'/case/'+case_detail.slug">
          <Case v-show="filter === -1 || filter === case_detail.category" :detail="case_detail"></Case>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Case from "@/components/case/Case.vue";
import { config } from "@/configurations";

export default {
  name: "CaseView",
  components: { Case, Loader },
  data() {
    return {
      filter: -1,
    };
  },
  computed: {
    cases() {
      return this.$store.state.caseStore.cases;
    },
  },
  methods: {
    getCasesByURL() {
      const routePath = this.$route.path;
      const defined_list_route = config.caseConfig.list_routes[routePath];
      const { dispatch } = this.$store;

      if (!defined_list_route) {
        dispatch(
          "alertStore/error",
          config.messagingConfig.messages.error.unknown_error,
          { root: true }
        );
        return;
      }

      if (defined_list_route === "TIMELINE") {
        dispatch("caseStore/storeTimelineCases");
      }
    },
  },
  created() {
    this.getCasesByURL();
  },
};
</script>

<style scoped>
.centered {
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
}
.profile-image {
  width: 3rem;
  height: 3rem;
}
.border {
  border: 0.0625rem solid #cbcbcb !important;
}
.search,
.filter {
  background-color: #fff;
}

.filter-inner {
  overflow-x: scroll;
  flex-wrap: nowrap;
}
.filter-inner::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.filter-inner {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.active {
  border: 1px solid rgb(143, 143, 143);
}

</style>
