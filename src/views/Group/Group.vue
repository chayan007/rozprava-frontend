<template>
  <div
    class="row m-0 justify-content-between align-items-center p-3 w-100 mt-7"
  >
    <h1 class="m-0 font-weight-bold">Fantasy Bros</h1>
    <img
      class="addimgedit mr-5"
      src="@/assets/Edit.png"
      v-if="openSettings"
      alt=""
    />

    <div>
      <img
        class="addimg"
        v-on:click="openSettings = !openSettings"
        src="@/assets/settings.png"
        alt=""
      />
      <img class="addimg" src="@/assets/grpicon.png" alt="" />
    </div>
  </div>

  <!-- setting panel -->
  <div class="p-3" v-if="openSettings">
    <h3 class="p-3 icon-title h6 mb-0 font-weight-bold">Change Group Picture</h3>
    <h3 class="p-3 icon-title h6 mb-0 font-weight-bold">Change BIO</h3>
    <h3 class="p-3 icon-title h6 mb-0 font-weight-bold">Change <a style="color: green">Admins</a></h3>
    <h3 class="p-3 icon-title h6 mb-0 font-weight-bold">Invite People</h3>
  </div>
</template>

<script>
export default {
  name: "Group",
  data() {
    return {
      openSettings: 0,
    };
  },
};
</script>

<style scoped>
.addimg {
  height: 3em;
  width: 3em;
  color: black;
}

.addimgedit {
  height: 2em;
  width: 2em;
}
</style>
