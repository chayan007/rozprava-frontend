<template>
  <div class="p-3 col col-12 row m-0 align-items-center">
    <img
      class="pro-pic-sm rounded-circle mr-2"
      v-if="cases.display_pic"
      :src="cases.display_pic"
      alt=""
    />
    <img
      class="pro-pic-sm rounded-circle mr-2"
      v-else
      src="@/assets/profile-picture-1.jpg"
      alt=""
    />
    <div class="ml-2">
      <h6 class="m-0">{{ cases.user.username }}</h6>
      <h5 class="m-0">{{cases.question }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseSearch",
  props: ["cases"],
};
</script>

<style scoped>
.pro-pic-sm {
  height: 3em;
  width: 3em;
}
</style>