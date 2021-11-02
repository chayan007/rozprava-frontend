<template>
  <div class="case-outer p-3 col col-12">
    <div class="card case-inner shadow-soft col col-12 pt-3 pb-2 pl-3 pr-3">
      <!-- case-profile header -->
      <div class="case-profile-box row m-0 justify-content-between">
        <div class="profile" v-if="detail.profile">
          <router-link :to="'/profile/' + detail.profile.user.username">
            <!-- <img v-if="detail.profile.display_pic"
            class="avatar-sm mr-2 img-fluid rounded-circle"
            :src="detail.profile.display_pic"
            alt="display_pic"
          /> -->
            <img
              class="avatar-md mr-2 img-fluid rounded-circle"
              src="@\assets\profile-picture-1.jpg"
              alt="display_pic"
            />
            <p class="m-0 d-inline">{{ detail.profile.user.username }}</p>
          </router-link>
        </div>

        <div v-else class="profile anonymous-tag">
          <img
            class="avatar-md mr-2 img-fluid rounded-circle"
            src="@\assets\anonymous.png"
            alt="display_pic"
          />
          <p class="m-0 d-inline">Anonymous</p>
        </div>

        <div class="case-menu row m-0 align-items-center">
          <span class="dropdown btn-group mr-0">
            <span
              class="dropdown-toggle-split mr-0 p-0"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img class="case-menu-btn" src="@/assets/menu-dots.svg" />
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
      </div>
      <!-- case-profile header -->
      <!-- case content -->
      <router-link :to="'/case/' + detail.slug">
        <div class="case-content text-left">
          <h3 class="case-head h5 card-title mt-3 mb-2">
            {{ detail.question }}
          </h3>
          <p class="case-desc card-text">
            {{ detail.description }}
          </p>
        </div>
      </router-link>
      <!-- case content -->
      <!-- proofs -->
      <div
        v-if="showProofs && detail.proofs"
        class="proofs-box w-100 my-4 d-flex"
      >
        <div
          class="proof mr-4"
          v-for="proof in detail.proofs"
          :key="proof.uuid"
        >
          <Proof :proof="proof" />
        </div>
      </div>
      <!-- proof -->
      <!-- metrics -->
      <div
        class="
          mt-0
          metrics-box
          p-1
          row
          m-0
          justify-content-between
          align-items-center
        "
      >
        <div class="views">
          <img class="metrics-icon p-1" src="@/assets/Eye.svg" alt="" />
          {{ detail.metrics[0] }}
        </div>

        <div class="likes-box row m-0">
          <span @click="like()" class="row m-0 mr-3 align-items-center">
            <img class="metrics-icon mr-1" src="@/assets/like.svg" alt="" />
            {{ detail.metrics[1] }}
          </span>
          <span class="row m-0 align-items-center">
            <img class="metrics-icon mr-1" src="@/assets/dislike.svg" alt="" />
            {{ detail.metrics[2] }}
          </span>
        </div>

        <div
          class="w-100 mt-2 row m-0 align-items-center"
        >
          <div>{{ detail.proofs.length }} Proofs</div>
          <div class="ml-3" v-if="detail.proofs.length">
            <small class="text-left m-0" v-if="!showProofs" @click="showProofs = 1">
              Show proofs
            </small>
            <small class="text-left m-0" v-else @click="showProofs = 0">
              Hide proofs
            </small>
          </div>
        </div>
      </div>
      <!-- metrics -->
    </div>
  </div>
</template>

<script>
import { activityService } from "@/services";
import { config } from "@/configurations";
import Proof from "@/components/case/Proofs.vue";
export default {
  name: "Case",
  props: ["detail"],
  components: { Proof },
  data() {
    return {
      liked: 0,
      disliked: 0,
      showProofs: 1,
    };
  },
  methods: {
    hasValue(key) {
      return Object.keys(this.detail).includes(key);
    },
    like() {
      const uuid = this.detail.uuid;
      activityService
        .getActivity(uuid, 1)
        .then(() => {
          this.liked = 1;
        })
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
        });
    },
  },
};
</script>

<style scoped>
.case-inner,
.dropdown-menu {
  background-color: #fff;
  border-radius: 15px;
}

.dropdown-menu {
  box-shadow: 3px 3px 15px -2px rgba(63, 63, 63, 0.726);
}
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
.case-menu-btn {
  width: 1.5em;
}
.case-dropdown {
  left: -6em !important;
  z-index: 5;
}
.case-desc {
  white-space: pre-wrap;
}

.metrics-icon {
  width: 1.7em;
}
.border-metrics-img {
  border: 2px solid #fff;
  position: relative;
}
.rt-2 {
  right: 0.5em;
}
.rt-3 {
  right: 1em;
}
/* proofs */
.proofs-box {
  overflow-x: auto;
  white-space: nowrap;
}
.proofs-box::-webkit-scrollbar {
  display: none;
}
</style>