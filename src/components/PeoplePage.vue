<template>
  <div>
    <div class="row space align-items-center" >
      <div class="col-md-6 col-lg-4 text-center" >
        <div class="card bg-primary shadow-soft border-light mb-4">
          <div class="card-body py-5">
            <img src="" class="img-fluid image-sm" alt="airbnb logo" />
            <p class="card-text py-5 mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
             <button class="btn btn-pill space mr-3 mb-3 btn-primary" type="button">
                    <span class="btn-inner-text font-weight-bold">Follow</span>
                </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <div class="card bg-primary shadow-soft border-light mb-4">
          <div class="">
            <img src="" class="img-fluid image-sm" alt="paypal logo" />
            <p class="card-text py-5 mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
             <button class="btn btn-pill space mr-3 mb-3 btn-primary" type="button">
                    <span class="btn-inner-text font-weight-bold">Follow</span>
                </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <div class="card bg-primary shadow-soft border-light mb-4">
          <div class="">
            <img src="../assets/login.svg" class="img-fluid image-sm" alt="ebay logo" />
            <p class="card-text py-5 mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
             <button class="btn btn-pill space mr-3 mb-3 btn-primary" type="button">
                    <span class="btn-inner-text font-weight-bold">Follow</span>
                </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <div class="card bg-primary shadow-soft border-light mb-4">
          <div class="card-body py-5">
            <img src="" class="img-fluid image-sm" alt="forbes logo" />
            <p class="card-text py-5 mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary text-dark btn-icon">
              <span class="btn-inner-icon"
                ><span class="far fa-eye"></span
              ></span>
              <span class="btn-inner-text font-weight-bold">Follow</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <div class="card bg-primary shadow-soft border-light mb-4">
          <div class="card-body py-5">
            <img src="../assets/login.svg" class="img-fluid image-sm" alt="corsair logo" />
            <p class="card-text py-5 mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary text-dark btn-icon">
              <span class="btn-inner-icon"
                ><span class="far fa-eye"></span
              ></span>
              <span class="btn-inner-text font-weight-bold">Follow</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <div class="card bg-primary shadow-soft border-light mb-4">
          <div class="card-body py-5">
            <img src="" class="img-fluid image-sm" alt="pinterest logo" />
            <p class="card-text py-5 mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary text-dark btn-icon">
              <span class="btn-inner-icon"
                ><span class="far fa-eye"></span
              ></span>
              <span class="btn-inner-text font-weight-bold">Follow</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    -->
  </div>
</template>
<script>
export default {
  name: "PeoplePage",
};
</script>
<style scoped>
.space {
  padding: 0.5rem 2rem;
}
.col-lg-4 {
        flex: 0 0 33.33333%;
        max-width: 25%;
    }
    @media (max-width: 500px) {
    .col-lg-4 {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 50%;
    }
    }
</style>