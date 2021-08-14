<template>
  <div class="box " style="text-align: center">
    <InboxCard></InboxCard>
  </div>
</template>
<script>
import Inbox from "@/components/chat/Inbox.vue";

export default {
  name: "Inbox",
  components: { "InboxCard":Inbox,},
};
</script>
<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 7rem;
  padding: 0%;
  max-width: 100%;
}
</style>