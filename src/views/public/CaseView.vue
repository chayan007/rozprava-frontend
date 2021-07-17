<template>
    <div class="container">
        <div class="row justify-content-md-around">
          <Case></Case>
          <Case></Case>
        </div>
      </div>
</template>

<script>
import Case from "@/components/case/Case.vue";

export default {
  name: "CaseView",
  components: { Case },
};
</script>

<style scoped>
.centered {
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
}
.profile-image {
  width: 3rem;
  height: 3rem;
}
</style>
