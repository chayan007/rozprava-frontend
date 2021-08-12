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
          src="@/assets/profile-picture-1.jpg"
          class="card-img-top rounded-circle"
          alt="User image"
          width="100"
        />
      </div>

      <!-- notification text  -->
      <span class="alert-inner--text h3 ml-3"
        >Text to be notified is shown here and it is the sample of the notification.</span
      >

    

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

button span:hover{
  color: red;
}

</style>

