<template>
  <div class="box " style="text-align: center">
      
      <ChatComponent></ChatComponent>
  </div>
</template>

<script>
// @ is an alias to /src


import Chat from "@/components/chat/Chat.vue";
export default {
  name: "Chat",
  components: { "ChatComponent":Chat },
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