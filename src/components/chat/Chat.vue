<template>
    <div class="a1 shadow-soft mt-5 ">
        <div class="chat-detail shadow-soft">
           <div class="chat-img profile-image bg-primary shadow-inset border border-light rounded-circle ml-2 ">
                <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle " alt="User image" width="100" />
            </div>
            <div class="friend-name"><h5>Raju Kumar</h5></div>
        </div>
        <div class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo nesciunt, maxime ducimus repudiandae nulla aspernatur. Officia, explicabo velit nesciunt iure itaque recusandae laudantium, animi libero sed, quasi obcaecati neque!
            Aperiam temporibus sint facere quia non commodi repellendus nesciunt accusantium aspernatur ex. Qui id officiis, voluptate enim nobis quibusdam modi nemo quas! Sunt odio possimus dolorem perferendis aperiam ratione quia!
            Quos quisquam rem, unde omnis numquam accusamus ullam labore eveniet natus eligendi ea vel perspiciatis! Aspernatur laudantium sequi repellendus voluptatum. Voluptate totam itaque unde possimus asperiores alias odio cumque tempora!
            Cum expedita quaerat placeat praesentium dolorum exercitationem cupiditate commodi rerum necessitatibus similique quidem illo tempora accusamus dicta, delectus aliquam. Cum magnam consequuntur itaque vero maxime, sapiente obcaecati quis enim unde?
            Placeat obcaecati in ab nobis reiciendis deserunt assumenda! Magnam facere ea alias molestiae ex quia quas nobis aspernatur, quidem minima, necessitatibus dolores perspiciatis. Necessitatibus alias provident tenetur quis corrupti odit.
            Neque asperiores vel dolores, commodi non repellat aspernatur porro, ex quo illum perferendis harum quos dicta deserunt culpa veniam est debitis? Reiciendis corporis perspiciatis rerum architecto numquam fuga libero hic.
            Explicabo esse veritatis sequi, error illo incidunt sint deserunt similique fugiat, quia maiores repudiandae. Tempore temporibus est iusto atque quod fuga praesentium nisi totam autem amet, et animi fugiat qui.
            Quibusdam cumque officia aliquid at ab laudantium laboriosam adipisci et ea quam, nam animi sit doloremque repellat quis nisi fugit, aspernatur veniam aliquam magnam, nesciunt ipsa! Ullam reprehenderit voluptates autem!
            Placeat quidem ducimus quae facilis perferendis a quo omnis sunt architecto ab sit commodi soluta ipsam blanditiis excepturi quisquam eius deleniti maiores nulla in, natus inventore cumque culpa quaerat! Aperiam?
            Ad nemo obcaecati numquam vitae vero odio, quos vel quibusdam animi laborum aut inventore nesciunt quasi. Saepe omnis officia necessitatibus. Dolorum, laboriosam. Recusandae nihil vel incidunt distinctio sint, deserunt corporis.
        </div>
        <div class="a2">
            <div class="text">
                 <input type="text"  class="a3" placeholder="Enter Message" valign="bottom">
                <button type="button" class="microphone"><img src="@/assets/microphone.png" class="microphone" alt="Microphone" width=""></button>
                <button type="button" class="microphone"><img src="@/assets/attach.png" class="microphone" alt="Attach pic" width=""></button>
            </div>
           <div>
                <button type="button" class="microphone"><img src="@/assets/send.png" class="microphone" alt="Send Pic" width=""></button>
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
.friend-name{
     margin-top: 1rem;
}
.chat-detail{
  display: flex;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
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
    margin-left: 1rem;
}
.microphone{
    outline: none;
    border: none;
    padding: 0rem 0.1rem;
    background: transparent;
}
.a2{
    margin-top: auto;
    margin-bottom: 1rem;
    display: flex;
    background-color: yellow;
}
.a1{
        width: 25rem;
        margin-left: auto;
        margin-right: auto;
        height: 30rem;
        border-radius: 1rem;
       display: flex;
       flex-direction: column;
    }
    .a3{
        margin-left: 0rem;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        padding: 0.3rem 0.5rem;
    }
</style>