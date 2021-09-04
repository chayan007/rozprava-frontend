<template>
  <button @click="upload">Click Me!</button>
  <div class="mt-10 show_hide" id="show">
    <UploadComponent/>
  </div>
</template>

<script>
import Upload from "@/components/Upload.vue";
export default {
  name: "Upload",
  components: { UploadComponent: Upload },
  methods: {
    upload() {
      var element = document.getElementById("show");
      element.classList.toggle("show_hide");
    },
  },
};
</script>

<style scoped>
button {
  position: relative;
  margin-top: 10rem;
  padding: 5px;
}
.show_hide {
  display: none !important;
}
</style>