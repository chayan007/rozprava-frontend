<template>
  <div>
    <div v-if="false">
      <div class="popup" @click="Toggle()">
        <div class="popup-inner" @click="Toggle()">
          <slot />
          <div>
            <div><a href="" class="left">Edit Profile</a></div>
            <div><a href="#" class="left">Settings</a></div>
            <div><a href="" class="left">About Us </a></div>
            <div><a href="" class="left">Terms &amp; Condition</a></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="popup-unauth" @click="Toggle()">
        <div class="popup-inner-unauth" @click="Toggle()">
          <slot />
          <div>
            <div><a href="" class="left">Report</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PopupeMenu",
  props: ["Toggle"],
};
</script>
<style lans="scss" scoped>
.popup {
  position: fixed;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 299;
  background-color: rgba(0, 0, 0, 0.2);
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: -12rem;
  margin-left: auto;
  margin-right: 9%;
  max-width: 100%;
}
.left {
  float: right;
  display: block;
}
@media (max-width: 1000px) {
  .popup-inner {
    margin-top: -21rem;
    margin-right: 2%;
  }
}
.popup-unauth{
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 299;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    max-width: 100%;
}
.popup-inner-unauth{ 
       background: white;
        border-radius: 1rem;
        padding: 1rem;
        margin-top: 8rem;
         margin-left: auto;
        margin-right: 12%;
        height: 2.5rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 6rem;
    }
    @media (max-width: 1000px) {
    .popup-inner-unauth {
      margin-right: 2%;
    }
    }
</style>