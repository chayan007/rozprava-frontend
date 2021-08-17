<template>
    <h2>Activity Feed</h2>
<ol class="activity-feed">
  <li class="item">
    <time class="date" datetime="9-25">Sep 25</time>
    <span class="text">Activity details</span>
  </li>
  <li class="item">
    <time class="date" datetime="9-24">Sep 24</time>
    <span class="text">Activity details</span>
  </li>
  <li class="item">
    <time class="date" datetime="9-23">Sep 23</time>
    <span class="text">Activity details</span>
  </li>
  <li class="item">
    <time class="date" datetime="9-21">Sep 21</time>
    <span class="text">Activity details</span>
  </li>
  <li class="item">
    <time class="date" datetime="9-18">Sep 18</time>
    <span class="text">Activity details</span>
  </li>
  <li class="item">
    <time class="date" datetime="9-17">Sep 17</time>
    <span class="text">Activity details</span>
  </li>
</ol>
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

.activity-feed {
  padding: 15px;
  list-style: none;
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
