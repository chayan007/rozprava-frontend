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
              <li>
                <a class="dropdown-item"
                  ><router-link to="/settings">Settings</router-link></a
                >
              </li>
              <li><a class="dropdown-item">About us</a></li>
              <li><a class="dropdown-item">Report</a></li>
              <li><a class="dropdown-item">Terms and Conditions</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown">
              <span class="nav-link-inner-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="32px"
                  height="32px"
                  viewBox="0 0 338.34 338.36"
                  style="overflow:visible;enable-background:new 0 0 338.34 338.36;"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g>
                    <path
                      d="M186.94,47.5c-15.39,59.99,38.22,118.57,104.39,103.59c1.32,8.66,3.22,17.22,3.83,25.87   c4.58,64.22-32.78,123.67-92.7,146.43c-40.57,15.41-80.58,12.72-119.28-7.04c-2.9-1.48-5.28-1.78-8.41-0.72   c-22.18,7.53-44.4,14.91-66.68,22.13c-2.25,0.73-5.91,0.98-7.19-0.29c-1.27-1.25-1.01-4.93-0.29-7.18   C7.82,308,15.36,285.81,22.54,263.5c0.75-2.35,0.63-5.68-0.48-7.82C-23.07,169.09,27.4,63.8,123.2,45.28   C144.51,41.16,165.84,41.86,186.94,47.5z"
                    ></path>
                    <path
                      d="M269.96,136.85c-37.68,0.13-68.31-30.62-68.45-68.73c-0.14-36.83,30.78-68,67.58-68.12c38.05-0.13,69.14,30.41,69.25,67.99   C338.44,105.85,307.79,136.72,269.96,136.85z M261.4,55.49c0,7.31-0.01,14.63,0,21.94c0.01,7.27,0.65,7.89,8.03,7.91   c1.16,0,2.33-0.02,3.49-0.01c3.68,0.05,5.54-1.7,5.53-5.44c-0.02-16.13-0.01-32.25-0.01-48.38c0-3.88-1.82-5.87-5.83-5.67   c-1.66,0.08-3.33,0.1-4.99,0c-4.47-0.29-6.35,1.75-6.26,6.21C261.5,39.86,261.4,47.67,261.4,55.49z M278.39,102.57   c0-4.55-4.17-8.56-8.75-8.43c-4.41,0.13-8.22,4.06-8.18,8.44c0.03,4.45,3.75,8.25,8.2,8.38   C274.24,111.08,278.39,107.1,278.39,102.57z"
                    ></path>
                  </g>
                </svg>
              </span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Chats</a></li>
              <li><a class="dropdown-item">Groups</a></li>
              <li><a class="dropdown-item">Notifications</a></li>
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
              <li><a class="dropdown-item"><router-link to="/case-create">Create</router-link></a></li>
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
          aria-expanded="true"
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
      <!--search bar button invoking the search page-->
      <div class="navbar-collapse collapse" id="searchbar" style="">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-close">
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
      <SearchBar/>
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
        <a class="nav-link" data-toggle="dropdown">
          <div
            class="profile-image bg-primary shadow-inset border rounded-circle p-1"
          >
            <img
              src="../../assets/profile-picture-1.jpg"
              class="card-img-top rounded-circle"
              alt="profile image"
            />
          </div>
        </a>
        <ul class="dropdown-menu">
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
import SearchBar from '../search/searchBar.vue'
export default {
  name: "Nav",
  components: {SearchBar},
};
</script>

<style>
.profile-image {
  width: 3rem;
  height: 3rem;
}
</style>
