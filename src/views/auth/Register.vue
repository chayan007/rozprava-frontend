<template>
  <div class="box" style="text-align: center">
    <div class="mb-3">
       <img class="logo p-3 mb-3" src="@/assets/splash.svg" alt="">

      <div class="container">
        <div class="row justify-content-md-around">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from "@/components/auth/RegisterForm.vue";
export default {
  name: "Register",
  components: { RegisterForm, },
};
</script>

<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 4rem;
  padding: 0%;
}
</style>
