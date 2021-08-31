<template>
  <div class="frame">
    <div class="a1">
      <div class="a2 bg-primary shadow-soft">
        <div
          class="
            a4
            profile-image
            bg-primary
            shadow-inset
            border border-light
            rounded-circle
          "
        >
          <img
            :src="getImg()"
            class="card-img-top rounded-circle"
            alt="fail to load image"
            width="100"
          />
        </div>
        <p class="card-text py-3 mb-0">{{ recommendation.user.full_name }}</p>
        <button
          class="btn btn-pill button-space mb-3 btn-primary"
          type="button"
        >
          <span class="btn-inner-text font-weight-bold">Follow</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PeopleCard",
  props: ["recommendation"],
  methods: {
    getImg(){
      try{ 
        return require(this.recommendation.display_pic)
      }catch(_){
        return require(`@/assets/black-rose.jpg`)
      }
    }
  }
};
</script>
<style scoped>
.a1 {
  width: 80%;
  height: 15rem;
  padding: 1rem 1rem;
}
.a2 {
  width: 80%;
  height: 100%;
  background-color: blue;
  border-radius: 1rem;
  padding: 5px;
}
.frame {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 1000px) and (min-width: 701px) {
  .a1 {
    width: 33.33333%;
  }
}
@media (max-width: 700px) {
  .a1 {
    width: 50%;
    padding: 0.7rem 0.7rem;
  }
}
.a4 {
  width: 6rem;
  height: 6rem;
  margin: auto auto;
}
.button-space {
  padding: 0.3rem 1rem;
  max-width: 100%;
  min-width: 50%;
}
</style>