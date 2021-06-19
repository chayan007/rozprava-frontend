<template>
    <div
        class="input-group
            "
      >
        <input
          class="form-control"
          id="SearchBar"
          placeholder="Search"
          aria-label="Input group"
          type="text"
        />
        <div class="input-group-append">
          <span class="input-group-text"
            ><router-link to="/search"><span class="fas fa-search"></span
          ></router-link></span>
        </div>
      </div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    name: "SearchBar",
}
</script>
