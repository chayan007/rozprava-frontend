<template>
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
        <span class="icon-title h6 mb-0 font-weight-bold">Edit D.O.B</span>
      </a>
      <div class="collapse" id="panel-10">
        <div class="pt-3">
          <div class="form-group">
            <label class="h6" for="exampleInputDate1">Choose a date</label>
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
        <span class="icon-title h6 mb-0 font-weight-bold">Update Contact</span>
      </a>
      <div class="collapse" id="panel-11">
        <div class="pt-3">
          <div class="form-group mb-4 focused">
            <label for="exampleInputEmail67">Phone Number</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your number with anyone else.</small
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
        <span class="icon-title h6 mb-0 font-weight-bold">Update Address</span>
      </a>
      <div class="collapse" id="panel-12">
        <div class="pt-3">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Enter your Address</label>
            <textarea
              class="form-control"
              placeholder="Address here..."
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
            <input type="email" class="form-control" />
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
        <span class="icon-title h6 mb-0 font-weight-bold">Update Gender</span>
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
                id="exampleRadios1"
                value="option1"
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
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Female
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
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
                name="exampleRadios1"
                id="exampleRadios4"
                value="option4"
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
                name="exampleRadios1"
                id="exampleRadios5"
                value="option5"
              />
              <label class="form-check-label" for="exampleRadios5">
                Engaged
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios1"
                id="exampleRadios6"
                value="option6"
              />
              <label class="form-check-label" for="exampleRadios6">
                Married
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios1"
                id="exampleRadios7"
                value="option7"
              />
              <label class="form-check-label" for="exampleRadios7">
                Divorced
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios1"
                id="exampleRadios8"
                value="option8"
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
</template>

<script>

export default {
  name: "AdSettings",
  components: {},
};
</script>
