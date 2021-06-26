<template>
  <div v-if="true"><Nav/></div>
  <div v-else><NavReg/></div>

  <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>

  <router-view/>
</template>

<script>
import NavReg from '@/components/NavReg.vue'
import Nav from '@/components/Nav.vue'
export default {
  components: {
    Nav,
    NavReg,
  },
  computed: {
    alert () {
      return this.$store.state.alertStore;
    },
    is_authenticated() {
      return this.$store.state.authStore.user;
    }
  },
  watch:{
    $route (){
      this.$store.dispatch('alertStore/clear');
    }
  }

}
</script>
