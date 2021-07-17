<template>
    <div class="container">
        <div class="row justify-content-md-around">
          <CaseViewPage></CaseViewPage>
        </div>
      </div>
</template>

<script>

import CaseViewPage from '@/components/CaseViewPage.vue';
export default {
  name: "CaseView",
  components: { CaseViewPage },
};
</script>
