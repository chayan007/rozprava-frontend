<template>
  <div id="chatHeader">
    <!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In  -->
    <div>
      <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path></svg>
    </div>
    <div>
      <h2>ROZAPRAVA</h2>
    </div>
    <div class="profile-image">
      <img src="../../assets/profile-picture-1.jpg"
       class="card-img-top rounded-circle">
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatHeader",
}
</script>
<style scoped>
  #chatHeader {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    padding: 15px 15px 0px;
    flex-direction: row;
  }
  .profile-image {
    width: 2rem;
  }
</style>