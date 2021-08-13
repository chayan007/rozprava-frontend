<template>
    <div class="a1">
        <!-- <div class="demo">hello</div> -->
       
       <!-- <div class="chat-detail ">
           <div class="chat-img profile-image bg-primary shadow-inset border border-light rounded-circle ml-2 ">
                <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle " alt="User image" width="100" />
            </div>
            <div class="friend-name"><h5>Raju Kumar</h5></div>
        </div> -->
            <!-- <div class="text">
                 <input type="text"  class="a3" placeholder="Enter Message" valign="bottom">
                <button type="button" class="microphone"><img src="@/assets/microphone.png" class="microphone" alt="Microphone" width=""></button>
                <button type="button" class="microphone"><img src="@/assets/attach.png" class="microphone" alt="Attach pic" width=""></button>
            </div>
           <div>
                <button type="button" class="microphone"><img src="@/assets/send.png" class="microphone" alt="Send Pic" width=""></button>
           </div> -->
        
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium possimus, cum inventore provident enim iusto ab eaque adipisci nobis sunt deleniti numquam, minima quasi sed, eveniet eum voluptates laboriosam?
        Veniam modi, quos dignissimos illum ipsum rem itaque dolore cum fugiat delectus, corporis consequuntur eveniet culpa sit ipsam! Ut nam porro nihil voluptate dolorem cupiditate ipsam voluptates doloremque officiis eaque!
    </div>
    </div>
</template>
<script>
  export default {
    name: "Chat",
  }
</script>
<style scoped>
.friend-name{
    margin-top: 1rem;
}
.chat-detail{
  display: flex;
}
.chat-img{
  top: 45%;
  width: 3.5rem;
  height: 3.5rem;
  padding : 0.15rem;
  margin-right: 0.5rem;
}
.wrap{
    overflow-wrap: break-word;
    overflow-y: auto;
}
.wrap::-webkit-scrollbar{
    text-decoration: none;
}
.text{
    background-color: white;
    border-radius: 0.5rem;
   
}

.a1{
    width: 20rem;
    margin-right: auto;
    margin-left: auto;
}
</style>