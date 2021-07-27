<template>
    <div class="cant mt-5" >
        <div class="card bg-primary  ">
          <div class="a1" >
                    <img src="@/assets/post_pic.png"  class="image card-img-top rounded-top" alt="Themesberg office">
                    <button type="button " class="aero a2"><span class="a2"><img src="@/assets/Back.png" alt="sign in" width="18"></span></button>
                    <button type="button" class="a3" @click="()=>Toggle('buttonTrigger')"> ...</button>
                   
                    <PopupMenu v-if="popupTriggers.buttonTrigger" :Toggle="()=>Toggle('buttonTrigger')" class="popup" >
                      
                    </PopupMenu>
                   <div class="middle">
                      <div class="a4 profile-image bg-primary shadow-inset border border-light rounded-circle ">
                            <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle" alt="Profile Pic" width="200" />
                        </div>
                   </div>
                    </div>
                        <h2 class=" card-title mt-3">{{user.profile.user.full_name}}</h2>
                        <div class="nowrap">
                          
                          <div class="c3"><span class="h4"><strong>{{user.profile.metrics.posts}}</strong></span><br>posts</div>
                          <div class="c2"><span class="h4"><strong>{{user.profile.metrics.followers}}</strong></span><br>Followers</div>
                          <div class="c1"><span class="h4"><strong>{{user.profile.metrics.following}}</strong></span><br>Following</div>
                        </div> 
         
          <div class="bio">
            <div>
              {{user.profile.bio}}
            </div>
          </div>
        </div>
    </div>
</template>
<script>
 
 import PopupMenu from "@/components/profile/PopupMenu.vue"
 import { ref } from "vue";
  export default {
    name: "Profile",
    components: { PopupMenu , },
    
    data () {
      
      return {
       user: null,
       username:'',
      }
    },
   
    setup(){
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
        
      }
    },
    created(){
        this.declareUser();
      },
     

    methods:{
      handleUser(){
        //const routePath = this.$route.path;
         this.username=this.$route.params.username;
        
      },
      declareUser(){
           this.user = JSON.parse(localStorage.getItem('user'));
           console.log(this.user.profile.user.username);
        }
    },
    
    }
  
</script>
<style scoped>
.bio{
  width: 30rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  margin-top: 1.5rem;
}
.image{
  max-height: 25rem;
 
}
.c1{
  margin-left: auto;
  padding: 0rem 1rem;
  order: 2;
}
.c2{
  margin-left: auto;
  padding-left: 1rem;
  order: 2;
}
.c3{
  padding: 0rem 1rem;
}
.cant{
  
  width: 65rem;
 margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
   max-width: 100%;

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
  display: flex;
  width: 30rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
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
  top:5%;
  left: 90%;
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
}
 .a4{
  
  top: 45%;
  margin-right: auto;
  margin-left:auto ;
  width: 14rem;
  height: 14rem;
  padding : 0.15rem;
  
}
.middle{
  
  position: absolute;
  
  top: 12rem;
  width: 100%;
  
}
@media (max-width: 700px) {
    .space {
     
        margin-right: 4%;
        margin-left: 4%;
    }
    }
</style>