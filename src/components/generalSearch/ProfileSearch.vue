<template>
    <div
      class="p-3 col col-12 row m-0 align-items-center"
    >
      <img
        class="pro-pic-sm rounded-circle mr-2"
        v-if="account.display_pic"
        :src="account.display_pic"
        alt=""
      />
      <img
        class="pro-pic-sm rounded-circle mr-2"
        v-else
        src="@/assets/profile-picture-1.jpg"
        alt=""
      />
      <h5 class="m-0 ml-2">{{account.user.username}}</h5>
    </div>
</template>

<script>
export default {
  name: "ProfileSearch",
  props: ["account"],
};
</script>

<style scoped>
.pro-pic-sm {
  height: 3em;
  width: 3em;
}

</style>

