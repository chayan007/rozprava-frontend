<template>
  <div class="box" style="text-align: center">
    <div class="mb-5 p-5" @click="open_case">
      <Button></Button>
    </div>
    <div
      class="
        space
        alert alert-secondary alert-dismissible
        shadow-inset
        fade
        show
      "
      role="alert"
    >
      <h5>People you may know</h5>
      <button
        type="button"
        class="close top"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
      <div class="follow_cards">
        <template
          v-for="recommendation in recommendations"
          :key="recommendation.recommends"
        >
          <PeopleCard :recommendation="recommendation" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/recommendation/Button.vue";
import PeopleCard from "@/components/recommendation/PeopleCard.vue";
import { userService } from "@/services";
import { config } from "@/configurations";
import { stringFormat } from "@/helpers";

export default {
  name: "Recommendation",
  components: { Button, PeopleCard },
  data() {
    return {
      recommendations: null,
    };
  },
  methods: {
    getRecommendations() {
      userService
        .getRecommendations()
        .then((recommendations) => {
          this.recommendations = recommendations;
        })
        .catch(() => {
          throw stringFormat(
            config.messagingConfig.messages.error.watched_all_recommends,"recommendations"
          );
        });
    },
    open_case() {
      alert("hii there");
    },
  },
  created() {
    this.getRecommendations();
  },
};
</script>

<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 5rem;
  padding: 0%;
}
.top {
  top: 2rem;
}
.alert {
  position: relative;
  padding: 2rem ;
  margin-bottom: 1rem;
  border: 0.0625rem solid transparent;
  border-radius: 0.55rem;
}
.space {
  margin-left: 10%;
  margin-right: 9%;
}
.follow_cards {
  display: grid;
  grid-template-columns: repeat(4 , 300px);
  grid-gap: 10px;
}
@media (max-width: 700px) {
  .space {
    margin-right: 2%;
    margin-left: 2%;
  }
  .follow_cards{
    display:grid
  }
}
</style>

