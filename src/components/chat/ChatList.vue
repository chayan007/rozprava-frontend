<template>
  <div id="header">
    <div>
      <h3>Chats</h3>
    </div>
    <div id="chatImage">
      <img src="../../assets/Add.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatList",
}
</script>

<style scoped>
h3 {
  font-weight: bold;
}
  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 15px;
  }
  #chatImage {
    margin-top: -6px;
  }
</style>