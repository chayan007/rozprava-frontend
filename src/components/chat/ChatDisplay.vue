<template>
  <div class="alert alert-secondary chat-shadow" role="alert">
    <div id="chatImageDiv">
      <img class="chatImage" :src="src">
    </div>
    <div class="alert-inner--text chat-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "ChatDisplay",
  props: ["imageSrc", "text"],
  computed: {
    src () {
      return require(`../../assets/${this.imageSrc}`);
    }
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
  .alert {
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    color: #07AF04;
    font-style: normal;
    line-height: 120%;
  }
  .alert-secondary {
    background: #ffffff;
    margin-left: 15px;
    margin-right: 15px;
  }
  .chat-shadow {
    box-shadow: 0px 24px 64px rgba(0,0,0,0.25);
  }
  .chatImage {
    width: 2rem;
    border-radius: 50%;
  }
  .chat-text {
    display: flex;
    align-items: center;
  }
  #chatImageDiv {
    padding-right: 5px;
  }
</style>