<template>
  <div class="detail-case-box w-100">
    <!-- case banner art -->
    <div class="case-head-box w-100">
      <img class="case-head-img w-100" src="@/assets/Detail-case.png" alt="" />
      <h3 class="case-head p-3 pt-4">Social sites taking away our PRIVACY... </h3>
    </div>

    <!-- full case box -->
    <div class="case-detail w-100 mt-7 p-3">

        <!-- profile bar -->
        <div class="row m-0 justify-content-between w-100">
            <span class="row m-0 align-items-center">
                <span class="">
                    <img class="case-profile-pic rounded-circle" src="@/assets/profile-picture-1.jpg" alt="">
                </span>
                <span class="pl-2">
                    <small class="case-profile-name m-0 ">Shawn Carter</small>
                    <small>4 min ago</small>
                </span>
            </span>
            <span class="row m-0 align-items-center">
                <img class="case-menu" src="@/assets/menu-dots.svg" alt="">
            </span>
        </div>

        <!-- case text -->
        <div class="case-box pt-2 mt-2">
           <h5>Social sites taking away our PRIVACY</h5>  
           <hr class="m-0 mb-1">
           <small>We are facing a serious business dilemma, with Facebook taking away a good chunk of traffic to news and content sites, and ad blockers eating into what’s left of it while...</small>
        </div>

        <!-- case reaction box -->
        <div class="reactions-box row justify-content-between m-0 mt-3">
             <span class="row m-0 align-items-center">
                <span class="row m-0 align-items-center">
                    <img class="case-react-icons mr-1" src="@/assets/case-up.svg" alt="">
                    <small class="react-txt m-0 mr-3 h6 ">40</small>
                </span>
                <span class="row m-0 align-items-center">
                    <img class="case-react-icons mr-1" src="@/assets/case-like.svg" alt="">
                    <small class="react-txt m-0 mr-3 h6 ">58</small>
                </span>
                <span class="row m-0 align-items-center">
                    <img class="case-react-icons mr-1" src="@/assets/case-dislike.svg" alt="">
                    <small class="react-txt m-0 mr-3 h6 ">12</small>
                </span>
            </span>
            <span class="case-view-box row m-0 align-items-center">
                <img class="case-view-icon " src="@/assets/case-view.svg" alt="">
                <small class="react-txt h6 m-0 pl-1">240</small>
            </span>
        </div>
        <!-- case reaction box 2 -->
        <div class="row m-0 justify-content-between align-items-end mt-3">
            <span>
                <img class="case-react-profile-pic rounded-circle" src="@/assets/profile-picture-1.jpg" alt="">
                <img class="rel-right-1 case-react-profile-pic rounded-circle" src="@/assets/profile-picture-1.jpg" alt="">
                <img class="rel-right-2 case-react-profile-pic rounded-circle" src="@/assets/profile-picture-1.jpg" alt="">
            </span>
            <small>10 proofs</small>
        </div>

        <!-- case comments -->
        <hr class="mt-4 m-0">
        <div class="pri-comments">
            <List></List>
        </div>

    </div>


  </div>
</template>


<script>
import List from "@/components/debate/List.vue";
export default {
  name: "DetailCase",
  components: { List },
};
</script>

<style scoped>
.case-head-box {
  position: fixed;
  top: 0%;
}
.case-head {
  position: absolute;
  top: 0%;
  color: white;
  text-shadow: 3px 3px 5px #262626;
}
.case-detail {
  position: absolute;
  top: 0;
  background-color: white;
  border-radius: 1.2em 1.2em 0 0;
  min-height: 100vh;
  z-index: 1;
}
.case-profile-pic{
    width: 3em;
}
.case-profile-name{
    display: block;
    font-size: 1em;
}
.case-menu{
    width: 1.2em;
}
.case-box hr{
    border: none;
    border-bottom: 1px solid rgb(163, 163, 163);
}
.case-box small{
    font-size: .95em;
    letter-spacing: 1px;
}
.react-txt{
    font-size: .89em;
}
.case-react-icons{
    width: 1.6em;
}
.case-view-icon{
    width: 1.5em;
}
.case-react-profile-pic{
    width: 2.3em;
    position: relative;
    border: 2px solid white;
}
.rel-right-1{
    right:.8em
}
.rel-right-2{
    right: 1.6em;
}
</style>