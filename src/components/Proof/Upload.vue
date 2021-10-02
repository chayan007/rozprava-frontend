<template >
  <div class="row">
    <div class="w-100 inputfile-box" v-show="isDocfile">
      <input
        type="file"
        ref="file"
        class="inputfile"
        multiple="multiple"
        id="inputfile"
        v-on:change="getFile"
      />
    </div>

    <div>
      <div class="card shadow-soft border-light container bg-soft p-2">
        <div class="upload_head">
          <img src="@/assets/upward-arrow.png" />
          <span class="h2 font-weight-bold align-top">Upload</span>
        </div>

        <!-- Icons  -->
        <div class="icons">
          <label
            @click="openFileInput()"
            :v-model="file"
            class="btn btn-icon-only"
            for="inputfile"
            type="button"
            title="doc button"
          >
            <img src="@/assets/doc.png" alt="Document" />
          </label>

          <label
            @click="openFileInput"
            class="btn btn-icon-only"
            for="inputfile"
            type="button"
            title="gallery button"
          >
            <img src="@/assets/gallery.png" alt="gallery" />
          </label>

          <label
            @click="openFileInput"
            class="btn btn-icon-only"
            for="inputfile"
            type="button"
            title="pdf button"
          >
            <img src="@/assets/pdf.png" alt="pdf" />
          </label>

          <label
            @click="openFileInput"
            class="btn btn-icon-only"
            for="inputfile"
            type="button"
            title="text button"
          >
            <img src="@/assets/text.png" alt="text" />
          </label>

          <label
            @click="openFileInput"
            class="btn btn-icon-only"
            for="inputfile"
            type="button"
            title="attach button"
          >
            <img src="@/assets/attachment1.png" alt="attach" />
          </label>

          <label
            @click="openFileInput()"
            class="btn btn-icon-only"
            for="inputfile"
            type="button"
            title="rozprava button"
          >
            <img src="@/assets/rozprava.png" alt="rozprava" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "Upload",
  props:['files'],
  data() {
    return {
      isDocfile: false,
      file: [],
      filenames:null,
    };
  },
  methods: {
    openFileInput() {
      if (this.isDocfile) {
        this.isDocfile = false;
      } else {
        this.isDocfile = true;
      }
    },

    getFile() {
      let fileInput = document.getElementById("inputfile");
      this.filenames = fileInput.files[0];
      this.$emit('clicked',this.filenames)
      fileInput.files = null
    }
  },
};
</script>

<style scoped>
.inputfile {
  display: none;
  width: 100%;
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #44476a;
  background-color: #e6e7ee;
  background-clip: padding-box;
  border: none;
  border-radius: 0rem;
  transition: all 0.3s ease-in-out;
}

input[type="file"]::file-selector-button {
  background-color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0.3em 0.8em;
  margin-right: 0.4em;
  box-shadow: 3px 1px 10px -1px rgba(73, 73, 73, 0.637);
}

.inputfile-box {
  background-color: #fff;
  position: absolute;
  bottom: 15;
  z-index: 2;
  left: 0;
}

.container {
  height: 200px;
  width: 300px;
}
.upload_head {
  text-align: center;
}
.icons {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 5fr);
  grid-row-gap: 25px;
  grid-column-gap: 25px;
  justify-content: center;
}
</style>