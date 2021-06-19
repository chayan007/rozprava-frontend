<template>
  <template v-if="is_authenticated"><div></div></template>
  <template v-else><SplashScreen></SplashScreen></template>
</template>

<script>
import SplashScreen from "@/components/SplashScreen.vue";

export default {
    name: 'Home',
    components: { SplashScreen },
    computed: {
      is_authenticated() {
        return this.$store.state.authStore.user;
      }
    }
}
</script>
