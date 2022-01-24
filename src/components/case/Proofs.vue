<template>
  <!-- proof.file -->
  <img v-if="type == 1" class="proof-img" :src="proof.file" alt="" />
  <video
    v-else-if="type == 2"
    class="proof-vid"
    width="320"
    height="240"
    controls
  >
    <source :src="proof.file" type="video/mp4" />
  </video>
  <div
    v-else-if="type == 3"
    class="
      proof-doc
      position-relative
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <img class="doc-icon" src="@/assets/doc.png" alt="document icon" />
    <a class="download-btn position-absolute w-100" :href="proof.file" download>
      <div class="d-flex justify-content-center align-items-center p-3 w-100">
        <b>Download</b>
        <img
          class="download-icon ml-2"
          src="@/assets/download.svg"
          alt="download icon"
        />
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "Proof",
  props: ["proof"],
  data() {
    return {
      type: 1,
    };
  },
  created() {
    this.getExtension(this.proof.file);
  },
  methods: {
    getExtension(url) {
      const images = ["jpg", "gif", "png"];
      const videos = ["mp4", "3gp", "ogg"];
      const docs = ["ppt", "pdf", "txt", "xlsx","xls","doc", "docx", "pptx"];
      const extension = url.split(/[#?]/)[0].split(".").pop().trim();

      if (images.includes(extension)) {
        this.type = 1;
      } else if (videos.includes(extension)) {
        this.type = 2;
      } else if (docs.includes(extension)) {
        this.type = 3;
      }
    },
  },
};
</script>

<style scoped>
.proof-img {
  height: 15em;
  object-fit: cover;
  border-radius: 15px;
  max-width: none;
}
.proof-vid {
  width: 23em;
  height: 15em;
  border-radius: 15px;
  background-color: rgb(27, 27, 27);
}
.proof-doc {
  width: 23em;
  height: 15em;
  border-radius: 15px;
  background-color: rgb(240, 240, 240);
  overflow: hidden;
}
.doc-icon {
  width: 4em;
}
.download-btn {
  bottom: 0;
}
.download-icon {
  width: 1.2em;
}
</style>