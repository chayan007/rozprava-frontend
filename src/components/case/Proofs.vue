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
      const extension = url.split(/[#?]/)[0].split(".").pop().trim();

      if (images.includes(extension)) {
        this.type = 1;
      } else if (videos.includes(extension)) {
        this.type = 2;
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
</style>