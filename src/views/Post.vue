<template>
  <div class="box " style="text-align: center">
    
          <Post1></Post1>
          <PostButton></PostButton>
  </div>
</template>

<script>
// @ is an alias to /src
import Post1 from "@/components/Post1.vue";
import PostButton from "@/components/PostButton.vue";
export default {
  name: "Post",
  components: { Post1,PostButton },
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