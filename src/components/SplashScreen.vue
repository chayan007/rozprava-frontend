<template>
  <div>
    <div class="topBox" style="margin-top: 10px; text-align: center;">
      <div class="menu">
        <img
          src="https://user-images.githubusercontent.com/75200810/121134727-5e9a2a80-c851-11eb-87a6-3be9cae652a0.png"
          alt="menu bar"
        />
      </div>
      <div class="brandName" style="width: 94%;">
        <h2>ROZAPRAVA</h2>
      </div>
      <div class="profile box" style="width: 39px; text-align: center; justify-content: center;">
        <div class="profileBorder" style="float: right;">
          <img
            src="https://user-images.githubusercontent.com/75200810/121130697-660b0500-c84c-11eb-9ddd-ca8651000a6d.jpg"
            alt="ProfileImg"
          />
        </div>
      </div>
    </div>
    <div class="searchBar" style="margin-top: 5px; text-align: center; margin-right: 10px; ">
      <input type="text" name="searchBox" placeholder="Search" style="align-items: center;"><br>
      <img src="https://user-images.githubusercontent.com/75200810/121168891-10951f00-c871-11eb-81a4-4f31bd419ac3.png" alt="" height="20px" width="20px" style="margin-top: -2.5rem;">
    </div>  
  </div>
</template>

<script></script>

<style>
body {
  margin: 0%;
  background: #ffffff;
  border-radius: 20px; 
}

.profileBorder {
  height: 34px;
  width: 34px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  object-fit: cover;
  /* margin-right: 10px; */
  margin-top: -3px;
  cursor: pointer;
}
.profileBorder img {
  height: 100%;
  width: 100%;
}
.brandName {
  font-size: 17px;
  line-height: 22px;
  font-family: Josefin Sans;
  /* display: flex; */
  align-items: flex-end;
  font-style: normal;
  font-weight: normal;
}
.brandName h2 {
  margin: 0%;
  margin-top: 3.5px;
}
.menu {
  width: 35px;
  height: 35px;
  margin-left: 10px;
  cursor: pointer;
}
.topBox .brandName {
  text-align: center;
}
.searchBar input{
  width: 93.5%;
  font-family: Josefin Sans;
  border-radius: 8px;
  border: 1px solid #faf5f5fa;
  background-color: #fcf3f3fa;
  padding: 0px 10px;
  padding-left: 35px;
  height: 26px;
  
}
.searchBar img{
  margin-bottom: 1rem;
  margin-left: -94.2%;
}
.menu:hover{
    background-color: rgb(251, 251, 251);
}
.profileBorder:hover{
  box-shadow: 1.5px 1.5px 1.5px rgb(218, 213, 213);
  
}
.topBox {
  display: flex;
}
@media only screen and (max-width: 500px){
  .searchBar img{
    margin-left: -88%;
}
}

</style>