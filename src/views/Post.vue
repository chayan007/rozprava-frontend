<template>
  <div class="box " style="text-align: center">
    
          <Post1></Post1>
    <div class="">
        <div class="row justify-content-md-around">
          
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post1 from "@/components/Post1.vue";
export default {
  name: "Post",
  components: { Post1, },
};
</script>

<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 7rem;
  padding: 0%;
}
</style>