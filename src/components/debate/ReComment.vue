<template>
  <div
    class="row m-0 mb-3"
    :class="[!inclination ? 'justify-content-end' : 'justify-content-start']"
  >
    <div class="col col-10 p-2" :class="[!inclination ? 'aga-com' : 'for-com']">
      <!-- profile -->
      <div class="com-profile-box row align-items-center m-0">
        <img class="com-pro-img rounded-circle" :src="profilePic" />
        <small class="ml-2 h6 m-0">{{ profile.full_name }}</small>
      </div>

      <!-- body -->
      <div class="com-body mt-2 pl-1">
        <small>
          {{ comment }}
        </small>
      </div>

      <hr class="mb-0 mt-2" />
      <!-- reactions -->
      <div class="com-react-box row justify-content-between m-0 p-1">
        <span class="row m-0 align-items-center">
          <span class="row m-0 align-items-center">
            <img
              class="case-react-icons mr-1"
              src="@/assets/case-like.svg"
              alt=""
            />
            <small class="react-txt m-0 mr-3 h6">58</small>
          </span>
          <span class="row m-0 align-items-center">
            <img
              class="case-react-icons mr-1"
              src="@/assets/case-dislike.svg"
              alt=""
            />
            <small class="react-txt m-0 mr-3 h6">12</small>
          </span>
        </span>
        <span class="case-view-box row m-0 align-items-center">
          <small class="react-txt h6 m-0 pl-1">{{ createdAt }}</small>
        </span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Against",
  props: ["newdebate", "createdAt"],
  data() {
    return {
      debate: this.newdebate,
      cAgainst: false,
    };
  },
  computed: {
    comment: function () {
      if (this.newdebate) {
        return this.newdebate.comment;
      } else {
        return "";
      }
    },
    inclination: function () {
      if (this.newdebate) {
        return this.newdebate.inclination;
      } else {
        return "";
      }
    },
    profile: function () {
      if (this.newdebate) {
        return this.newdebate.profile.user;
      } else {
        return "";
      }
    },
    profilePic: function () {
      if (this.newdebate) {
        return this.newdebate.profile.display_pic;
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.for-com {
  background-color: #e7ffe5;
  border-radius: 15px;
}
.aga-com {
  background-color: #ffebe5;
  border-radius: 15px;
}
.com-pro-img {
  width: 2.2em;
  height: 2.2em;
}
.com-body small {
  font-size: 0.9em;
  letter-spacing: 1px;
}
.case-react-icons {
  width: 1.2em;
}
.react-txt {
  font-size: 0.8em;
}
</style>