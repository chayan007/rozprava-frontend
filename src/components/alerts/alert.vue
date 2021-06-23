<template>
  <section class="section section bg-soft overflow-hidden z-2">
    <div class="row justify-content-center text-center pt-3">
      <div class="col-lg-8 col-xl-8">
        <!--success alert-->
        <div
          v-if="alerttype == 'alert-success'"
          class="alert alert-success alert-dismissible shadow-soft fade show"
          role="alert"
        >
          <span class="alert-inner--icon"
            ><span class="far fa-thumbs-up"></span
          ></span>
          <span class="alert-inner--text"
            ><strong>Well done!</strong> {{ message }}
          </span>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <!--error alert-->
        <div
          v-if="alerttype == 'alert-danger'"
          class="alert alert-danger alert-dismissible shadow-soft fade show"
          role="alert"
        >
          <span class="alert-inner--icon"
            ><span class="fas fa-fire"></span
          ></span>
          <span class="alert-inner--text"
            ><strong>Oh snap!</strong> {{ message }}
          </span>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <!--notification alert-->
        <div
          v-else
          class="alert alert-info alert-dismissible shadow-soft fade show"
          role="alert"
        >
          <span class="alert-inner--icon"
            ><span class="far fa-bell"></span
          ></span>
          <span class="alert-inner--text"
            ><strong>Heads up!</strong> {{ message }}
          </span>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Alert",
  props: ["alerttype", "message"],
};
</script>
