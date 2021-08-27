<template>
  <h2 class="mt-6 pl-4">Activity Feed</h2>
    <ol class="activity-feed">
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>         
    </ol>
    <div class="w-100 text-center">
      <a href="">
        Terms & condition
      </a>
    </div>
    
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
.activity-feed {
  padding: 2em;
  list-style: none;
}
</style>