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
                  data-v-6db336fc=""
                  style="margin-top: 0px; margin-bottom: 0px; height: 104px"
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
              >Change <a style="color: green">Profile Password</a></span
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

                <div v-if="true">
                  <!-- available username == true-->

                  <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer01"
                    value="Username"
                    required="Mark"
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>

                <div v-else>
                  <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServerUsername"
                    required=""
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
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
              ><a style="color: green">Advanced</a
              ><span class="icon ml-3"
                ><span class="fas fa-plus"></span></span></span
          ></a>
          <div class="collapse" id="panel-9" data-v-6db336fc="" style="">
            <div class="pt-3" data-v-6db336fc="">
              <AdvancedSettings />
            </div>
          </div>
        </div>
      </div>
      <!--End of Accordion-->
      <button class="btn btn-primary text-success ml-3 mt-2" type="button" >  
        <a style="color: green">Save</a>
      </button>
      <button class="btn btn-primary text-success ml-3 mt-2" type="button">
        <a style="color: red">Discard</a>
      </button>
    </div>
  </div>
</template>

<script>
import AdvancedSettings from "@/components/AdvancedSettings.vue";
export default {
  name: "SettingsPage",
  components: { AdvancedSettings },
};
</script>

<style scoped></style>
