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
      class="col col-9 m-2 nav-menu-collapse navbar-collapse collapse"
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
        <li
          class="nav-item"
          data-toggle="collapse"
          data-target="#navbar_global"
        >
          <router-link to="/timeline">
            <span
              class="
                nav-link-inner-text nav-link
                w-100
                row
                m-0
                justify-content-between
              "
            >
              <span>Home</span>
              <img class="menu-item-icon pr-2" src="@/assets/home.svg" alt="" />
            </span>
          </router-link>
        </li>
        <li
            class="nav-item"
            data-toggle="collapse"
            data-target="#navbar_global"
        >
          <router-link to="/notification">
            <span
                class="
                nav-link-inner-text nav-link
                w-100
                row
                m-0
                justify-content-between
              "
            >
              <span>Notifications</span>
              <img
                  class="menu-item-icon pr-2"
                  src="@/assets/settings.svg"
                  alt=""
              />
            </span>
          </router-link>
        </li>
        <li
          class="nav-item"
          data-toggle="collapse"
          data-target="#navbar_global"
        >
          <router-link to="/search">
            <span
              class="
                nav-link-inner-text nav-link
                w-100
                row
                m-0
                justify-content-between
              "
            >
              <span>Search</span>
              <img
                class="menu-item-icon pr-2"
                src="@/assets/search.svg"
                alt=""
              />
            </span>
          </router-link>
        </li>
        <li
          class="nav-item"
          data-toggle="collapse"
          data-target="#navbar_global"
        >
          <router-link to="/case-create">
            <span
              class="
                nav-link-inner-text nav-link
                w-100
                row
                m-0
                justify-content-between
              "
            >
              <span>Create</span>
              <img class="menu-item-icon pr-2" src="@/assets/add.svg" alt="" />
            </span>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link" data-toggle="dropdown">
            <span
              class="nav-link-inner-text w-100 row m-0 justify-content-between"
            >
              <span>Chats</span>
              <img
                class="menu-item-icon pr-2"
                src="@/assets/chats-menu.svg"
                alt=""
              />
            </span>
          </a>
          <ul class="dropdown-menu">
            <li data-toggle="collapse" data-target="#navbar_global">
              <router-link to="/inbox">
                <a class="dropdown-item">Inbox</a>
              </router-link>
            </li>
            <li data-toggle="collapse" data-target="#navbar_global">
              <router-link to="/my-groups">
                <a class="dropdown-item">Groups</a>
              </router-link>
            </li>
          </ul>
        </li>

        <li
          class="nav-item"
          data-toggle="collapse"
          data-target="#navbar_global"
        >
          <router-link to="/settings">
            <span
              class="
                nav-link-inner-text nav-link
                w-100
                row
                m-0
                justify-content-between
              "
            >
              <span>Settings</span>
              <img
                class="menu-item-icon pr-2"
                src="@/assets/settings.svg"
                alt=""
              />
            </span>
          </router-link>
        </li>
        <li
            class="nav-item"
            data-toggle="collapse"
            data-target="#navbar_global"
        >
          <router-link to="/logout">
            <span
                class="
                nav-link-inner-text nav-link
                w-100
                row
                m-0
                justify-content-between
              "
            >
              <span>Logout</span>
              <img
                  class="menu-item-icon pr-2"
                  src="@/assets/settings.svg"
                  alt=""
              />
            </span>
          </router-link>
        </li>
        <br /><br />
        <li
          class="nav-item"
          data-toggle="collapse"
          data-target="#navbar_global"
        >
          <router-link to="/aboutus">
            <h6 class="m-0 nav-link">About us</h6>
          </router-link>
        </li>
        <li
          class="nav-item"
          data-toggle="collapse"
          data-target="#navbar_global"
        >
          <router-link to="/report">
            <h6 class="m-0 nav-link">Report</h6>
          </router-link>
        </li>
        <li
          class="nav-item"
          data-toggle="collapse"
          data-target="#navbar_global"
        >
          <router-link to="/termsandconditions">
            <h6 class="m-0 nav-link">Terms and Conditions</h6>
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

    <!-- nav brand -->
    <h3 class="navbar-brand-name m-0">ROZPRAVA</h3>

    <!-- nav profile -->
    <div class="profile-nav nav-item dropdown">
      <a class="profile-nav nav-link p-0" data-toggle="dropdown">
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
      <ul class="nav-profile-dropdown dropdown-menu mt-4">
        <li v-if="is_authenticated && is_authenticated.profile">
          <router-link
            :to="'/profile/' + is_authenticated.profile.user.username"
          >
            <a class="dropdown-item">My Profile</a>
          </router-link>
        </li>
        <li>
          <router-link to="/activity">
            <a class="dropdown-item">Recent activity</a>
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            <a class="dropdown-item">Verification Apply</a>
          </router-link>
        </li>
        <li>
          <router-link to="/logout">
            <a class="dropdown-item">Log out</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
  },
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
.nav-menu-collapse {
  box-shadow: 3px 3px 20px -2px rgba(51, 51, 51, 0.534);
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
