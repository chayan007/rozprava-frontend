<template>
  <div>
    <div v-if="is_authenticated()"><Nav /></div>
    <div v-else><NavigationRegistered /></div>

    <div v-if="alert()">
      <Alert :alerttype="alerttype" :message="message"></Alert>
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
  data() {
    return {
      alerttype: this.$store.state.alertStore.type,
      message: this.$store.state.alertStore.message,
    };
  },
  computed: {
    is_authenticated: function() {
      return false;
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
