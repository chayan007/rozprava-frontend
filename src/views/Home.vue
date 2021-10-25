<template>
  <section class="section section bg-soft pb-5 overflow-hidden z-2">
      <div class="row justify-content-center text-center pt-3">
        <div class="col-lg-8 col-xl-8">
          <div v-if="is_authenticated">
              <!--Home code structure begins here-->
          </div>
          <div v-else>
            <Splash></Splash>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import Splash from "@/components/common/Splash.vue";

export default {
  name: "Home",
  components: {Splash},
  computed: {
    is_authenticated() {
      return false;
    },
  }
};
</script>
