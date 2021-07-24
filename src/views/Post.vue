<template>
  <div class="box " style="text-align: center">
      <Post1></Post1>
          <div class="popup" v-if="true">
            <PostButton ></PostButton>
          </div>
          <div class="popup" v-else>
            <PostButton2 ></PostButton2>
          </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post1 from "@/components/Post1.vue";
import PostButton from "@/components/PostButton.vue";
import PostButton2 from "@/components/PostButton2.vue";
export default {
  name: "Post",
  components: { Post1,PostButton,PostButton2 },
};
</script>

<style scoped>
.popup{
    position: fixed;
    top: 90%;
    left: 0%;
    right: 0%;
    bottom: 2%;
    z-index: 199;
    

    display: flex;
    align-items: center;
    justify-content: center;
    
}
.box {
  font-family: Josefin Sans;
  margin-top: 7rem;
  padding: 0%;
  max-width: 100%;
}
</style>