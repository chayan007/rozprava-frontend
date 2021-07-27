<template>
  <div class="box" style="text-align: center">
    <div class="mb-5">
      <Button></Button>
    </div>
   <div
      class="
        space
        alert alert-secondary alert-dismissible
        shadow-inset
        fade
        show"
      role="alert">
      <h5>People you may know</h5>
      <button
        type="button"
        class="close top"
        data-dismiss="alert"
        aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      <div>
        <PeopleCard></PeopleCard>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/recommendation/Button.vue";
import PeopleCard from "@/components/recommendation/PeopleCard.vue";

export default {
  name: "Recommendation",
  components: {Button, PeopleCard},
};
</script>
<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 5rem;
  padding: 0%;
}
.top {
  top: 2rem;
}
.alert {
  position: relative;
  padding: 1.5rem 0rem;
  margin-bottom: 1rem;
  border: 0.0625rem solid transparent;
  border-radius: 0.55rem;
}
.space {
  margin-left: 10%;
  margin-right: 9%;
}
@media (max-width: 700px) {
  .space {
    margin-right: 2%;
    margin-left: 2%;
  }
}
</style>

