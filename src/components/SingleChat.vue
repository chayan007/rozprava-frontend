<template>
    <div class="cant bg-primary shadow-soft" >

       <div class="a1 shadow-soft">
       <div class="a4 profile-image bg-primary shadow-inset border border-light rounded-circle ml-2 ">
                            <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle " alt="Christopher Avatar" width="100" />
                        </div>
                        <div class="a2"><h5>Raju Kumar</h5></div>
        </div>
        <div class="a3">
          <input type="text" placeholder="Enter Massage" class="a5">
        </div>
    </div>
</template>
<script>
 
  export default {
    name: "SingleChat",
    
  }
</script>
<style scoped>
.a5{
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.3rem 1.3rem;
  width: 80%;
}
.a3{
  margin-top: 24.5rem;
  
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
   height: 30rem;
  margin-bottom: 0%;
}
.a4{
  
  top: 45%;
 
  width: 3rem;
  height: 3rem;
  padding : 0.15rem;
  
}
</style>