<template>
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