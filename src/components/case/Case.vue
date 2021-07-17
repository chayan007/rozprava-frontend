<template>
  <div class="mt-4">
    <div class="card bg-primary border-light shadow-soft m-5">
      <img
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
                src="@/assets/profile-picture-1.jpg"
                alt="Jo portrait"
              />
              Jo J. Moore
            </a>
          </div>
          <span class="btn-group mr-0">
            <button
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
              <span>
                <img
                  src="https://user-images.githubusercontent.com/83393749/122456289-038fd280-cfcb-11eb-8935-5aa1e729cfb8.png"
                />
              </span>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div
              class="dropdown-menu"
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
          Social Sites taking away our PRIVACY...
        </h3>
        <div class="dropdown-divider"></div>
        <p class="card-text">
          We are facing a serious business dilemma, with Facebook taking away a
          good chunk of traffic to news and content sites, and ad blockers eating
          into what’s left of it while slashing ad revenues.
        </p>
        <div class="d-flex align-items-center justify-content-between">
          <a href="#">
          <img
            src="https://user-images.githubusercontent.com/83393749/122516803-d542df00-d02c-11eb-8885-2bf6eaefa28e.png"
          />
          </a>
          <div class="d-flex">
            <a href="#">
            <img
              class="image-xs p-1"
              src="https://user-images.githubusercontent.com/83393749/122523306-7e410800-d034-11eb-8586-3fcc87584356.png"
            />
            </a>
            <a href="#">
            <img
              class="image-xs p-1"
              src="https://user-images.githubusercontent.com/83393749/122523313-813bf880-d034-11eb-9348-e98508bbdc9b.png"
            />
            </a>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <div class="d-flex">
            <a href="#">
            <img
              class="mr-2 image-xs p-1"
              src="https://user-images.githubusercontent.com/83393749/122525975-6d45c600-d037-11eb-9d9d-73ec9ee645f3.png"
            />
            </a>
            <a href="#">
            <img
              class="image-xs p-1"
              src="https://user-images.githubusercontent.com/83393749/122525986-6f0f8980-d037-11eb-89a6-8088d2b0f7b0.png"
            />
            </a>
          </div>
          <a href="#">
          <img
            src="https://user-images.githubusercontent.com/83393749/122526001-72a31080-d037-11eb-9080-6e58cb6c90b3.png"
          />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Case",
  components: {},
};
</script>
