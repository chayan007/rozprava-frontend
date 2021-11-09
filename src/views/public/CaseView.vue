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
            :class="{ active: filter === 1 }"
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
            :class="{ active: filter === 9 }"
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
            :class="{ active: filter === 0 }"
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

      <!-- cases -->
      <div class="infinite-list" id="infinite-list">
        <div v-for="case_detail in cases" :key="case_detail.uuid">
            <Case
              v-show="filter === -1 || filter === case_detail.category"
              :detail="case_detail"
            ></Case>
        </div>
      </div>
    </div>

    <!-- loader -->
    <div v-if="viewLoader">
      <Loader class="m-0" />
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Case from "@/components/case/Case.vue";
import { config } from "@/configurations";
import { caseService } from "@/services";

export default {
  name: "CaseView",
  components: { Case, Loader },
  data() {
    return {
      filter: -1,
      cases: [],
      offset: "0",
      limit: 10,
      viewLoader: 0,
      stopSearch: 0,
    };
  },
  computed : {
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
  },
  watch: {
    searchValue() {
      this.stopSearch = 0;
    },
  },
  mounted() {
    // Detect when scrolled to bottom.
    const listElm = document.querySelector("#infinite-list");
    listElm.addEventListener("scroll", () => {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.getCasesByURL();
      }
    });

    // Initially load some items.
    this.getCasesByURL();
  },
  methods: {
    getCasesByURL() {
      const routePath = this.$route.path;
      const defined_list_route = config.caseConfig.list_routes[routePath];
      const { dispatch } = this.$store;
      this.viewLoader = 1;

      if (!defined_list_route) {
        dispatch(
          "alertStore/error",
          config.messagingConfig.messages.error.unknown_error,
          { root: true }
        );
        return;
      }

      if (defined_list_route === "TIMELINE") {
        if (!this.stopSearch) {
          caseService
            .getCases(
              (this.category = null),
              (this.username = null),
              (this.uuid = null),
              this.offset,
              this.limit
            )
            .then((cases) => {
              if (this.cases == 0) {
                this.cases = cases;
              } else {
                this.cases.push(...cases);
              }
              this.viewLoader = 0;
              if (cases.length < 10) {
                this.stopSearch = 1;
              }
            })
            .catch((error) =>
              dispatch("alertStore/success", error, { root: true })
            );
        }
        this.offset = parseInt(this.offset) + this.limit;
      }
    },
  },
  created() {
    this.getCasesByURL();
    if (!this.is_authenticated.profile) {
      this.$router.go();
    }
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

.infinite-list {
  overflow-y: scroll;
  max-height: 80vh;
}
</style>
