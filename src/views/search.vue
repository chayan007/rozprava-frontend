<template>
    <section class="section section bg-soft pb-5 overflow-hidden z-2">
            <div class="container z-2">
              <div class="row">
            <div class="col text-center mt-5">
                    <span class="h2 text-center">Search results:</span>
            </div>
        </div>
        <SearchBar/>
            </div></section>
</template>

<script>
import SearchBar from '../components/search/searchBar.vue'
export default {
    name: "Search",
    components:{SearchBar
    }
}
</script>
