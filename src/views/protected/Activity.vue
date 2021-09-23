<template>
  <h2 class="mt-6 pl-4">Activity Feed</h2>
  <ol class="activity-feed">
    <template v-if="activities.length==0">
      Welcome
    </template>
    <template v-else v-for="activity in activities" :key="activity.message">
      <ActivityItem :activity="activity" />
    </template>
  </ol>

  <footer class="w-100 text-center">
    <a href=""> Terms & condition </a>
  </footer>
</template>
<script>
import Activity from "@/components/activity/Activity.vue";
import { activityService } from "@/services";

export default {
  name: "Activity",
  components: { ActivityItem: Activity },
  data() {
    return {
      activities: [],
    };
  },
  methods: {
    getActivityList() {
      const { dispatch } = this.$store;
      activityService
        .getActivity()
        .then((activities) => {
          this.activities = activities;
        })
        .catch((error) => {
          dispatch(
            "alertStore/error", error
          );
        });
    },
  },
  created() {
    this.getActivityList();
  },
};
</script>

<style>
.activity-feed {
  padding: 2em;
  list-style: none;
}
</style>