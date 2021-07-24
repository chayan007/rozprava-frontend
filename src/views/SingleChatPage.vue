<template>
  <div class="box " style="text-align: center">
      <SingleChat></SingleChat>
  </div>
</template>

<script>
// @ is an alias to /src

import SingleChat from "@/components/SingleChat.vue";
export default {
  name: "Chat",
  components: { SingleChat, },
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