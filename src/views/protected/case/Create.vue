<template>
<section class="section section bg-soft pb-5 overflow-hidden z-2">
      <div class="row justify-content-center pt-3">
        <div class="col-lg-8 col-xl-8">
    <CreateForm class="mr-2 ml-2"/></div></div></section>
</template>

<script>
import CreateForm from '@/components/case/CreateForm.vue';

export default ({
    name:'CaseCreate',
    components:{CreateForm}
})
</script>
