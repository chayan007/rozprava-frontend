<template>
  <!-- Profile Card -->
  <div class="profile-card">
    <h3 class="h5 m-2 mb-3"><br />Create/Upload</h3>
    <div class="card bg-primary shadow-soft border-light m-2">
      <div class="card-body">
        <div
          class="
            profile-image
            bg-primary
            shadow-soft
            border border-light
            rounded-circle
            p-0
            row
            m-0
            align-items-center
            justify-content-center
          "
        >
          <img
            src="\assets\img\team\profile-picture-5.jpg"
            class="card-img-top rounded-circle"
            alt="Avatar"
          />
        </div>
        <!-- <span class="h6 font-weight-bold text-gray mb-3"
          >Its time to give your opinion</span
        > -->
        <br />
        <input
          type="Title"
          class="form-control1 p-0 font-weight-bolder"
          placeholder="Give a Title"
          v-model="title"
          id="CaseTitle"
          aria-describedby="Title"
        />
        <br />
        <textarea
          class="form-control1 p-0"
          placeholder="Enter your Opinion..."
          v-model="description"
          id="Opinion"
          rows="7"
        ></textarea>
        <br />
        <label for="GiveTags">Select category for your case:</label>

        <input
          list="GiveTags"
          class="tags-input form-control1 p-0"
          v-on:change="addTag"
          v-model="newTag"
          name="GiveTag"
          id="GiveTag"
          v-show="!tagAdded"
        />
        <datalist id="GiveTags">
          <option value="Politics"></option>
          <option value="Sports"></option>
          <option value="Education"></option>
          <option value="Adult"></option>
          <option value="Spritiual"></option>
          <option value="Entertainment"></option>
          <option value="Business"></option>
          <option value="Technology"></option>
          <option value="Nature"></option>
        </datalist>
        <br />
        <div class="tags-div">
          <span class="pb-3" v-for="(tag, index) in tags" :key="tag.id">
            <p class="tag h6 rounded-pill shadow pr-3 pl-3 pt-2 pb-2 mr-2">
              {{ tag.tag }}
              <span class="pl-3" v-on:click="removeTag(index)"> x</span>
            </p>
          </span>
        </div>
        <br />
        <!-- <label for="Mentions">Mention People:</label>
        <input                commenting mention
          type="Mentions"
          class="form-control1 p-0"
          placeholder="Mention People using @"
          v-model="mention"
          id="Mentions"
          aria-describedby="Mentions"
        /> -->
      </div>

      <div class="card-footer row m-0 navbar pt-0">
        <div class="anonymous-div mb-2">
          <label class="switch mr-2">
            <input type="checkbox" v-model="isAnonymous" />
            <span class="slider round"></span>
          </label>
          <label class="h6 form-check-label" for="flexSwitchCheckDefault">
            <img class="anonymous-icon" src="@/assets/anonymous.png" alt="" />
            Post Anonymously</label
          >
        </div>

        <!-- Button Modal -->
        <div class="row col col-9">
          <button
            type="submit"
            class="btn attach-btn mr-2 rounded-0 p-0 pr-2"
            data-target="#modal-default"
          >
            <img
              @click="upload"
              class="attach-icon"
              src="@/assets/attachment.svg"
              alt=""
            />
          </button>
          <small class="row align-items-center col col-9 p-0 m-0"
            >PDF, Images, Links, Audios, Videos, etc</small
          >
          <small
            v-if="files"
            class="row align-items-center col col-12 mt-2 p-0 m-0"
          >
            <p
              v-for="(filename, index) in files"
              :key="filename.name"
              class="
                tag
                h6
                d-flex
                m-0
                align-items-center
                rounded-pill
                shadow
                py-2
                px-3
                mb-2
                mr-2
              "
            >
              <span class="file-tag"> {{ filename.name }}</span>
              <span class="pl-3" v-on:click="removeFile(index)"> x </span>
            </p>
          </small>
        </div>
        <!-- Modal Content -->
        <div
          class="modal fade"
          id="modal-default"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modal-default"
          aria-hidden="true"
          style="display: none"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="h6 modal-title mb-0" id="modal-title-default">
                  Upload
                </h2>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body"></div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="post-btn btn btn-dark rounded-pill justify-content-end"
          v-on:click="createCase"
        >
          Post
        </button>
        <div class="m-0 show_hide" id="show">
          <UploadComponent @clicked="addFile" />
        </div>
      </div>
    </div>
  </div>

  <!-- End of Profile Card -->
</template>

<script>
import { stringFormat } from "@/helpers";
import { config } from "@/configurations";
import { caseService } from "@/services";
import router from "@/router";
import Upload from "@/components/Proof/Upload.vue";

export default {
  name: "Create",
  components: { UploadComponent: Upload },
  data() {
    return {
      title: "",
      description: "",
      tags: [],
      newTag: "",
      category: "",
      isAnonymous: false,
      // mention: "",
      tagAdded: false,
      files: [],
    };
  },

  methods: {
    addTag() {
      const newTag = {
        id: this.tags.length,
        tag: this.newTag,
      };
      this.tags.push(newTag);
      this.newTag = "";
      this.tagAdded = true;
    },
    removeTag(index) {
      this.tags.splice(index, 1);
      this.tagAdded = false;
    },

    addFile(files) {
      this.files.push(files);
      this.upload();
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },

    createCase() {
      const { title, description, tags, isAnonymous } = this;
      const { dispatch } = this.$store;

      if (!title) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Title",
            []
          ).trim(),
          { root: true }
        );
        return;
      }

      if (!description) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Description",
            []
          ).trim(),
          { root: true }
        );
        return;
      }

      if (!tags) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Category",
            []
          ).trim(),
          { root: true }
        );
        return;
      }

      let categoryId = config.caseConfig.categories.OTHER;
      if (tags.length !== 0) {
        let userSelectedCategory = tags[0].tag.toUpperCase();
        if (userSelectedCategory in config.caseConfig.categories) {
          categoryId = config.caseConfig.categories[userSelectedCategory];
        }
      }

      caseService
        .createCase({
          question: title,
          description: description,
          category: categoryId,
          is_anonymous: isAnonymous,
          for_label: "for",
          against_label: "against",
          group_uuid: this.$route.params.uuid,
        })
        .then((caseResponse) => {
          this.submitFiles(caseResponse.slug);
          console.log(caseResponse.slug);
          router.push({
            name: "CaseDetail",
            params: { slug: caseResponse.slug },
          });
        })
        .catch((error) => {
          dispatch("alertStore/error", error);
        });
    },
    upload() {
      const element = document.getElementById("show");
      element.classList.toggle("show_hide");
    },

    submitFiles(slug) {
      const { dispatch } = this.$store;

      // convert the list of files into json object
      let proofRequestBody = {};
      for (let x = 0; x < this.files.length; x++) {
        proofRequestBody[`proof_${x + 1}`] = this.files[x];
      }
      caseService.uploadProof(proofRequestBody, slug).catch((error) => {
        dispatch("alertStore/error", error);
      });
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
  background-color: #f2f2f5;
  background-clip: padding-box;
  border: none;
  border-bottom: 0.07rem solid #d1d9e6;
  border-radius: 0rem;
  transition: all 0.3s ease-in-out;
}
.profile-image {
  width: 3.2em;
  height: 3.2em;
}
.card-img-top {
  width: 3.1em;
  height: 3.1em;
}
.form-control1:focus {
  outline: none;
}
.tags-div {
  border-bottom: 0.07rem solid #d1d9e6;
}
.tag {
  background-color: #ffffff;
  display: inline-block;
}
.attach-btn {
  box-shadow: none;
  border: none;
  border-right: 1px solid;
}
.post-btn {
  justify-self: end;
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
.form-check-input {
  border: 1px solid;
}
.tags-input {
  border: none;
}

.file-tag {
  display: inline-block;
  width: 6em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#show {
  position: absolute !important;
  bottom: 5em;
  left: 2.5em;
}

/*Upload toogle*/
.show_hide {
  display: none !important;
}
</style>
