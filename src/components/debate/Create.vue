<template>
  <div class="create-comment-form-inner shadow p-2">
    <textarea
      v-model="comment"
      class="form-control1"
      name="Comment"
      id=""
      cols="30"
      rows="8"
      placeholder="Add a comment here..."
    >
    </textarea>

    <div class="anonymous-div mb-2 mt-3">
      <label class="switch mr-2">
        <input type="checkbox" v-model="isAnonymous" />
        <span class="slider round"></span>
      </label>
      <label class="h6 form-check-label" for="flexSwitchCheckDefault">
        <img class="anonymous-icon" src="@/assets/anonymous.png" alt="" /> Post
        Anonymously</label
      >
    </div>

    <div class="row w-100 m-0 mt-3 mb-3">
      <button
        @click="openUpload = !openUpload"
        type="submit"
        class="btn attach-btn mr-2 rounded-0 p-0 pr-2"
        data-toggle="modal"
        data-target="#modal-default"
      >
        <img class="attach-icon" src="@/assets/attachment.svg" alt="" />
      </button>
      <small class="row align-items-center col col-9 p-0 m-0"
        >PDF, Images, Links, Audios, Videos, etc
      </small>
       <div v-if="openUpload" class="upload-box d-flex justify-content-center w-100">
         <UploadComponent class="upload position-absolute" @clicked="addFile" />
       </div>
    </div>

    <div class="com-post-btn-box row m-0">
      <p class="col col-12 pl-2 m-0">Post:</p>
      <div class="col col-6 p-2">
        <div
          class="p-2 post-com-btn post-com-post-for shadow"
          v-on:click="createDebate(1)"
        >
          <img class="post-com-icon" src="@/assets/like.svg" alt="" />
          <h6 class="text-center m-0">In Favour</h6>
        </div>
      </div>
      <div class="col col-6 p-2">
        <div
          class="p-2 post-com-btn post-com-post-aga shadow"
          v-on:click="createDebate(0)"
        >
          <img class="post-com-icon" src="@/assets/dislike.svg" alt="" />
          <h6 class="text-center m-0">Against</h6>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { stringFormat } from "@/helpers";
import { config } from "@/configurations";
import { debateService } from "@/services";
import { caseService } from "@/services";
import router from "@/router";
import Upload from "@/components/Proof/Upload.vue";

export default {
  name: "DebateCreate",
  props: ["caseUuid", "commentSection"],
  components: { UploadComponent: Upload },
  data() {
    return {
      uuid: this.caseUuid,
      comment: "",
      isAnonymous: 0,
      inclination: null,
      openUpload: 0,
      files: []
    };
  },
  watch: {
    caseUuid: function () {
      this.comment = "";
    },
  },

  methods: {
    addFile(files) {
      this.files.push(files);
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    submitFiles(slug) {
      const { dispatch } = this.$store;
      console.log(slug);
      // convert the list of files into json object
      let proofRequestBody = {};
      for (let x = 0; x < this.files.length; x++) {
        proofRequestBody[`proof_${x + 1}`] = this.files[x];
      }
      caseService.uploadProof(proofRequestBody, slug).catch((error) => {
        dispatch("alertStore/error", error);
      });
    },

    createDebate(incline) {
      console.log(this.uuid);
      this.inclination = incline;
      const { comment, isAnonymous, inclination, uuid } = this;
      const { dispatch } = this.$store;

      if (!comment) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Comment",
            []
          ).trim(),
          { root: true }
        );
        return;
      }
      if (this.commentSection === "Debate") {
        debateService
          .createDebate(
            {
              comment: comment,
              is_posted_anonymously: isAnonymous,
              inclination: inclination,
            },
            uuid
          )
          .then(() => {
            const slug = this.$route.params.slug;
            router.push({
              name: "CaseDetail",
              params: { slug: slug },
            });
          })
          .catch(() => {
            dispatch(
              "alertStore/error",
              config.messagingConfig.messages.error.unknown_error
            );
          });
          this.$parent.toggleComment();
          this.$router.go()
      } else {
        debateService
          .createRebuttal(
            {
              debate_uuid: uuid,
              comment: comment,
              is_posted_anonymously: isAnonymous,
              inclination: inclination,
            }
          )
          .then(() => {
            const slug = this.$route.params.slug;
            router.push({
              name: "CaseDetail",
              params: { slug: slug },
            });
          })
          .catch(() => {
            dispatch(
              "alertStore/error",
              config.messagingConfig.messages.error.unknown_error
            );
          });
          this.$parent.toggleComment();
          this.$router.go()
      }

    },
    
  },
};
</script>


<style scoped>
.form-control1 {
  display: block;
  width: 100%;
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #44476a;
  background-color: white;
  background-clip: padding-box;
  border: none;
  border-bottom: 0.07rem solid #d1d9e6;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
}
.form-control1:focus {
  outline: none;
}
.upload {
  bottom: 11rem;
}
.create-comment-form-inner {
  background-color: rgb(243, 243, 243);
  border-radius: 20px;
  border: 2px solid white;
}
.attach-btn {
  box-shadow: none;
  border: none;
  border-right: 1px solid;
}
.attach-icon {
  width: 1.5em;
}
.post-com-btn {
  border-radius: 15px;
}
.post-com-btn:hover {
  border: 2px solid white;
  transform: scale(1.1);
}
.post-com-post-for {
  background-color: #e7ffe5;
}
.post-com-post-aga {
  background-color: #ffebe5;
}
.post-com-icon {
  width: 1.4em;
  position: absolute;
  left: 1.5em;
}

.anonymous-div {
  display: block;
  width: 100%;
}
.attach-icon,
.anonymous-icon {
  width: 1.5em;
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 2.7em;
  height: 1.5em;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 1.21em;
  width: 1.21em;
  left: 0.15em;
  bottom: 0.15em;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #31344b;
}
input:focus + .slider {
  box-shadow: 0 0 1px #31344b;
}
input:checked + .slider:before {
  -webkit-transform: translateX(1.15em);
  -ms-transform: translateX(1.15em);
  transform: translateX(1.15em);
}
</style>
