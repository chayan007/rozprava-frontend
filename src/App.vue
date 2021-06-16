<template>

<!-- when signed in-->
<div v-if="true">
<Nav/>
</div>


<!-- when not signed in-->
<div v-else>
<NavReg/>
</div>
<router-view/>
</template>

<script>
import NavReg from '@/components/NavReg.vue'
import Nav from '@/components/Nav.vue'
export default {
  components: {
   Nav, NavReg, 
  },
  
}
</script>