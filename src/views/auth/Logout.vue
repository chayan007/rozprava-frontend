<template>
  <div v-if="isLoggedOut">Redirecting to home...</div>
  <div v-else>Logging out in progress...</div>
</template>

<script>
import router from "@/router";

export default {
  name: "Logout",
  data() {
    return {
      isLoggedOut: false
    }
  },
  created() {
    this.$store.dispatch("authStore/logout");
    this.logout();
  },
  methods: {
    logout() {
      const user = localStorage.getItem('user');
      if (user)
        localStorage.removeItem('user');
      this.isLoggedOut = true;

      if (this.isLoggedOut)
      router.push({name: "Home"});
    }
  }
}
</script>

<style scoped>

</style>
