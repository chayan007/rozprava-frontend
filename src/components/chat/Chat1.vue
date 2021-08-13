<template>
    <div class="a1">
      <div class="chat-detail bg-primary shadow-soft">
           <div class="chat-img profile-image bg-primary shadow-inset border border-light rounded-circle ml-2 ">
                <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle " alt="User image" width="100" />
            </div>
            <div class="friend-name"><h5>Raju Kumar</h5></div>
      </div>
      <div class="scroll">
        <div class="">
          <div class="send">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus, fuga adipisci necessitatibus quisquam reprehenderit beatae nulla odit ratione facilis similique facere id rem dolorem omnis unde vero nesciunt eaque?
          </div>
        </div>
        <div>
          <div class="receive">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, perspiciatis reprehenderit! Nemo, ipsum vero labore sapiente totam reprehenderit delectus ut quas soluta, voluptatem, illo quod at. Commodi illum totam voluptates.
          </div>
          <div class="receive">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum odio saepe pariatur perferendis aliquid hic recusandae veniam architecto deleniti ratione, in tenetur beatae amet eaque fugiat blanditiis consectetur voluptas.
            Est sint laborum eum molestiae praesentium! Ullam aliquam hic assumenda magnam officia provident consectetur, commodi porro fugiat? Earum est, eos dolore aperiam dicta, provident porro ea similique eum facere pariatur.
          </div>
        </div>
      </div>
      <div class="a2">
        <div class="a5">
          <input type="text"  class="a3" placeholder="Enter Message" valign="bottom">
        </div>
        <div class="a6">
           <button type="button" class="a4"><img src="@/assets/microphone.png" class="microphone" alt="Microphone" width=""></button>
          <button type="button" class="a4"><img src="@/assets/attach.png" class="microphone" alt="Attach pic" width=""></button>
          <button type="button" class="a4"><img src="@/assets/send.png" class="microphone" alt="Send Pic" width=""></button>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: "Chat1",
  }
</script>
<style scoped>
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
  padding: 1rem;
}
.receive{
  max-width: 70%;
  border-radius: 0.5rem;
  background-color: white;
  margin-left: 2%;
  margin-bottom: 0.5rem;
  padding: 1rem;
}
.a6{
  white-space: nowrap;
  margin-right: 2rem !important;
}
.a5{
  width: 100%;
}
.a4{
  border: none;
}
.a3{
  outline: none;
  border: none;
  border-radius: 0.5rem;
  background-color: rgb(215, 247, 247);
  padding: 0.3rem 1rem;
  
  margin-left: 0rem;
  width: 100%;
}
.friend-name{
    margin-top: 1rem;
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