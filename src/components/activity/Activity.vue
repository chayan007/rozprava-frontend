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
body {
  font-family: 'Open Sans', sans-serif;
  color: #4e555f;
  font-size: 14px;
}

  .item {
    position: relative;
    padding-bottom: 20px;
    padding-left: 30px;
    border-left: 2px solid #e4e8eb;
  }
    

    .date {
      display: block;
      position: relative;
      top: -5px;
      color: #8c96a3;
      text-transform: uppercase;
      font-size: 13px;
    }
    .text {
      position: relative;
      top: -3px;
    }
  

</style>