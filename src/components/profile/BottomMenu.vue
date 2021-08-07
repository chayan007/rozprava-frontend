<template>
  <div class="bottom-box">
    <div  v-if="is_authenticated_user">
      <div class="cant bg-primary shadow-soft">
        <button type="button" class="a1 btn btn-pill btn-primary">
          <img src="@/assets/Edit.png" alt="Edit icon image" width="30" />
        </button>
        <button type="button" class="btn btn-pill btn-primary">
          <img src="@/assets/Add.png" alt="Add Icon image" width="33" />
        </button>
        <button type="button" class="a2 btn btn-pill btn-primary">
          <img src="@/assets/upward-arrow.png" alt="Upward arrow image" width="33" />
        </button>
      </div>
    </div>
    <div  v-else>
      <div class="cant bg-primary shadow-soft">
        <div class="nowrap">
          <button type="button" class="bg-primary btn-unauth btn-primary margin btn-sm"><span class="h4"><strong>Message</strong></span></button> 
          <button type="button" class="a2-unauth bg-primary btn-unauth btn-primary  btn-sm"><span class="h4"><strong>Follow</strong></span></button> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomMenu",
  methods:{
    is_authenticated_user(){
      
    }
  }
};
</script>
<style scoped>
.bottom-box{
  max-width: 100%;
}
.a2-unauth{
    margin-left: auto;
}
.nowrap{
 display: flex;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #44476a;
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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-unauth {
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
.cant {
  margin-left: auto;
  margin-right: auto;
  width: 30rem;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 0.3rem;
  max-width: 100%;
}
.a1 {
  float: left;
  margin-left: 1rem;
}
.a2 {
  float: right;
  margin-right: 1rem;
}
</style>