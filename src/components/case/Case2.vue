<template> 
  <div class="mt-4 col col-12">
    <div class="card bg-primary border-light shadow-soft">
      <img v-if="hasValue('image_url')"
          src="https://user-images.githubusercontent.com/83393749/122279699-f826a380-cf05-11eb-949d-5cbd6bd8027c.png"
          class="card-img-top rounded-top image"
      />
      <div class="card-body pt-2 mt-3">
        <div class="media d-flex align-items-center justify-content-between">
          <div class="post-group">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="23k followers"
            >
              <img
                class="avatar-sm mr-2 img-fluid rounded-circle"
                :src="detail.profile.display_pic"
                alt="display_pic"
              />
              {{ detail.profile.user.username }}
            </a>
          </div>
          <span class="dropdown btn-group mr-0 ">
            <span
              type="button"
              class="
                btn btn-tertiary
                dropdown-toggle dropdown-toggle-split
                mr-0
                p-0
              "
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
                <img
                  src="https://user-images.githubusercontent.com/83393749/122456289-038fd280-cfcb-11eb-8935-5aa1e729cfb8.png"
                />
              <span class="sr-only">Toggle Dropdown</span>
            </span>
            <div
              class="dropdown-menu case-dropdown"
              x-placement="bottom-start"
              style="
                position: absolute;
                will-change: transform;
                top: 0px;
                left: 0px;
                transform: translate3d(0px, 44px, 0px);
              "
            >
              <a class="dropdown-item" href="#">Edit</a>
              <a class="dropdown-item" href="#">Boost</a>
              <a class="dropdown-item" href="#">Copy Link</a>
              <a class="dropdown-item" href="#">Report</a>
            </div>
          </span>
        </div>
        <h3 class="h5 card-title mt-4">
          {{ detail.question }}
        </h3>
        <div class="dropdown-divider"></div>
        <p class="card-text">
          {{ detail.description }}
        </p>
        <div class="d-flex align-items-center justify-content-between">
          <a href="#">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M0.666504 8.00008C0.666504 8.00008 3.33317 2.66675 7.99984 2.66675C12.6665 2.66675 15.3332 8.00008 15.3332 8.00008C15.3332 8.00008 12.6665 13.3334 7.99984 13.3334C3.33317 13.3334 0.666504 8.00008 0.666504 8.00008Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

          <a> 1234</a>
          </a>
          <div class="d-flex">
            <a href="#">
              <button class="btn btn-primary btn-pill  btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
            <img
              class="image-xs p-1"
              src="https://user-images.githubusercontent.com/83393749/122523306-7e410800-d034-11eb-8586-3fcc87584356.png"
            /></button>
            </a>
            <a href="#">
              <button class="btn btn-primary btn-pill  btn-icon-only text-twitter" type="button" aria-label="twitter button" title="twitter button">
            <img
              class="image-xs p-1"
              src="https://user-images.githubusercontent.com/83393749/122523313-813bf880-d034-11eb-9348-e98508bbdc9b.png"
            /></button>
            </a>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <div class="d-flex">
            <a href="#">
            <img
              src="../../assets/profile-picture-1.jpg"
              class="matrices-profile rounded-circle mr-1"
              alt="profile image"
              width="30"
            />
            <img
              src="../../assets/profile-picture-1.jpg"
              class="matrices-profile mat-pro-2  rounded-circle mr-1"
              alt="profile image"
              width="30"
            />
            <img
              src="../../assets/profile-picture-1.jpg"
              class="matrices-profile mat-pro-3 rounded-circle mr-1"
              alt="profile image"
              width="30"
            />
            </a>
            <a href="#">
            12
            <img
              class="image-xs p-1"
              src="https://user-images.githubusercontent.com/83393749/122523306-7e410800-d034-11eb-8586-3fcc87584356.png"
            />
            </a>
            <a href="#">
            12
            <img
              class="image-xs p-1"
              src="https://user-images.githubusercontent.com/83393749/122523306-7e410800-d034-11eb-8586-3fcc87584356.png"
            />
            </a>
          </div>
          <a href="#">
          <a>10 Proofs</a>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Case",
  props: ['detail'],
  methods: {
    hasValue(key) {
      return Object.keys(this.detail).includes(key);
    }
  }
};
</script>

<style scoped>
.matrices-profile {
  position: relative;
  border: 2px solid #fff;
}
.mat-pro-2 {
  right: 1em;
}
.mat-pro-3 {
  right: 2em;
}
.case-dropdown {
  left: -5em !important;
  z-index: 5;
}
</style>