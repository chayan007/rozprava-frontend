<template>
    <div class="popup" @click="Toggle()">
        <div class="popup-inner" @click="Toggle()">
            <slot />
            <div >
                
                    <div><a href="" class="left">Edit Profile</a></div>
                <div><a href="#" class="left">Settings</a></div>
               
               <div><a href="" class="left">About Us </a></div>
                <div><a href="" class="left">Terms &amp; Condition</a></div>
                
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: "ProfileMenu",
    props:['Toggle']
};
</script>
<style lans="scss" scoped>
.popup{
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 299;
    background-color: rgba(0,0,0,0.2);

    display: flex;
    align-items: center;
    justify-content: center;
    
}
.popup-inner{
        
       background: white;
        border-radius: 1rem;
        padding: 1rem;
        margin-top: -12rem;
        margin-left: 13rem;
    }
    .left{
        float: right;
        display: block;
        
    }
</style>