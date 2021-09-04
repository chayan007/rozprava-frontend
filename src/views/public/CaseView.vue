<template>
    <div class="container">
        <div class="row justify-content-md-around">
          <template v-for="case_detail in cases" :key="case_detail.uuid">
            <Case :detail="case_detail"></Case>
          </template>
        </div>
      </div>
</template>

<script>
import Case from "@/components/case/Case.vue";
import { config } from "@/configurations"; 

export default {
  name: "CaseView",
  components: { Case },
  computed: {
    cases() { return this.$store.state.caseStore.cases; }
  },
  methods: {
    getCasesByURL() {
      const routePath = this.$route.path;
      const defined_list_route = config.caseConfig.list_routes[routePath];
      const { dispatch } = this.$store;

      if (!defined_list_route) {
        dispatch(
          'alertStore/error',
          config.messagingConfig.messages.error.unknown_error,
          { root: true }
        );
        return;
      }

      if (defined_list_route === 'TIMELINE') {
        dispatch('caseStore/storeTimelineCases');
      }
    }
  },
  created() {
    this.getCasesByURL()
  }
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
</style>
