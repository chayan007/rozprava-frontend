<template>
  <h2>Activity Feed</h2>
    <ol class="activity-feed">
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>    
    </ol>
    
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
  padding: 50px;
  list-style: none;
}

</style>