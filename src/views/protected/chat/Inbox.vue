<template>
  <div class="box " style="text-align: center">
      <InboxComponent></InboxComponent>
      <ChatComponent></ChatComponent>
  </div>
</template>

<script>
// @ is an alias to /src

import Inbox from "@/components/chat/Inbox.vue";
import Chat from "@/components/chat/Chat.vue";
export default {
  name: "Inbox",
  components: { "InboxComponent":Inbox,"ChatComponent":Chat },
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