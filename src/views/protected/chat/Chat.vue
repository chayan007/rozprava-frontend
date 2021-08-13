<template>
  <div class="box">
    <div >
      <ChatComponent></ChatComponent>
    </div> 
  </div>
</template>
<script>
import Chat1 from "@/components/chat/Chat1.vue";

export default {
  name: "Chat",
  components: {"ChatComponent":Chat1, },
};
</script>
<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 6.5rem;
  padding: 0%;
  max-width: 100%;
  display: flex;
}
</style>