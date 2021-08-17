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
                  <template v-for = "notification in notifications" :key="notification.message" >
                  <NotifyComponent :notification="notification" />
                  </template>
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
import Notification from "@/components/notifications/Notification.vue";
import { notificationService } from "@/services";

export default {
  name: "Notification",
  components: { NotifyComponent: Notification },
  data(){
    return {
     notifications: null
    }
  },
  methods: {
    getNotification() {
      notificationService.getNotification()
        .then((notifications) => {
          console.log(notifications);
          this.notifications = notifications;
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

