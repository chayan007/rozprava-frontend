<template>
  <div class="col-md-6">
                
                <div class= "item">
                  <div class="iteminner">
                    
                    <div class="rounded-circle activitydot">
                  
                  </div>
                <span class="pl-3 itemtext">Activity Module</span></div>    
                </div>
                
            </div>
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


.activitydot{
  height: 1.5em;
  width: 1.5em;
  background-color:#4e555f;
  display: inline-block;
}

.iteminner{
  position:relative;
  right: 5.15em;
  display: flex;
  align-items: center;
}
.itemtext{
  display: inline-block;
}

body {
  font-family: 'Open Sans', sans-serif;
  color: #4e555f;
  font-size: 14px;
  
}

  .item {
    position: relative;
    padding-bottom: 20px;
    padding-left: 60px;
    
    border-left: 4px solid #4e555f;
  }
  

    
    .date {

      border-color: transparent;
      content: "";
      display: circle;
      position: relative;
      top: 0;
      left: 43%;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: #fff;
      border: 8px solid black;
      

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