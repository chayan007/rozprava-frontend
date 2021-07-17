<template>
    <section class="section section bg-soft pb-5 overflow-hidden z-2">
            <div class="container z-2">
              <div class="row">
            <div class="col text-center mt-5">
                    <span class="h1 text-center">Settings</span>
            </div>
        </div>
        <SettingsPage></SettingsPage>
            </div></section>
</template>

<script>
// @ is an alias to /src

import SettingsPage from '../../components/auth/SettingsPage.vue';
export default {
  name: "Settings",
  components: { SettingsPage },
};
</script>

