<template>
  <li class="item">
    <time class="date" datetime="9-25">Sep 25</time>
    <span class="text">Activity details</span>
  </li>
  
  
</template>

<script>
export default {
  name: "Activity",
};
</script>

<style>

html {
  box-sizing: border-box;
}
:before, :after {
  box-sizing: inherit;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans);


body {
  font-family: 'Open Sans', sans-serif;
  color: #4e555f;
  font-size: 14px;
  
}

  .item {
    position: relative;
    padding-bottom: 20px;
    padding-left: 60px;
    border-left: 7px solid black;
    
  }
  

    
    .date {

      border-color: transparent;
      content: "";
      display: circle;
      position: absolute;
      top: 0;
      left: 43%;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: #fff;
      border: 8px solid black;
      border-align: 50%;

      display: block;
      position: 50%;
      top: -5px;
      color: black;
      text-transform: uppercase;
      font-size: 13px;
    }
    .text {
      position: relative;
      top: -3px;
    }
  

</style>