<template>
  <nav
    id="navbar-main"
    aria-label="Primary navigation"
    class="
      navbar navbar-main navbar-expand-lg navbar-theme-primary
      p-2
      pr-3
      headroom
      navbar-light navbar-transparent
      headroom--not-top headroom--not-bottom headroom--pinned
    "
  >
    <div class="container position-relative">
      <div class="navbar-collapse collapse" id="navbar_global" style="">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-12 text-center collapse-close">
              <a
                href="#navbar_global"
                class="fas fa-times collapsed"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                title="close"
                aria-label="Toggle navigation"
              ></a>
            </div>
          </div>
        </div>
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown">
              <span class="nav-link-inner-text w-100 row m-0 justify-content-between">
                <span>Menu</span>
                <img class="menu-item-icon pr-2" src="@/assets/menu.svg" alt="">
              </span>
            </a>
            <ul class="dropdown-menu">
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item">About us</a></li>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item">Terms and Conditions</a></li>
            </ul>
          </li>

          <!-- this is just a dev component this will be removed-->

          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown">
              <span class="nav-link-inner-text w-100 row m-0 justify-content-between">
                <span>Pages</span>
                <img class="menu-item-icon pr-2" src="@/assets/pages.svg" alt="">
              </span>
            </a>
            <ul class="dropdown-menu">
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item"><router-link to="/signup">SignUp</router-link></a></li>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item"><router-link to="/register">Register</router-link></a></li>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item"><router-link to="/login">Login</router-link></a></li>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item"><router-link to="/timeline">Timeline</router-link></a></li>
            </ul>
          </li>

          <!-- remove untill here-->
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbar_global"
          aria-controls="navbar_global"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
           <img class="menu-item-icon pr-2" src="@/assets/menu.svg" alt="">
        </button>
      </div>

      <a href="#" class="btn btn-sm btn-icon btn-primary fmw-100 font-weight-normal" role="button"><span class="mr-2"><span class="fas fa-sign-in-alt"></span></span><router-link to="/login"> Sign In </router-link></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationRegistered",
};
</script>

<style>
.profile-image {
  width: 3rem;
  height: 3rem;
}
.menu-icon {
  width: 1.5em;
}
.menu-item-icon {
  width: 1.9em;
}
.nav-item {
  border-bottom: 1px solid rgb(196, 196, 196);
}
</style>
