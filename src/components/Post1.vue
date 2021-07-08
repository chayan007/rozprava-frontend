<template >
    <div class="cant" >
        <div class="card bg-primary  ">
          <div class="a1" >
                   
                    <img src="../assets/post_pic.png"  class="image card-img-top rounded-top" alt="Themesberg office">
                    <button type="button " class="aero a2"><span class="a2"><img src="../assets/Back.png" alt="sign in" width="18"></span></button>
                    <button type="button" class="a3" @click="()=>Toggle('buttonTrigger')"> ...</button>
                    <ProfileMenu v-if="popupTriggers.buttonTrigger" :Toggle="()=>Toggle('buttonTrigger')" class="popup" >
                      
                    </ProfileMenu>
                    <transition name="fade" appear>
                      <div @click="()=>ToggleClose('buttonTrigger')"></div>
                    </transition>
                    <!-- <img src="../assets/black-rose.jpg"  class="a4" alt="Themesberg office"> -->
                    <div class="a4 profile-image bg-primary shadow-inset border border-light rounded-circle ">
                            <img src="../assets/black-rose.jpg" class="card-img-top rounded-circle" alt="Christopher Avatar" width="100">
                        </div>
                    </div>
                   
                    <div class="card-body">
                        
                        <h2 class=" card-title mt-3">Tyler, The Creater</h2>
                        <div class="nowrap">
                          <button type="button" class="btn btn-primary margin btn-sm"><span class="h4"><strong>142</strong></span><br>posts</button>
                          <button type="button" class="btn btn-primary margin btn-sm"><span class="h4"><strong>7.4</strong></span><br>Followers</button>
                          <button type="button" class="btn btn-primary margin btn-sm"><span class="h4"><strong>117</strong></span><br>Following</button>
                        </div>

                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        
                    </div>
                    <div>
                      <div class="profile-image bg-primary shadow-inset border border-light rounded-circle ">
                            <img src="../assets/black-rose.jpg" class="card-img-top rounded-circle" alt="Christopher Avatar" width="100">
                        </div>
                    </div>
                    
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab excepturi doloribus labore error praesentium nostrum beatae quibusdam enim quis? Voluptatibus, qui molestiae. Quaerat dicta eum, similique suscipit placeat optio fuga qui quas impedit vero id, itaque commodi, reprehenderit voluptatem saepe magnam aperiam. Id, veritatis. Doloremque excepturi consequuntur nulla inventore error sapiente in? Ea, delectus suscipit a possimus obcaecati consequatur assumenda at exercitationem repellat quos deserunt, nemo, minus necessitatibus illo neque hic eum vel dolores soluta optio. Quam incidunt fugit et aut labore quisquam sapiente laboriosam animi assumenda optio sunt officia reiciendis doloremque corrupti in facilis voluptatem, blanditiis neque, illo quis harum nesciunt magnam ullam aliquam. Molestiae consequatur, placeat inventore excepturi explicabo quos velit, atque veniam modi odit perferendis deserunt maiores veritatis pariatur sunt optio maxime nesciunt dolore ducimus sapiente! Perspiciatis, deleniti, unde quo a, explicabo doloremque corrupti harum voluptates eius vel sed error aut odit! Iure voluptates ab odit earum natus praesentium animi officia alias itaque dolor, dolore ducimus asperiores accusamus? Vel sint quos ipsa suscipit molestiae delectus commodi aliquid dolore quas totam architecto nam nihil in, blanditiis perspiciatis impedit quo itaque fugit, exercitationem, omnis iure praesentium. Praesentium, officiis autem. Culpa, libero natus? Vero, neque labore tempora quam quis expedita.
          </div>
        </div>
    </div>
</template>
<script>
 import ProfileMenu from "@/components/ProfileMenu.vue"
 import { ref } from "vue";
  export default {
    name: "Post1",
    components: { ProfileMenu },
    
    data () {
       const user = JSON.parse(localStorage.getItem('user'));
      return {
       username:user.profile.user.username,
      }
    },
    beforeMount() {
    this.fun();
  },
      methods:{
        async fun(){
           const user = JSON.parse(localStorage.getItem('user'));
         let un = user.profile.user.username;
        console.log(un);
       console.log("un");
        document.getElementById('yoyo').innerHTML = 'un';
        }
       
      },
    setup(){
      const user = JSON.parse(localStorage.getItem('user'));
     
      const popupTriggers=ref({
        buttonTrigger:false,
        timedTrigger:false
      });
      const Toggle=(trigger)=>{
        popupTriggers.value[trigger]=!popupTriggers.value[trigger]
      }
      const ToggleClose=(trigger)=>{
        popupTriggers.value[trigger]=!popupTriggers.value[trigger]
      }
      return{
        popupTriggers,
        Toggle,
        ToggleClose,
        user,
       /*ProfilePicture:user.ProfilePicture,
       Followers:user.Followers,
       Following:user.Following,*/
      }
    }
  }
  
</script>
<style scoped>
.image{
  height: 15rem;
}
.cant{
  margin-left: auto;
  margin-right: auto;
  width: 30rem;
  
}
.btn {
    display: inline-block;
    font-weight: 400;
    color: #44476A;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 0.0625rem solid transparent;
    padding: 0rem 0.95rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.55rem;
}
.margin{
  margin-left: 2rem;
  margin-right: 2rem;
  white-space: nowrap !important;

}
.btn-primary {
    color: #31344b;
    background-color: #e6e7ee;
    border-color: #e6e7ee;
    box-shadow: none;
}
.nowrap{
  white-space: nowrap;
  
  /* width: 5rem; */
}
.a1{
  position: relative;
  
}
.a1 .aero{
  position: absolute;
  top: 10%;
  left: 4%;
  
}

.a2{
  background: transparent;
  color: white;
  border: none;
  font-size: 1.5rem;
}
.a1 .a3{
  position: absolute;
  top:0%;
  left: 85%;
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
}
.a1 .a4{
  position: absolute;
  top: 48%;
  left: 38%;
  width: 8rem;
  height: 8rem;
  padding : 0.15rem;
}

</style>