<template>
  <div class="box " style="text-align: center">
    <div class="a5">
      <div class="a3">
        <h3>Chats</h3>
        <button class="a6 plus"><img src="@/assets/plus.png" class="plus" alt=""></button>
      </div>
      <InboxCard></InboxCard>
    </div>
    </div>
</template>
<script>
import Inbox from "@/components/chat/Inbox.vue";

export default {
  name: "Inbox",
  components: { "InboxCard":Inbox,},
};
</script>
<style scoped>
.plus{
    outline: none;
    border: none;
    padding: 0rem 0.1rem;
    background: transparent;
}
.a6{
  margin-right: 0rem;
  margin-left: auto;
}
.a5{
  width: 40rem;
  margin-right: auto;
  margin-left: auto;
}
.a3{
 display: flex;
 margin-bottom: 3rem;
}
.box {
  font-family: Josefin Sans;
  margin-top: 7rem;
  padding: 0%;
  max-width: 100%;
}
@media (max-width: 764px) {
    .a5 {
        width: 25rem;
    }
}
</style>