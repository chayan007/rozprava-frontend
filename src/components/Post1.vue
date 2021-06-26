<template>
    <div class="cant">
        <div class="card bg-primary  ">
          <div class="a1" >
                    <img src="../assets/post_pic.png"  class="image card-img-top rounded-top" alt="Themesberg office">
                    <button type="button " class="aero a2"><span class="a2">&lt;-</span></button>
                    <button type="button" class="a3"> ...</button>
                    <img src="../assets/profile-picture-2.png"  class="a4" alt="Themesberg office">
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
          <div class="border bg-primary shadow-soft border-light">
              
          </div>
        </div>
    </div>
</template>
<script>
 
  export default {
    name: "Post1",
    
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
  top: 60%;
  left: 40%;
  
}
</style>