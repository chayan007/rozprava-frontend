<template>
  <section class="section section bg-soft pb-5 overflow-hidden z-2">
      <div class="row justify-content-center text-center pt-3">
        <div class="col-lg-8 col-xl-8">
          <div v-if="is_autenticated()">
              <!--Home code structure begins here-->
          </div>
          <div v-else>
            <SplashScreen></SplashScreen>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import SplashScreen from "@/components/SplashScreen.vue";

export default {
  name: "Home",
  components: { SplashScreen },
  computed: {
    is_authenticated: function() {
      return false;
    },
  }
};
</script>
