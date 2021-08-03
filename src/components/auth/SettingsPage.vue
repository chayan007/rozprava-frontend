<template>
  <div class="row justify-content-center mt-2" data-v-6db336fc="">
    <div class="col-12 col-md-10 col-lg-8" data-v-6db336fc="">
      <!--Accordion-->
      <div class="accordion" data-v-6db336fc="">
        <div class="card card-sm card-body bg-primary mb-0" data-v-6db336fc="">
          <a
            href="#panel-4"
            data-target="#panel-4"
            class="accordion-panel-header collapsed"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="panel-1"
            data-v-6db336fc=""
            ><span
              class="icon-title h6 mb-0 font-weight-bold"
              data-v-6db336fc=""
              >Change Profile Picture</span
            ></a
          >
          <div class="collapse" id="panel-4" data-v-6db336fc="" style="">
            <div class="pt-3" data-v-6db336fc="">
              <div class="custom-file pd-6" data-v-6db336fc="">
                <input
                  type="file"
                  class="custom-file-input"
                  id="customFile"
                  @change="handleProfilePicture"
                  aria-label="File upload"
                  data-v-6db336fc=""
                /><label
                  class="custom-file-label"
                  for="customFile"
                  data-v-6db336fc=""
                  >Choose file</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card card-sm card-body bg-primary mb-0" data-v-6db336fc="">
          <a
            href="#panel-5"
            data-target="#panel-5"
            class="accordion-panel-header collapsed"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="panel-1"
            data-v-6db336fc=""
            ><span
              class="icon-title h6 mb-0 font-weight-bold"
              data-v-6db336fc=""
              >Change BIO</span
            ></a
          >
          <div class="collapse" id="panel-5" data-v-6db336fc="" style="">
            <div class="pt-3" data-v-6db336fc="">
              <div class="form-group" data-v-6db336fc="">
                <label for="exampleFormControlTextarea1" data-v-6db336fc=""
                  >Enter your BIO here</label
                ><textarea
                  class="form-control"
                  placeholder="Hey there! I am using Rozprava..."
                  id="exampleFormControlTextarea1"
                  rows="4"
                  v-model="bio"
                  data-v-6db336fc=""
                  style="margin-top: 0px; margin-bottom: 0px; height: 104px;"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-sm card-body bg-primary mb-0" data-v-6db336fc="">
          <a
            href="#panel-6"
            data-target="#panel-6"
            class="accordion-panel-header collapsed"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="panel-1"
            data-v-6db336fc=""
            ><span
              class="icon-title h6 mb-0 font-weight-bold"
              data-v-6db336fc=""
              >Change <a style="color:green">Profile Password</a></span
            ></a
          >
          <div class="collapse" id="panel-6" data-v-6db336fc="" style="">
            <div class="pt-3" data-v-6db336fc="">
              <div class="form-group" data-v-6db336fc="">
                <label for="exampleInputPassword1" data-v-6db336fc=""
                  >Current Password</label
                >
                <div class="input-group mb-4" data-v-6db336fc="">
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    type="password"
                    v-model="password1"
                    aria-label="Password"
                    data-v-6db336fc=""
                  />
                  <div class="input-group-append" data-v-6db336fc="">
                    <span class="input-group-text" data-v-6db336fc=""
                      ><span class="fas fa-unlock-alt" data-v-6db336fc=""></span
                    ></span>
                  </div>
                </div>
              </div>

              <label for="exampleInputPassword1" data-v-6db336fc=""
                >Enter New Password</label
              >
              <div class="input-group mb-4" data-v-6db336fc="">
                <input
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  v-model="password2"
                  type="password"
                  aria-label="Password"
                  data-v-6db336fc=""
                />
                <div class="input-group-append" data-v-6db336fc="">
                  <span class="input-group-text" data-v-6db336fc=""
                    ><span class="fas fa-unlock-alt" data-v-6db336fc=""></span
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-sm card-body bg-primary mb-0" data-v-6db336fc="">
          <a
            href="#panel-7"
            data-target="#panel-7"
            class="accordion-panel-header collapsed"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="panel-1"
            data-v-6db336fc=""
            ><span
              class="icon-title h6 mb-0 font-weight-bold"
              data-v-6db336fc=""
              >Social Links<img
                class="ml-6 mr-2"
                src="../../assets/google.svg"
                alt="Google"
                width="25"
              /><img
                class="mr-2"
                src="../../assets/facebook.svg"
                alt="Google"
                width="25"
              /><img
                class="mr-2"
                src="../../assets/twitter.svg"
                alt="Google"
                width="25"
              />
            </span>
          </a>
        </div>
        <div class="card card-sm card-body bg-primary mb-0" data-v-6db336fc="">
          <a
            href="#panel-8"
            data-target="#panel-8"
            class="accordion-panel-header collapsed"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="panel-1"
            data-v-6db336fc=""
            ><span
              class="icon-title h6 mb-0 font-weight-bold"
              data-v-6db336fc=""
              >Change Username</span
            ></a
          >
          <div class="collapse" id="panel-8" data-v-6db336fc="" style="">
            <div class="pt-3" data-v-6db336fc="">
              <div class="form-group focused">
                <label for="validationServer01">New Username</label>

                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer01"
                  placeholder="Username"
                  v-model="username"
                  required="Mark"
                />
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-sm card-body bg-primary mb-0" data-v-6db336fc="">
          <a
            href="#panel-9"
            data-target="#panel-9"
            class="accordion-panel-header collapsed"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="panel-1"
            data-v-6db336fc=""
            ><span
              class="icon-title h6 mb-0 font-weight-bold"
              data-v-6db336fc=""
              ><a style="color:green">Advanced</a
              ><span class="icon ml-3"
                ><span class="fas fa-plus"></span></span></span
          ></a>
          <div class="collapse" id="panel-9" data-v-6db336fc="" style="">
            <div class="pt-3" data-v-6db336fc="">
              <div class="accordion">
                <div class="card card-sm card-body bg-primary mb-0">
                  <a
                    href="#panel-10"
                    data-target="#panel-10"
                    class="accordion-panel-header"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="panel-1"
                  >
                    <span class="icon-title h6 mb-0 font-weight-bold"
                      >Edit D.O.B</span
                    >
                  </a>
                  <div class="collapse" id="panel-10">
                    <div class="pt-3">
                      <div class="form-group">
                        <label class="h6" for="exampleInputDate1"
                          >Choose a date</label
                        >
                        <div class="input-group mb-4">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><span class="far fa-calendar-alt"></span
                            ></span>
                          </div>
                          <input
                            class="form-control datepicker"
                            id="exampleInputDate1"
                            placeholder="Select date"
                            v-model="DOB"
                            type="text"
                            aria-label="Date with icon left"
                          />
                        </div>
                      </div>
                      <div class="custom-control custom-switch mt-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customSwitch6"
                        />
                        <label class="custom-control-label" for="customSwitch6"
                          >Visible to <a style="color:green">PUBLIC</a></label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card-sm card-body bg-primary mb-0">
                  <a
                    href="#panel-11"
                    data-target="#panel-11"
                    class="accordion-panel-header"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="panel-1"
                  >
                    <span class="icon-title h6 mb-0 font-weight-bold"
                      >Update Contact</span
                    >
                  </a>
                  <div class="collapse" id="panel-11">
                    <div class="pt-3">
                      <div class="form-group mb-4 focused">
                        <label for="exampleInputEmail67">Phone Number</label>
                        <input
                          type="email"
                          class="form-control"
                          v-model="contact"
                          aria-describedby="emailHelp"
                        />
                        <small id="emailHelp" class="form-text text-muted"
                          >We'll never share your number with anyone
                          else.</small
                        >
                      </div>

                      <div class="custom-control custom-switch mt-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customSwitch5"
                        />
                        <label class="custom-control-label" for="customSwitch5"
                          >Visible to <a style="color:green">PUBLIC</a></label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card-sm card-body bg-primary mb-0">
                  <a
                    href="#panel-12"
                    data-target="#panel-12"
                    class="accordion-panel-header"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="panel-1"
                  >
                    <span class="icon-title h6 mb-0 font-weight-bold"
                      >Update Address</span
                    >
                  </a>
                  <div class="collapse" id="panel-12">
                    <div class="pt-3">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1"
                          >Enter your Address</label
                        >
                        <textarea
                          class="form-control"
                          placeholder="Address here..."
                          v-model="address"
                          id="exampleFormControlTextarea1"
                          rows="4"
                        ></textarea>
                      </div>

                      <div class="custom-control custom-switch mt-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customSwitch1"
                        />
                        <label class="custom-control-label" for="customSwitch1"
                          >Visible to <a style="color:green">PUBLIC</a></label
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card card-sm card-body bg-primary mb-0">
                  <a
                    href="#panel-13"
                    data-target="#panel-13"
                    class="accordion-panel-header"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="panel-1"
                  >
                    <span class="icon-title h6 mb-0 font-weight-bold"
                      >Update Profession</span
                    >
                  </a>
                  <div class="collapse" id="panel-13">
                    <div class="pt-3">
                      <div class="form-group mb-4 focused">
                        <label for="exampleInputEmail67">Profession</label>
                        <input
                          type="email"
                          class="form-control"
                          v-model="profession"
                        />
                      </div>

                      <div class="custom-control custom-switch mt-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customSwitch2"
                        />
                        <label class="custom-control-label" for="customSwitch2"
                          >Visible to <a style="color:green">PUBLIC</a></label
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card card-sm card-body bg-primary mb-0">
                  <a
                    href="#panel-14"
                    data-target="#panel-14"
                    class="accordion-panel-header"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="panel-1"
                  >
                    <span class="icon-title h6 mb-0 font-weight-bold"
                      >Update Gender</span
                    >
                  </a>
                  <div class="collapse" id="panel-14">
                    <div class="pt-3">
                      <fieldset>
                        <legend class="h6" for="gender">Choose your Gender</legend>
                        <select id="gender" v-model="gender">
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Fale</option>
                          <option value="TRANS">Transgender</option>
                          <option value="OTHER">Other</option>
                        </select>
                        <!-- End of Radio -->
                      </fieldset>
                      <div class="custom-control custom-switch mt-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customSwitch3"
                        />
                        <label class="custom-control-label" for="customSwitch3"
                          >Visible to <a style="color:green">PUBLIC</a></label
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card card-sm card-body bg-primary mb-0">
                  <a
                    href="#panel-15"
                    data-target="#panel-15"
                    class="accordion-panel-header"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="panel-1"
                  >
                    <span class="icon-title h6 mb-0 font-weight-bold"
                      >Update Relationship Status</span
                    >
                  </a>
                  <div class="collapse" id="panel-15">
                    <div class="pt-3">
                      <fieldset>
                        <legend class="h6" for="relationship_status">Choose your Status</legend>
                        <select id="relationship_status" v-model="relationship_status">
                          <option value="0">Single</option>
                          <option value="1">Engaged</option>
                          <option value="2">Married</option>
                          <option value="3">Committed</option>
                          <option value="4" >Widowed</option>
                        </select>
                        <!-- End of Radio -->
                      </fieldset>
                      <div class="custom-control custom-switch mt-2">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customSwitch4"
                        />
                        <label class="custom-control-label" for="customSwitch4"
                          >Visible to <a style="color:green">PUBLIC</a></label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End of Accordion-->
      <button
        class="btn btn-primary text-success ml-3 mt-2"
        type="button"
        v-on:click="handleSubmit"
      >
        <a style="color:green">Save</a>
      </button>
      <button class="btn btn-primary text-success ml-3 mt-2" type="button">
        <a style="color:red">Discard</a>
      </button>
    </div>
  </div>
</template>

<script>
import { config } from "@/configurations";

export default {
  name: "SettingsPage",
  components: {},
  data() {
    return {
      profilePicture: "",
      username: "",
      bio: "",
      password1: "",
      password2: "",
      DOB: "",
      contact: "",
      address: "",
      profession: "",
      gender: "",
      relationship_status: "",
      submitted: false,
    };
  },
  methods: {
    handleProfilePicture(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.profilePicture = files[0];
    },

    handleSubmit() {
      this.submitted = true;
      const {
        profilePicture,
        username,
        bio,
        password1,
        password2,
        DOB,
        contact,
        address,
        profession,
        gender,
        relationship_status,
      } = this;
      const { dispatch } = this.$store;
      let updateFields = {};
      if (bio) {
        updateFields["bio"] = bio;
        if (bio.length >= 200) {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.field_error,
            { root: true }
          );
        }
      }
      if (profilePicture) {
        updateFields["display_pic"] = profilePicture;
      }
      if (username) {
        updateFields["username"] = username;
      }
      if (password1 && password2) {
        updateFields["password"] = password1;
        if (password1.trim() !== password2.trim()) {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.password_mismatch,
            { root: true }
          );
        }
      }
      if (DOB) {
        updateFields["dob"] = DOB;
      }
      if (contact) {
        updateFields["mobile_number"] = contact;
      }
      if (address) {
        updateFields["address"] = address;
      }
      if (profession) {
        updateFields["profession"] = profession;
      }
      if (gender) {
        updateFields["gender"] = gender;
      }
      if (relationship_status) {
        updateFields["relationship_status"] = relationship_status;
      }

      dispatch("userStore/settings", updateFields);
    },
  },
};
</script>

<style scoped></style>
