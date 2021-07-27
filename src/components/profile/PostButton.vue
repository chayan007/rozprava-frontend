<template>
    <div class="cant bg-primary shadow-soft" >
      <div class="nowrap">
         <button type="button" class="a1 bg-primary btn btn-primary margin btn-sm"><span class="h4"><strong>Message</strong></span></button> 
       
           <button type="button" class="a2 bg-primary btn btn-primary  btn-sm"><span class="h4"><strong>Follow</strong></span></button> 
            </div>  
    </div>
</template>
<script>
 
  export default {
    name: "PostButton",
    data(){
      return{
        follow:'',
      }
    }
  }
</script>
<style scoped>
.nowrap{
 white-space: nowrap;
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

.btn-primary {
    color: #31344b;
    background-color: #e6e7ee;
    border-color: #e6e7ee;
    box-shadow: none;
}

     
    .cant{
  margin-left: auto;
  margin-right: auto;
  width: 30rem;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
    padding: 0.3rem;
    max-width: 100%;
}
.a1{
    
   float: left;
   margin-left: 2rem;
}
.a2{
    float: right;
    margin-right: 2rem;
}
</style>