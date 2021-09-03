<template>
  <section class="chat-sec w-100">
    <!-- chat profile -->
    <div class="chat-pro-nav w-100 nav p-2">
      <img class="back-arrow m-1" src="@/assets/back.svg" alt="" />
      <a href="">
        <img
          class="profile-image-chat rounded-circle ml-2"
          src="@/assets/profile-picture-1.jpg"
          alt=""
        />
        <p class="list-inline-item m-0 ml-2">Shawn Carter</p>
      </a>
    </div>

    <!-- chat box -->
    <div class="chats-box w-100">
      <div class="chat-scroll mt-6 m-0">
        <!-- chat rec -->
        <div
          class="
            chat-msg-box chat-msg-rec-box
            w-100rowm-0
            mb-3
            justify-content-start
          "
        >
          <div
            class="chat-msg chat-msg-recive p-2 col col-lg-6 col-md-6 col-10"
          >
            <p class="m-0">hello hej e ejhee ehgeh</p>
            <p class="chat-time m-0 text-right pr-1">2:39</p>
          </div>
        </div>
        <!-- chat send -->
        <div
          class="
            chat-msg-box chat-msg-send-box
            w-100
            row
            m-0
            mb-3
            justify-content-end
          "
        >
          <div class="chat-msg chat-msg-send p-2 col col-lg-6 col-md-6 col-10">
            <p class="m-0">
              hello hej e ejhee ehgeh e ejeh e ejeh ehe e ehjej eje ej eje heje
              ejehe e
            </p>
            <p class="chat-time m-0 text-right pr-1">2:39</p>
          </div>
        </div>
        <!-- chat rec -->
        <div
          class="
            chat-msg-box chat-msg-rec-box
            w-100rowm-0
            mb-3
            justify-content-start
          "
        >
          <div
            class="chat-msg chat-msg-recive p-2 col col-lg-6 col-md-6 col-10"
          >
            <p class="m-0">
              hello hej e ejhee ehgeh e ejeh e ejeh ehe e ehjej eje ej eje heje
              ejehe e
            </p>
            <p class="chat-time m-0 text-right pr-1">2:39</p>
          </div>
        </div>
        
      </div>
    </div>

    <!-- chat input -->
    <div class="chat-input-box p-2 w-100 row m-0">
      <div class="chat-input-outer col col-11 p-0 pr-1">
        <div class="chat-input p-1 pl-2 col row m-0">
          <div
            class="chat-txt col col-12 row m-0 align-items-center"
            placeholder="Type here..."
            contenteditable="true"
          ></div>
        </div>
      </div>

      <div class="send-btn-box col col-1 p-0">
        <img
          class="send-btn mt-1 mb-1 text-right"
          src="@/assets/send.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Chat",
};
</script>

<style scoped>
.chat-sec {
  position: absolute;
  top: 0vh;
  height: 100vh;
  background-color: rgb(231, 231, 231);
}
.chat-pro-nav {
  background-color: white;
  position: fixed;
  z-index: 20;
}
.chat-pro-nav a {
  display: inline-flex;
  align-items: center;
}
.back-arrow {
  width: 1.2em;
}
.profile-image-chat {
  width: 2.2em;
}
/* chats-box */
.chats-box {
  position: fixed;
  top: 0;
  height: 100vh;
  overflow-y: scroll;
  padding: 0.5em;
}
.chat-msg {
  border-radius: 15px;
}
.chat-time {
  font-size: 0.79em;
}
.chat-msg-recive {
  background-color: white;
}
.chat-msg-send {
  background-color: #5458f7;
  color: white;
}
/* Chat input */
.chat-input-box {
  position: fixed;
  bottom: 0;
  z-index: 50;
  background-color: white;
}
.chat-input-outer {
  display: inline-flex;
  align-items: stretch;
}
.chat-input {
  background-color: rgb(231, 231, 231);
  border-radius: 25px;
}
.chat-txt {
  border: none;
  text-decoration: none;
}
[contenteditable] {
  outline: 0px solid transparent;
}
[placeholder]:empty::before {
  content: attr(placeholder);
  color: #555;
}
[placeholder]:empty:focus::before {
  content: "";
}
.send-btn-box {
  display: flex;
}
.send-btn {
  width: 2em;
  padding-left: 2px;
}
</style>