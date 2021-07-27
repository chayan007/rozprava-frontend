<template>
        <div >
            <div class="a-1 space scroll">
                <button class="btn btn-pill mr-3  mb-3 btn-primary" type="button">All</button>
                <button class="btn btn-pill mr-3  mb-3 btn-primary" type="button">
                    Politics
                </button>
                <button class="btn btn-pill mr-3  mb-3 btn-primary" type="button">
                    Sports
                </button>
                <button class="btn btn-pill mr-3  mb-3 btn-primary" type="button">
                    Education
                </button>
                <button class="btn btn-pill mr-3  mb-3 btn-primary" type="button">
                    Adult
                </button>
                <button class="btn btn-pill mr-3 mb-3 btn-primary" type="button">
                    Spiritual
                </button>
                <button class="btn btn-pill mr-3 mb-3 btn-primary" type="button">
                    Entertainment
                </button>
                <button class="btn btn-pill mr-3 mb-3 btn-primary" type="button">
                    Bussiness
                </button>
                <button class="btn btn-pill mr-3 mb-3 btn-primary" type="button">
                    Technology
                </button>
                <button class="btn btn-pill mr-3 mb-3 btn-primary" type="button">
                    Nature
                </button>
        </div>
    </div>
</template>
 <script>
export default {
  name: 'Button',
}
</script>
<style scoped>
 .scroll {
  overflow-x: auto;
  white-space: nowrap; 
}
.scroll::-webkit-scrollbar{
    text-decoration: none;
}
.space{
    margin-left: 10%;
    margin-right: 9%;
}
.a-1{
    padding: 1rem 0rem;
}
@media (max-width: 700px) {
    .space {
        margin-right: 4%;
        margin-left: 4%;
    }
}
</style>