<template>
  <div>
    <div class="topBox" style="margin-top: 10px; text-align: center; height: 45px;">
      <div class="menuicon">
         <img src="https://user-images.githubusercontent.com/75200810/121134727-5e9a2a80-c851-11eb-87a6-3be9cae652a0.png" alt="menu bar"
         />
      </div>
      <div class="brandName" style="width: 94%; justify-content: center; text-align: center;">
        <h2>ROZAPRAVA</h2>
      </div>
      <div class="profilebox" style="width: 42px; text-align: center; justify-content: center;  margin-right: 10px; padding-bottom: 2px;">
         <div class="storybox" style="text-align: center;">
           <div class="profileBorder" style="float: right;">
             <img src="https://user-images.githubusercontent.com/75200810/121130697-660b0500-c84c-11eb-9ddd-ca8651000a6d.jpg" alt="ProfileImg"/>
           </div>
         </div>
       </div>
    </div>
    <div
      class="searchBar"
      style="margin-top: 10px; text-align: center; margin-right: 10px; "
    >
      <input
        type="text"
        name="searchBox"
        placeholder="Search"
        style="align-items: center;"
      /><br />
      <img
        src="https://user-images.githubusercontent.com/75200810/121168891-10951f00-c871-11eb-81a4-4f31bd419ac3.png"
        alt=""
        height="20px"
        width="20px"
        style="margin-top: -2.5rem;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style>
.topBox .profileBorder {
  height: 34px;
  width: 34px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  object-fit: cover;
  /* margin-right: 10px; */
  margin-top: 2.3px;
  cursor: pointer;
  margin-right: 1.7px;
  /* box-shadow: 3px 3px 3px rgb(108, 160, 180); */
}
.topBox .storybox {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 0.7px solid black;
  margin-top: 0px;
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
.menuicon {
  width: 39px;
  height: 39px;
  margin-left: 10px;
  cursor: pointer;
  /* box-shadow: 2.5px 0px 2.5px rgb(135, 198, 201); */
}
.menuicon img{
  height: 100%;
  width: 100%;
}
.topBox .brandName {
  text-align: center;
}
.searchBar input {
  width: 93.5%;
  font-family: Josefin Sans;
  border-radius: 12px;
  border: 1px solid #8f9294fa;
  background-color: #f0f4f8fa;
  padding: 0px 10px;
  padding-left: 35px;
  height: 26px;
}
.searchBar img {
  margin-bottom: 0.75rem;
  margin-left: -91.2%;
}
/* .menuicon:hover{
    background-color: rgb(251, 251, 251);
} */
.profileBorder:hover {
  box-shadow: 1.5px 1.5px 1.5px rgb(218, 213, 213);
}
.topBox {
  display: flex;
}
@media only screen and (max-width: 500px) {
  .searchBar img {
    margin-left: -84%;
  }
}
</style>
