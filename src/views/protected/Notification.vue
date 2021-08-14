<template>
  <div class="section mt-7 pt-4 pb-0">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="text-center">
            <span class="h3">Notifications</span>
          </div>
          <!-- heading -->

          <div class="position-relative mt-5">
            <div
              class="rounded shadow-soft border border-light bg-soft p-4 mb-2"
            >
              <div class="mb-3">
                <div>
                  <NotifyComponent :show="display_data" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

console.log()

import Notification from "@/components/notifications/Notification.vue";
import { notificationService } from "@/services";

export default {
  name: "Notification",
  components: { NotifyComponent: Notification },
  data(){
    return {
      display_data : null
    }
  },
  methods: {
    getNotification() {
      notificationService.getNotification()
        .then((info_notify) => {
          this.display_data = info_notify;
          return this.display_data ;
        })
        .catch((error) => {
          console.log(error);
        });
    },    
  },
  created() {
    this.getNotification();
  },
};

</script>

