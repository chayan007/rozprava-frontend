<template>
  <nav
    id="navbar-main"
    aria-label="Primary navigation"
    class="
      p-2
      navbar navbar-main navbar-expand-lg navbar-theme-primary
      justify-content-between
      headroom
      navbar-light navbar-transparent
    "
  >
    <!-- Navbar open box -->
    <div
      class="col col-9 ml-3 nav-menu-collapse navbar-collapse collapse mt-3"
      id="navbar_global"
      style=""
    >
      <div class="navbar-collapse-header">
        <div class="row">
          <div class="col-12 text-left collapse-close">
            <a
              href="#navbar_global"
              class="close-nav-menu fas fa-arrow-left collapsed"
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
        <li class="shadow-soft rounded p-2 mb-3 text-center btn" data-toggle="collapse" data-target="#navbar_global">
          <router-link to="/login">
            <h6 class="m-0">
              <b> Login</b> <span class="ml-2 fas fa-sign-in-alt"></span>
            </h6>
          </router-link>
        </li>
        <p class="mt-2 mb-1">Don't have an account ?</p>
        <li class="shadow-soft rounded p-2 mb-3 text-center btn btn-primary" data-toggle="collapse" data-target="#navbar_global">
          <router-link to="/signup">
            <h6 class="m-0">
              <b> Sign Up</b> <span class="ml-2 fas fa-user-plus"></span>
            </h6>
          </router-link>
        </li>
        <hr class="m-0 mt-3 mb-3 hr-underline" />
        <li data-toggle="collapse" data-target="#navbar_global">
          <router-link to="/aboutus">
            <h6 class="mb-3">About us</h6>
          </router-link>
        </li>
        <li data-toggle="collapse" data-target="#navbar_global">
          <router-link to="/report">
            <h6 class="mb-3">Report</h6>
          </router-link>
        </li>
        <li data-toggle="collapse" data-target="#navbar_global">
          <router-link to="/termsandconditions">
            <h6 class="mb-3">Terms and Conditions</h6>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- Navbar open box -->

    <!-- menu btn -->
    <div class="rounded-circle navbar-menu-btn shadow p-1">
      <button
        class="navbar-toggler collapsed p-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbar_global"
        aria-controls="navbar_global"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <img class="menu-icon" src="@/assets/menu.svg" alt="" />
      </button>
    </div>
    <!-- menu btn -->

    <a
      href="#"
      class="btn btn-sm btn-icon btn-primary fmw-100 font-weight-normal"
      role="button"
      ><span class="mr-2"><span class="fas fa-sign-in-alt"></span></span
      ><router-link to="/login"> Sign In </router-link></a
    >
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.hr-underline {
  border: none;
  border-bottom: 1px solid rgb(145, 145, 145);
}
.navbar-transparent,
.headroom--not-top,
.nav-menu-collapse {
  background-color: #f2f2f5;
}
.headroom--not-top {
  box-shadow: 0 0 15px 5px rgba(107, 107, 107, 0.233);
}
.navbar-menu-btn,
.nav-profile-dropdown {
  background-color: #fff;
}
.menu-icon {
  width: 1.2em;
}
.menu-item-icon {
  width: 1.9em;
}
.nav-item {
  border-bottom: 1px solid rgb(196, 196, 196);
}
.close-nav-menu {
  font-size: 1.5em;
}
.navbar-brand-name {
  letter-spacing: 3px;
}
.profile-image {
  width: 3rem;
  height: 3rem;
}
.profile-nav {
  border: none !important;
}
.profile-image img {
  opacity: 1;
}
.nav-profile-dropdown {
  left: unset;
  right: 0;
  box-shadow: 3px 3px 15px -1px rgba(64, 68, 77, 0.404);
}
</style>