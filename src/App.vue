<template>
  <div v-if="is_authenticated()"><Nav /></div>
  <div v-else><NavReg /></div>

  <div v-if="alert.message" :class="`alert ${alert.type}`">
    <Alert />
  </div>

  <router-view />
</template>

<script>
import NavReg from "@/components/NavReg.vue";
import Nav from "@/components/Nav.vue";
import Alert from "@/components/alerts/alert.vue"
export default {
  name: "Rozprava",
  components: {
    Nav,
    NavReg,
    Alert,
  },
  computed: {
    alert() {
      return this.$store.state.alertStore;
    },
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("alertStore/clear");
    },
  }
};
</script>
