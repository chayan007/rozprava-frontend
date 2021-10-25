<template>
  <div>
    <div
      class="alert alert-secondary alert-dismissible shadow fade show"
      role="alert"
    >
      <!-- Profile badge -->
      <div
        class="
          badge
          profile-image
          bg-primary
          border border-light
          rounded-circle
        "
      >
        <img v-if="notification.profile.display_pic"
          :src="notification.profile.display_pic"
          class="card-img-top mt-5 rounded-circle"
          alt="User image"
          width="100"
        />
        <img v-else
          src="@/assets/profile-picture-1.jpg"
          class="card-img-top mt-5 rounded-circle"
          alt="User image"
          width="100"
        />
      </div>

      <!-- notification text  -->
      <span v-on:click="redirect()" class="alert-inner--text h6 ml-3">{{
        notification.message
      }}</span>

      <button
        type="button"
        class="close text-dark"
        data-dismiss="alert"
        aria-label="Close"
      ><img class="cross" src="@/assets/cross-small.svg" alt="">
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
.cross {
  width: 1em;
}
</style>

