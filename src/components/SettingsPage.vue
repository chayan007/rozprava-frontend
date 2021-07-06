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
                src="../assets/google.svg"
                alt="Google"
                width="25"
              /><img
                class="mr-2"
                src="../assets/facebook.svg"
                alt="Google"
                width="25"
              /><img
                class="mr-2"
                src="../assets/twitter.svg"
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
                        <input type="email" class="form-control" v-model="profession" />
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
                        <legend class="h6">Choose your Gender</legend>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            v-model="gender_male"
                            id="exampleRadios1"
                            value="male"
                            checked=""
                          />
                          <label class="form-check-label" for="exampleRadios1">
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            v-model="gender_female"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="female"
                          />
                          <label class="form-check-label" for="exampleRadios2">
                            Female
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            v-model="gender_ratherNotSay"
                            name="exampleRadios"
                            id="exampleRadios3"
                            value="ratherNotSay"
                          />
                          <label class="form-check-label" for="exampleRadios3">
                            Rather Not Say
                          </label>
                        </div>
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
                        <legend class="h6">Choose your Status</legend>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            v-model="relationshipStatus_single"
                            name="exampleRadios1"
                            id="exampleRadios4"
                            value="single"
                            checked=""
                          />
                          <label class="form-check-label" for="exampleRadios4">
                            Single
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            v-model="relationshipStatus_engaged"
                            name="exampleRadios1"
                            id="exampleRadios5"
                            value="Engaged"
                          />
                          <label class="form-check-label" for="exampleRadios5">
                            Engaged
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            v-model="relationshipStatus_married"
                            name="exampleRadios1"
                            id="exampleRadios6"
                            value="married"
                          />
                          <label class="form-check-label" for="exampleRadios6">
                            Married
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            v-model="relationshipStatus_divorced"
                            name="exampleRadios1"
                            id="exampleRadios7"
                            value="divorced"
                          />
                          <label class="form-check-label" for="exampleRadios7">
                            Divorced
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                             v-model="relationshipStatus_complicated"
                            name="exampleRadios1"
                            id="exampleRadios8"
                            value="complicated"
                          />
                          <label class="form-check-label" for="exampleRadios8">
                            Complicated
                          </label>
                        </div>
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
      gender_male: "",
      gender_female: "",
      gender_ratherNotSay: "", 
      relationshipStatus_single: "",
      relationshipStatus_engaged: "",
      relationshipStatus_married: "",
      relationshipStatus_divorced: "",
      relationshipStatus_complicated: "",
      submitted: false,
    };
  },
  methods: {
    handleProfilePicture(e) {
       var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
         return;
        this.profilePicture = files[0];
      },
      
    handleSubmit() {
      this.submitted = true;
      const { handleProfilePicture, username, bio, password1, password2, DOB, contact, address, profession, gender_male, gender_female, gender_ratherNotSay, relationshipStatus_single, relationshipStatus_engaged, relationshipStatus_married, relationshipStatus_divorced, relationshipStatus_complicated } = this;
      const { dispatch } = this.$store;
      let updateFields = {};
      if (bio) {
        updateFields["bio"] = bio;
        if (bio.length >= 200) {dispatch(
          "alertStore/error",
          config.messagingConfig.messages.error.field_error,
          { root: true }
        );
        }
      }
      if (handleProfilePicture) {
        updateFields["handleProfilePicture"] = handleProfilePicture;
      }
      if (username) {
        updateFields["username"] = username;
      }
      if (password1 && password2) {
        updateFields["password"] = password1;
        if (password1.trim() !== password2.trim()) {dispatch(
          "alertStore/error",
          config.messagingConfig.messages.error.password_mismatch,
          { root: true }
        );
        }
      }
      if (DOB) {
        updateFields["DOB"] = DOB;
      }
      if (contact) {
        updateFields["contact"] = contact;
      }
      if (address) {
        updateFields["address"] = address;
      }
      if (profession) {
        updateFields["profession"] = profession;
      }
      if (gender_male) {
        updateFields["gender_male"] = gender_male;
      }
      if (gender_female) {
        updateFields["gender_female"] = gender_female;
      }
      if (gender_ratherNotSay) {
        updateFields["gender_ratherNotSay"] = gender_ratherNotSay;
      }
      if (relationshipStatus_single) {
        updateFields["relationshipStatus_single"] = relationshipStatus_single;
      }
      if (relationshipStatus_engaged) {
        updateFields["relationshipStatus_engaged"] = relationshipStatus_engaged;
      }
      if (relationshipStatus_married) {
        updateFields["relationshipStatus_married"] = relationshipStatus_married;
      }
      if (relationshipStatus_divorced) {
        updateFields["relationshipStatus_divorced"] = relationshipStatus_divorced;
      }
      if (relationshipStatus_complicated) {
        updateFields["relationshipStatus_complicated"] = relationshipStatus_complicated;
      }
      

      dispatch("userStore/setting", {
        updateFields
      });
    },
  },
};
</script>

<style scoped></style>
