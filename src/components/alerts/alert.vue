<template>
  <!--success alert-->
  <div
    v-if="`${alert.type}=='alert-success'`"
    class="alert alert-success alert-dismissible shadow-soft fade show"
    role="alert"
  >
    <span class="alert-inner--icon"
      ><span class="far fa-thumbs-up"></span
    ></span>
    <span class="alert-inner--text"
      ><strong>Well done!</strong> {{ alert.message }}
    </span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>

  <!--error alert-->
  <div
    v-if="`${alert.type}=='alert-success'`"
    class="alert alert-danger alert-dismissible shadow-soft fade show"
    role="alert"
  >
    <span class="alert-inner--icon"><span class="fas fa-fire"></span></span>
    <span class="alert-inner--text"
      ><strong>Oh snap!</strong> {{ alert.message }}
    </span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>

  <!--notification alert-->
  <div
    v-else
    class="alert alert-info alert-dismissible shadow-soft fade show"
    role="alert"
  >
    <span class="alert-inner--icon"><span class="far fa-bell"></span></span>
    <span class="alert-inner--text"
      ><strong>Heads up!</strong> {{ alert.message }}
    </span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Alert",
  prop: [alert],
};
</script>
