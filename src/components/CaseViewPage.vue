<template>
  <div class="card bg-primary border-light shadow-soft m-5">
    <img
      src="https://user-images.githubusercontent.com/83393749/122279699-f826a380-cf05-11eb-949d-5cbd6bd8027c.png"
      class="card-img-top rounded-top image"
    />
    <div class="card-body">
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
              src="../assets/profile-picture-1.jpg"
              alt="Jo portrait"
            />
            Jo J. Moore
          </a>
        </div>
        <div class="btn-group mr-0">
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
        </div>
      </div>
      <h3 class="h5 card-title mt-3">
        Social Sites taking away our PRIVACY...
      </h3>
      <div class="dropdown-divider"></div>
      <p class="card-text">
        We are facing a serious business dilemma, with Facebook taking away a
        good chunk of traffic to news and content sites, and ad blockers eating
        into what’s left of it while slashing ad revenues.
      </p>
      <a href="#" class="btn btn-primary btn-sm">Learn More</a>
    </div>
  </div>
  <div class="mt-4">
    <StatusPage></StatusPage>
  </div>
  <div class="mt-1">
    <CommentPage></CommentPage>
  </div>
</template>

<script>
import StatusPage from "@/components/StatusPage.vue";
import CommentPage from "@/components/CommentPage.vue";
export default {
  name: "CaseViewPage",
  components: { StatusPage, CommentPage },
};
</script>

<style scoped>
.centered {
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
}
.profile-image {
  width: 3rem;
  height: 3rem;
}
</style>


