<template>
  <nav
    id="navbar-main"
    aria-label="Primary navigation"
    class="
      p-2
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
              <router-link to="/settings" >
                <li data-toggle="collapse" data-target="#navbar_global">
                  <a class="dropdown-item">Settings</a>
                </li>
              </router-link>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item">About us</a></li>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item">Report</a></li>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item">Terms and Conditions</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown">
              <span class="nav-link-inner-text w-100 row m-0 justify-content-between">
                <span>Chats</span>
                <img class="menu-item-icon pr-2" src="@/assets/chats-menu.svg" alt="">               
              </span>
            </a>
            <ul class="dropdown-menu">
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item">Chats</a></li>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item">Groups</a></li>
              <li data-toggle="collapse" data-target="#navbar_global"><a class="dropdown-item">Notifications</a></li>
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
              <li  data-toggle="collapse" data-target="#navbar_global">
                <a class="dropdown-item"
                  ><router-link to="/signup">SignUp</router-link></a
                >
              </li>
              <li  data-toggle="collapse" data-target="#navbar_global">
                <a class="dropdown-item"
                  ><router-link to="/register">Register</router-link></a
                >
              </li>
              <li  data-toggle="collapse" data-target="#navbar_global">
                <a class="dropdown-item"
                  ><router-link to="/login">Login</router-link></a
                >
              </li>
              <li  data-toggle="collapse" data-target="#navbar_global">
                <a class="dropdown-item"
                  ><router-link to="/timeline">Timeline</router-link></a
                >
              </li>
              <li  data-toggle="collapse" data-target="#navbar_global">
                <a class="dropdown-item"
                  ><router-link to="/case-create">Create</router-link></a
                >
              </li>
            </ul>
          </li>

          <!-- remove untill here-->
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <button
          class="navbar-toggler collapsed p-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbar_global"
          aria-controls="navbar_global"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <img class="menu-icon" src="@/assets/menu.svg" alt="">
        </button>
      </div>
      <!--search bar button invoking the search page-->
      <div class="navbar-collapse collapse" id="searchbar" style="">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-12 text-center collapse-close">
              <a
                href="#searchbar"
                class="fas fa-times collapsed"
                data-toggle="collapse"
                data-target="#searchbar"
                aria-controls="searchbar"
                aria-expanded="false"
                title="close"
                aria-label="searchbar"
              ></a>
            </div>
          </div>
        </div>
        <SearchBar />
      </div>
      <div class="d-flex align-items-center">
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#searchbar"
          aria-controls="searchbar"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick="logout"
        >
          <span class="fas fa-search"></span>
        </button>
      </div>
      <!-- search bar completed-->

      <div class="nav-item dropdown">
        <a class="nav-link p-0" data-toggle="dropdown">
          <div
            class="
              profile-image
              bg-primary
              shadow-inset
              border
              rounded-circle
              p-1
            "
          >
            <img
              src="../../assets/profile-picture-1.jpg"
              class="card-img-top rounded-circle"
              alt="profile image"
            />
          </div>
        </a>
        <ul class="dropdown-menu mt-4">
          <li>
            <a class="dropdown-item">My Profile</a>
          </li>
          <li><a class="dropdown-item">Recent activity</a></li>
          <li><a class="dropdown-item">Verification Apply</a></li>
          <li><a class="dropdown-item">Log out</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "../search/searchBar.vue";
export default {
  name: "Nav",
  components: { SearchBar },
};
</script>

<style>
.profile-image {
  width: 3rem;
  height: 3rem;
}
.dropdown-menu{
  right: 0;
  left: unset;
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
