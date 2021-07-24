<template>
    <div class="cant bg-primary shadow-soft">
        <button type="button" class="a1 btn btn-pill btn-primary">
            <img src="../assets/Edit.png" alt="sign in" width="30">
          </button>
          <button type="button" class="btn btn-pill btn-primary">
            <img src="../assets/Add.png" alt="sign in" width="33">
          </button>
          <button type="button" class="a2 btn btn-pill btn-primary">
            <img src="../assets/upward-arrow.png" alt="sign in" width="33">
          </button>
    </div>
</template>
<script>
 
  export default {
    name: "PostButton",
    
  }
</script>
<style scoped>
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
    padding: 0rem 0rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 50%;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
} 
    .cant{
  margin-left: auto;
  margin-right: auto;
  width: 30rem;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
    padding: 0.3rem;
}
.a1{
    float: left;
    margin-left: 1rem;
}
.a2{
    float: right;
    margin-right: 1rem;
}
</style>