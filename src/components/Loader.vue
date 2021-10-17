<template>
  <div
    class="
      loader-box
      mt-10
      p-5
      w-100
      row
      m-0
      justify-content-center
      align-center
    "
  >
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
/* loader */
.loader-box {
  height: 40vh;
}
.loader {
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #383838;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>