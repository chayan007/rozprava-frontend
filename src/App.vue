<template>
  <div>
    <div v-if="is_authenticated"><Nav /></div>
    <div v-else><NavigationRegistered /></div>

    <div v-if="alert.message">
      <Alert :alertType="alert.type" :message="alert.message"></Alert>
    </div>
  </div>
  <router-view />
</template>

<script>
import NavigationRegistered from "@/components/NavigationRegistered.vue";
import Nav from "@/components/Navigation.vue";
import Alert from "@/components/alerts/alert.vue";

export default {
  components: {
    Nav,
    NavigationRegistered,
    Alert,
  },
  computed: {
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
    alert() {
      return this.$store.state.alertStore;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("alertStore/clear");
    },
  },
};
</script>
