<template>
  <h2>Activity Feed</h2>
    <ol class="activity-feed">
    </ol>
    <ActivityItem></ActivityItem>
</template>
<script>
// @ is an alias to /src
import Activity from "@/components/activity/Activity.vue";

export default {
  name: "Activity",
  components: {"ActivityItem" : Activity},
};
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  color: #4e555f;
  font-size: 14px;
}

.activity-feed {
  padding: 15px;
  list-style: none;
}
</style>