<template>
    <div class="popup" @click="Toggle()">
       <div>hello</div>
        <div class="popup-inner" @click="Toggle()">
            <slot />
            <div >
                
                    
                <div><a href="" class=" left">Report</a></div>
                
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: "ProfileMenu2",
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
    
    max-width: 100%;
}
.popup-inner{
        
       background: white;
        border-radius: 1rem;
        padding: 1rem;
        margin-top: 8rem;
         margin-left: auto;
        margin-right: 12%;
        height: 2.5rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 6rem;
    }
    .left{
        float: right;
       display: block;
       
    }
    @media (max-width: 1000px) {
    .popup-inner {
     
        
        margin-right: 2%;
    }
    }
</style>