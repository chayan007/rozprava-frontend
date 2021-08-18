<template>
  <div>
    <div
      class="alert alert-secondary alert-dismissible shadow-soft fade show"
      role="alert"
    >
      <!-- Profile badge -->
      <div
        class="
          badge
          profile-image
          bg-primary
          shadow-inset
          border border-light
          rounded-circle
          ml-2
        "
      >
        <img
          :src="notification.profile.display_pic"
          class="card-img-top mt-5 rounded-circle"
          alt="User image"
          width="100"
        />
      </div>

      <!-- notification text  -->
      <span v-on:click="redirect()" class="alert-inner--text h3 ml-3">{{
        notification.message
      }}</span>

      <button
        type="button"
        class="close text-dark"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span class="a.text-danger:hover" aria-hidden="true">x</span>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Notification",
  props: ["notification"],
  methods: {
    redirect() {
      this.$router.push(this.notification.redirect_url);
    },
  },
};
</script>

<style scoped>
.badge {
  width: 4rem;
  height: 4rem;
  padding: 0.15rem;
  top: 45%;
  margin-right: 0.5rem;
}

</style>

