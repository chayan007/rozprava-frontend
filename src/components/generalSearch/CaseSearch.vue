<template>
  <div class="p-3 col col-12 row m-0 align-items-center">
    <img
      class="pro-pic-sm rounded-circle mr-2"
      v-if="allCases.display_pic"
      :src="allCases.display_pic"
      alt=""
    />
    <img
      class="pro-pic-sm rounded-circle mr-2"
      v-else
      src="@/assets/profile-picture-1.jpg"
      alt=""
    />
    <div class="ml-2">
      <h6 class="m-0">{{ allCases.user.username }}</h6>
      <h5 class="m-0">{{allCases}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseSearch",
  props: ["allCases"],
};
</script>

<style scoped>
.pro-pic-sm {
  height: 3em;
  width: 3em;
}
</style>