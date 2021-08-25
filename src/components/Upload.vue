<template>
  <div class="row mt-10 ml-10">  
    <!-- the class can be removed as it is to see this on page and also the router /upload -->
  <div>
    <div>
      <div class="card shadow-soft border-light container bg-soft p-2">
        <div class="upload_head">
          <img src="../assets/upward-arrow.png" />
          <span class="h2 font-weight-bold align-top">Upload</span>
        </div>

        <!-- Icons  -->
        <div class="icons">
          <button
            class="btn btn-icon-only"
            type="button"
            title="doc button"
          >
            <img src="../assets/doc.png" alt="doc" />
          </button>
          <button
            class="btn btn-icon-only"
            type="button"
            title="gallery button"
          >
            <img src="../assets/gallery.png" alt="gallery" />
          </button>

          <button
            class="btn btn-icon-only"
            type="button"
            title="pdf button"
          >
            <img src="../assets/pdf.png" alt="pdf" />
          </button>

          <button
            class="btn btn-icon-only"
            type="button"
            title="text button"
          >
            <img src="../assets/text.png" alt="text" />
          </button>

          <button
            class="btn btn-icon-only"
            type="button"
            title="attach button"
          >
            <img src="../assets/attachment.png" alt="attach" />
          </button>

          <button
            class="btn btn-icon-only"
            type="button"
            title="rozprava button"
          >
            <img src="../assets/rozprava.png" alt="rozprava" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Upload",
};
</script>


<style scoped>
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