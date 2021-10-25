<template>
  <div class="section mt-6 pt-4 pb-0">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="">
            <span class="h3">Notifications</span>
          </div>
          <!-- heading -->
          <div class="position-relative mt-3">
            <div
              class="mb-2"
            >
              <div class="mb-3">
                <div>
                  <template
                    v-for="notification in notifications"
                    :key="notification.message"
                  >
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
import { config } from "@/configurations";

export default {
  name: "Notification",
  components: { NotifyComponent: Notification },
  data() {
    return {
      notifications: null,
    };
  },
  methods: {
    getNotification() {
      notificationService
        .getNotification()
        .then((notifications) => {
          this.notifications = notifications;
        })
        .catch(() => {
          throw config.messagingConfig.messages.error.unknown_error;
        });
    },
  },
  created() {
    this.getNotification();
  },
};
</script>

