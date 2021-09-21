<template>
  <h2 class="mt-6 pl-4">Activity Feed</h2>
  <ol class="activity-feed">
    <template v-for="activity in activities" :key="activity.message">
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
import { config } from "@/configurations";

export default {
  name: "Activity",
  components: { ActivityItem: Activity },
  data() {
    return {
      activities: null,
    };
  },
  methods: {
    getActivityList() {
      activityService
        .getActivity()
        .then((activities) => {
          this.activities = activities;
        })
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
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