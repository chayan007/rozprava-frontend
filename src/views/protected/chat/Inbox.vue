<template>
  <div class="box " style="text-align: center">
      <InboxComponent></InboxComponent>
    </div>
</template>

<script>
// @ is an alias to /src

import Inbox from "@/components/chat/Inbox.vue";

export default {
  name: "Inbox",
  components: { "InboxComponent":Inbox,},
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