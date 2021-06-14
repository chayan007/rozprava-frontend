<template>
<nav id="navbar-main" aria-label="Primary navigation" class="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent headroom--not-top headroom--not-bottom headroom--pinned">
   <div class="d-flex align-items-center">
    <button type="submit" class="btn btn-primary ml-2"> <router-link to="/signup">SignUp</router-link></button>
    <button type="submit" class="btn btn-primary ml-2"> <router-link to="/register">Register</router-link></button>
    <button type="submit" class="btn btn-primary ml-2"> <router-link to="/splashscreen">SplashScreen</router-link></button>
    <button type="submit" class="btn btn-primary ml-2"> <router-link to="/login">Login</router-link></button>

  </div>     
    </nav>
  
  <router-view/>
</template>

