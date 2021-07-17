<template>
  <div class="box" style="text-align: center;">
    <div class="mb-5">
      <!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In  -->
      <svg
        class="mt-3"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="200px"
        height="200px"
        viewBox="0 0 225.01 243.51"
        style="overflow:visible;enable-background:new 0 0 225.01 243.51;"
        xml:space="preserve"
        color="#000000"
      >
        <defs></defs>
        <g>
          <path
            d="M137.52,0c24.9,10.26,48.5,22.03,65.41,44.48c31.07,41.23,29.3,102.02-5.02,140.79c-2.92,3.3-6.49,6.03-11.29,10.42
		c-5.56-30.23-10.93-58.44-15.9-86.73c-6.15-35.05-26.09-53.37-57.4-54.7c-26.47-1.12-51.46,15.52-58.52,51.53
		c-2.88,14.7-4.53,29.64-7.34,44.35c-2.7,14.17-6.18,28.2-9.62,43.68c-14.18-8-21.92-21.55-27.93-35.87
		C-16.85,94.26,12.16,29.15,77.87,4.43c3.32-1.25,6.47-2.95,9.7-4.43C104.22,0,120.87,0,137.52,0z"
          />
          <path
            d="M75.08,243.51c-2.48-5.68-4.96-11.36-8.24-18.84c31.58,0,59.81,0,91.39,0c-3.27,7.5-5.75,13.17-8.23,18.84
		C125.03,243.51,100.06,243.51,75.08,243.51z"
          />
          <path
            d="M69.44,97.74c30.07,0,57.45,0,86.19,0c6.45,25.06,12.84,49.85,19.61,76.14c-41.94,0-82.49,0-125.31,0
		C56.5,148.21,62.93,123.16,69.44,97.74z"
          />
          <path
            d="M173.81,185.6c4.6,23.5,0.34,29.19-21.83,29.26c-25.92,0.08-51.85,0.06-77.77,0.01c-23.13-0.05-26.49-4.09-23.63-29.27
		C91.58,185.6,132.73,185.6,173.81,185.6z"
          />
        </g>
      </svg>

      <h1 style="margin: 0%; margin-top: 0.5rem; font-size:3rem">ROZPRAVA</h1>
      <h3
        style="margin: 0%; margin-top: 0rem; margin-bottom: 2rem; font-size: 1.2rem;"
      >
        Express yourself
      </h3>
      <div class="container">
        <div class="row justify-content-md-around">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/auth/LoginForm.vue";
export default {
  name: "Login",
  components: { LoginForm,  },
};
</script>

<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 7rem;
  padding: 0%;
}
.login {
  padding-left: 8.6rem;
  padding-right: 8.6rem;
}

.pad-email {
  padding-left: 4.2rem;
  padding-right: 4.2rem;
}

.pad-twitter {
  padding-left: 4rem;
  padding-right: 4rem;
}

.pad-google {
  padding-left: 4rem;
  padding-right: 4rem;
}

.pad-facebook {
  padding-left: 3.4rem;
  padding-right: 3.4rem;
}
</style>
