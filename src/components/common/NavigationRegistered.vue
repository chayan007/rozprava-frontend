<template>
  <nav
    id="navbar-main"
    aria-label="Primary navigation"
    class="
      navbar navbar-main navbar-expand-lg navbar-theme-primary
      headroom
      navbar-light navbar-transparent
      headroom--not-top headroom--not-bottom headroom--pinned
    "
  >
    <div class="container position-relative">
      <div class="navbar-collapse collapse" id="navbar_global" style="">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-close">
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
              <span class="nav-link-inner-text">Menu</span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">About us</a></li>
              <li><a class="dropdown-item">Terms and Conditions</a></li>
            </ul>
          </li>

          <!-- this is just a dev component this will be removed-->

          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown">
              <span class="nav-link-inner-text">Pages</span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item"><router-link to="/signup">SignUp</router-link></a></li>
              <li><a class="dropdown-item"><router-link to="/register">Register</router-link></a></li>
              <li><a class="dropdown-item"><router-link to="/login">Login</router-link></a></li>
              <li><a class="dropdown-item"><router-link to="/timeline">Timeline</router-link></a></li>
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
          <svg
            height="32px"
            id="Layer_1"
            style="enable-background:new 0 0 32 32;"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            />
          </svg>
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
</style>
