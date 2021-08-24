<template>
    <div class="a1">
      <div class="chat-detail bg-primary shadow-soft">
        <div>
          <button type="button" class="a4"><img src="@/assets/chat2.png" class="back" alt="Microphone" width="25"></button>
        </div>
        <div class="chat-img profile-image bg-primary shadow-inset border border-light rounded-circle  ml-1">
          <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle " alt="User image" width="100" />
        </div>
        <div class="friend-name"><h5>Raju Kumar</h5></div>
      </div>
      <div class="scroll">
        <div class="bubble">
          <div class="send">
            <div class="massage">
              ram
            </div>
            <div class="time-tag">
              <span class="time">2PM</span>
            </div>
          </div>
        </div>
        <div class="bubble">
          <div class="receive">
            <div class="massage">
              ram is going
            </div>
            <div class="time-tag">
              <span class="time">2PM</span>
            </div>
          </div>
        </div>
        <div class="bubble">
          <div class="receive">
            <div class="massage">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima libero ex eaque, odio omnis officiis natus iste qui vel, impedit veritatis nesciunt obcaecati accusamus iure? Asperiores aperiam beatae nesciunt!
              Omnis placeat a illum itaque iste veniam facere. Vitae, quidem suscipit dolorem iure provident necessitatibus assumenda dolorum alias cumque recusandae quod iste corrupti nisi impedit, sequi perferendis et amet quo.
            </div>
            <div class="time-tag">
              <span class="time">2PM</span>
            </div>
          </div>
        </div>
      </div>
      <div class="a2">
        <div class="a5">
          <input type="text"  class="a3" placeholder="Enter Message" valign="bottom">
        </div>
        <div class="a6">
          <button type="button" class="a4"><img src="@/assets/attachment1.png" class="microphone" alt="Attach pic" width="25"></button>
          <button type="button" class="a4"><img src="@/assets/send1.png" class="microphone" alt="Send Pic" width="25"></button>
        </div>
      </div>
    </div>
</template>
<script>

  export default {
    name: "Chat",
  }
</script>
<style scoped>
.bubble{
  display: flex;
  flex-direction: column;
}
.time{
  font-size: 10pt;
  opacity: 0.7;
}
.time-tag{
  margin-left: auto;
  margin-right: 0rem;
  display: inline-block;
}
.massage{
  padding: 1rem 1rem 0rem 1rem;
}
.back{
  margin-top: 0.5rem;
  background: transparent;
}
.scroll{
  overflow-y: auto;
}
.scroll::-webkit-scrollbar{
  text-decoration: none;
}
.send-box{
  padding: 1rem;
}
.send{
  max-width: 70%;
  border-radius: 0.5rem;
  background-color: rgb(167, 245, 167);
  margin-right: 0%;
  margin-left: auto;
  margin-bottom: 0.5rem;
  display: inline-flex;
  flex-direction: column;
}
.receive{
  max-width: 70%;
  border-radius: 0.5rem;
  background-color: white;
  margin-left: 2%;
  margin-right: auto;
  margin-bottom: 0.5rem;
  display: inline-flex;
  flex-direction: column;
}
.a6{
  white-space: nowrap;
  margin-right: 1rem !important;
}
.a5{
  width: 100%;
}
.a4{
  border: none;
  background: none;
}
.a3{
  outline: none;
  border: none;
  border-radius: 1rem;
  background-color: rgb(215, 247, 247);
  padding: 0.3rem 1rem;
  margin-left: 0rem;
  width: 100%;
}
.friend-name{
  margin-top: 1rem;
  margin-left: 1rem;
}
.chat-detail{
  display: flex;
  z-index: 200;
}
.a2{
  background-color: white;
  width: 100%;
  margin-top: auto;
  margin-bottom: 0rem;
  padding: 0.3rem;
  display: flex;
}
.a1{
  width: 50%;
  margin-left: 25%;
  margin-right: auto;
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0rem;
  top: 6.2rem;
}
@media (max-width: 700px) {
  .a1 {
    width: 100%;
    top: 6rem;
    margin-left: 0%;
  }
}
@media (max-width: 700px) {
  .send{
    max-width: 80%;
  }
  .receive{
    max-width: 80%;
  }
}
</style>