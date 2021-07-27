<template>
  <div class="box" style="text-align: center">
    <ProfileComponent></ProfileComponent>
    <div class="popup">
      <BottomMenu></BottomMenu>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/profile/Profile.vue";
import BottomMenu from "@/components/profile/BottomMenu.vue";

export default {
  name: "Profile",
  components: { ProfileComponent: Profile, BottomMenu },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 90%;
  left: 0%;
  right: 0%;
  bottom: 2%;
  z-index: 199;
  max-width: 100%;
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