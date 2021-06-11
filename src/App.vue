<template>
<router-view>
  <nav id="navbar-main" aria-label="Primary navigation" class="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent headroom--not-top headroom--not-bottom headroom--pinned">
   <div class="d-flex align-items-center">
    <button type="submit" class="btn btn-primary ml-2"> <router-link to="/">Home</router-link></button>
    <button type="submit" class="btn btn-primary ml-2"> <router-link to="/register">Register</router-link></button>
    <button type="submit" class="btn btn-primary ml-2"> <router-link to="/baseLayout">Baselayout</router-link></button>
    
   </div>     
  </nav>
</router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
