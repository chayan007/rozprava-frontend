<template>
  <div
    class="group-case-inner w-100 row m-0 py-3"
    :class="[myCase ? 'justify-content-end' : '']"
  >
    <div class="case col-lg-7 col-10 p-0">
      <!-- profile -->
      <br v-if="myCase" />
      <div
        v-else
        class="
          case-profile
          px-3
          py-2
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <span class="d-flex justify-content-center align-items-center">
          <img
            class="profile-img rounded-circle"
            src="@/assets/groupDp.png"
            alt=""
          />
          <span class="ml-2 h6 m-0">Tony Stark</span>
        </span>
        <span>2hr ago</span>
      </div>

      <!-- profile -->
      <!-- details -->
      <div
        class="detail-box p-3 detail-left"
        :class="[myCase ? 'right' : 'left']"
      >
        <div @click="openCase = !openCase">
          <h6 class="mb-3"><b>Who is better SRK or Salman</b></h6>
          <p class="mb-1">
            Ironman is Ironman and Captain is Captain also Captain is not
            Ironman and Ironman is not Captain because Ironman is Ironman and
            Captain,Ironman is Ironman and Captain is Captain.
          </p>
          <p><b>Read more</b></p>
        </div>
        <div class="metrics mt-3">
          <div class="like-dislike">
            <span class="mr-3">
              <img
                v-if="myCase"
                class="sm-icon"
                src="@/assets/likeLight.svg"
                alt=""
              />
              <img v-else class="sm-icon" src="@/assets/like.svg" alt="" />
              <span class="metrics-txt ml-1">21</span>
            </span>
            <span class="mr-3">
              <img
                v-if="myCase"
                class="sm-icon"
                src="@/assets/dislikeLight.svg"
                alt=""
              />
              <img
                v-else
                class="sm-icon"
                src="@/assets/dislike.svg"
                alt=""
              />
              <span class="metrics-txt ml-1">31</span>
            </span>
            <b class="metrics-txt">Rebuttals</b>
          </div>
        </div>
        <!-- open case btn -->
        <div
          v-if="openCase"
          @click="openCase = !openCase"
          class="
            open-box
            d-flex
            justify-content-center
            align-items-center
            position-absolute
            w-100
          "
        >
          <router-link to="/case/srk-vs-salman">
            <span :class="[myCase ? 'right-open' : 'left-open']" class="open-btn px-3 py-2 rounded-pill">Open</span>
          </router-link>
        </div>
      </div>
      <!-- details -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupCase",
  props: ["case", "user"],
  data() {
    return {
      openCase: 0,
    };
  },
  computed: {
    is_authenticated() {
      return this.$store.state.authStore.user;
    },
    myCase() {
      if (this.is_authenticated.profile.user.username == this.user) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.profile-img {
  width: 2em;
  height: 2em;
}
.detail-box p {
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.03em;
}
.left {
  background-color: #f5f5f5;
  border-radius: 0 15px 15px 0;
  color: #000;
}
.right {
  background-color: #303030;
  border-radius: 15px 0 0 15px;
  color: #fff;
}
.right h6 {
  color: #fff;
}
.sm-icon {
  width: 1.5em;
}
.metrics-txt {
  font-size: 0.85em;
}
.open-box {
  top: 10%;
  left: 0;
  z-index: 2;
  height: 90%;
}
.open-btn {
  box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.342);
}
.right-open {
  background-color: #fff;
  color: #303030;
}
.left-open {
  background-color: #303030;
  color: #fff;
}
</style>