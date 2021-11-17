<script lang='ts'>
import { defineComponent } from "vue";
// import the library
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

export default defineComponent({
  name: "Alert",
  props: ["alertType", "message"],
  created() {
    this.toast(this.alertType, this.message);
    console.log(this.alertType);
    
  },
  setup() {
    const toast = (type, message) => {
      createToast(
        {
          title: message,
        },
        {
          timeout: 100000,
          hideProgressBar: true,
          showIcon: true,
          position: "top-center",
          type: type,
          transition: "bounce",
        }
      );
    };
    return { toast };
  },
});
</script>