<template>
  <div class="group-settings mt-6">
    <div class="back-box p-3">
      <router-link to="/group-info">
          <img class="icon" src="@/assets/back.svg" alt="" />
      </router-link>
    </div>
    <div
      class="
        group-dp-box
        d-flex
        justify-content-center
        align-items-end
        text-center
        p-3
      "
    >
      <img class="dp rounded-circle ml-3" src="@/assets/groupDp.png" alt="" />
      <img class="icon mb-2" src="@/assets/editDark.svg" alt="" />
    </div>
    <div class="group-form p-3">
      <label class="input-label h5" for="name">Group name</label>
      <input
        id="name"
        class="form-control1 p-1"
        placeholder="Enter Group name"
        value="CMI Developers"
        type="text"
      />
      
      <label class="input-label h5 mt-4" for="description">Description</label>
      <textarea
        id="description"
        rows="4"
        class="form-control1 p-1"
        placeholder="Enter Group name"
        value="This is a brief description of this group"
        type="text"
      />

      <button class="save-btn btn px-4 mt-4 rounded-pill">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupSettings",
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
  border-bottom: 0.07rem solid #c4ccda;
  border-radius: 0rem;
  transition: all 0.3s ease-in-out;
}
.input-label {
    color: rgba(72, 23, 176, 1);
}
.form-control1:focus {
  outline: none;
}
.save-btn {
    border: 2px solid rgba(72, 23, 176, 1);
    color: rgba(72, 23, 176, 1);
    font-weight: 600;
}
.icon {
  width: 1.5em;
}
.dp {
  width: 8em;
  height: 8em;
  border: 3px solid #fff;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.356);
}
</style>