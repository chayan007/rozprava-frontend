<template>
  <div>
  <div v-if="is_authenticated()"><Nav /></div>
  <div v-else><NavigationRegistered /></div>

  <div v-if="alert()">
    <Alert :type="type" :message="message"/>
  </div>
  </div>
  <router-view />
</template>

<script>
import NavigationRegistered from "@/components/NavigationRegistered.vue";
import Nav from "@/components/Navigation.vue";
import Alert from "@/components/alerts/alert.vue"
export default {
  name: "Rozprava",
  components: {
    Nav,
    NavigationRegistered,
    Alert
  },
  data(){
      return {
        type: this.$store.state.alertStore.type,
        message: this.$store.state.alertStore.message
      }
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
