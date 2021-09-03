<template>
    <div class="row m-0 mb-3">

        <div class="for-com col col-10 p-2">

            <!-- profile -->
            <div class="com-profile-box row align-items-center m-0">
                <img class="com-pro-img rounded-circle" src="@/assets/profile-picture-1.jpg" >
                <small class="ml-2 h6 m-0">Shawn Carter</small>
            </div>

            <!-- body -->
            <div class="com-body mt-2 pl-1">
                <small>
                    sjlkasj ssj sjs jskdjdjkdj sjsdksj
                </small>
            </div>
            <hr class="mb-0 mt-2">
            <!-- reactions -->
            <div class="com-react-box row justify-content-between m-0 p-1">
                <span class="row m-0 align-items-center">
                    <span class="row m-0 align-items-center">
                        <img class="case-react-icons mr-1" src="@/assets/case-like.svg" alt="">
                        <small class="react-txt m-0 mr-3 h6 ">58</small>
                    </span>
                    <span class="row m-0 align-items-center">
                        <img class="case-react-icons mr-1" src="@/assets/case-dislike.svg" alt="">
                        <small class="react-txt m-0 mr-3 h6 ">12</small>
                    </span>
                    <span>
                        <small class="font-weight-bold">12 rebuttals</small>
                    </span>
                </span>
                <span class="case-view-box row m-0 align-items-center">
                    <small class="react-txt h6 m-0 pl-1">2h ago</small>
                </span>
            </div>
           
        </div>

    </div>
</template>

<script>
export default {
    name: "For"
}
</script>

<style scoped>
.for-com{
    background-color: #E7FFE5;
    border-radius: 15px;
}
.com-pro-img{
    width: 2.2em;
}
.com-body small{
    font-size: .9em;
    letter-spacing: 1px;
}
.case-react-icons{
    width: 1.2em;
}
.react-txt{
    font-size: .8em;
}
</style>