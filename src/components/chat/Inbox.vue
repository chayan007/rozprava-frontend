<template>
    <div>
      <div class="a3">
        <h3>Chats</h3>
        <button class="a6 plus"><img src="@/assets/plus.png" class="plus" alt=""></button>
      </div>
      <div class="a5 shadow-soft">
        <div class="cant bg-primary shadow-soft" >
          <div class="a1 ">
            <div class="a4 profile-image bg-primary shadow-inset border border-light rounded-circle ml-2 ">
              <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle " alt="Image" width="100" />
            </div>
            <div class="a2"><h5>Raju Kumar</h5></div>
          </div>
        </div>
        <div class="cant bg-primary shadow-soft" >
          <div class="a1 ">
            <div class="a4 profile-image bg-primary shadow-inset border border-light rounded-circle ml-2 ">
              <img src="@/assets/black-rose.jpg" class="card-img-top rounded-circle " alt="Image" width="100" />
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
.a3{
  display: flex;
  margin-bottom: 2rem;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2%;
}
.a5{
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  padding: 2%;
  border-radius: 0.3rem;
}
.a2{
  margin-top: 1rem;
}
.a1{
  display: flex;
}
.cant{
  max-width: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
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
    width: 100%;
  }
}
@media (max-width: 764px) {
  .cant {
    padding: 0rem;
  }
}
@media (max-width: 764px) {
  .a3 {
    width: 100%;
  }
}
</style>