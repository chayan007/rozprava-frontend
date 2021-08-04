<template>
  <div id="mainChat">
    <div id="searchDiv">
      <input type="text" placeholder="Search.." name="search2">
      <button type="submit"><i class="fa fa-search"></i></button> 
    </div>
    <ChatList/>
    <div class="row justify-content-center">
            <div class="col-12 col-md-10">
              <div v-for="(chat, index) in chats" :key="index">
                <ChatDisplay 
                  :imageSrc="chat.image"
                  :text="chat.message">
                </ChatDisplay>
    </div>
            </div>
    </div>
  </div>
</template>

<script>
import ChatList from '@/components/chat/ChatList.vue';
import ChatDisplay from '@/components/chat/ChatDisplay.vue';
export default {
  name: "MainChat",
  components: {ChatList, ChatDisplay},
  data() {
    return {
      chats: [{
        image: 'profile-picture-1.jpg',
        message: 'Test Message1',
      },
      {
        image: 'profile-picture-1.jpg',
        message: 'Test Message2',
      },
      {
        image: 'profile-picture-1.jpg',
        message: 'Test Message3',
      }]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
  .row {
    margin-top: 15px;
  }
  #mainChat {
    background: whitesmoke;
    font-family: 'Josefin Sans', sans-serif;
  }
  #searchDiv {
    display: flex;
    padding: 5px 15px 20px;
  }
  input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid transparent;
  float: left;
  width: 80%;
  background: #e0dfdf;
}
button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid transparent;
  cursor: pointer;
}
button:hover {
  background: #0b7dda;
}
</style>