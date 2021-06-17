<template>
<div class="box" style="text-align: center;">
    <div class="mb-5">
  <CategoryForm></CategoryForm>
    </div>
    <div>
        <PeoplePage></PeoplePage>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import CategoryForm from '@/components/CategoryForm.vue'
import PeoplePage from '@/components/PeoplePage.vue'
export default {
  name: 'Category',
  components: { CategoryForm ,PeoplePage
  }
}
</script>

<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 5rem;
  padding: 0%;
}
</style>

