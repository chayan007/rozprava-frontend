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

.item {
    position: relative;
    padding-bottom: 20px;
    padding-left: 60px;
    border-left: 4px solid #4e555f;
}
    
</style>