<template>
   <div>
      <div class="a5">
      <div class="a3">
        <h3>Chats</h3>
        <button class="a6 plus"><img src="@/assets/plus.png" class="plus" alt=""></button>
      </div>
      <div class="cant bg-primary shadow-soft" >

       <div class="a1 ">
                        <div class="a4 profile-image bg-primary shadow-inset border border-light rounded-circle ml-2 ">
                            <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle " alt="Christopher Avatar" width="100" />
                        </div>
                        <div class="a2"><h5>Raju Kumar</h5></div>
        </div>
        
    </div>
    </div>
   </div>
</template>
<script>
 
  export default {
    name: "Inbox",
    
  }
</script>
<style scoped>
.plus{
    outline: none;
    border: none;
    padding: 0rem 0.1rem;
    background: transparent;
}
.a6{
  margin-right: 0rem;
  margin-left: auto;
}
.a5{
  width: 40rem;
  margin-right: auto;
  margin-left: auto;
}
.a3{
 display: flex;
 margin-bottom: 3rem;
}
.a2{
  margin-top: 1rem;
}
.a1{
  display: flex;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  
}
.cant{
  
  width: 40rem;
 margin-left: auto;
  margin-right: auto;
 
   max-width: 100%;
   border-radius: 1rem;
   padding: 0.5rem;
  margin-bottom: 0%;
}
.a4{
  
  top: 45%;
 
  width: 3.5rem;
  height: 3.5rem;
  padding : 0.15rem;
  margin-right: 0.5rem;
}
@media (max-width: 764px) {
    .a5 {
        width: 25rem;
    }
}
</style>