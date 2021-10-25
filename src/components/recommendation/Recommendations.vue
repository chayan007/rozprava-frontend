<template>
  <div class="recommendations-box row m-0 w-100">
    <h3 class="p-3">Recommendations</h3>
    <div class="rec-container row m-0 w-100">
      <!-- loader -->
      <Loader class="my-10" v-if="!recommendations" />
      <!-- loader -->

      <!-- Recommendation card -->
      <div
        class="rec-card col-lg-3 col-md-4 col-6 w-100 p-3"
        v-for="recommendation in recommendations"
        :key="recommendation.uuid"
      >
        <RecommendationCard :recommendation="recommendation"></RecommendationCard>
      </div>
      <!-- Recommendation card -->
    </div>
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
import RecommendationCard from "@/components/recommendation/RecommendationCard.vue";
import { userService } from "@/services";
import { config } from "@/configurations";
import { stringFormat } from "@/helpers";

export default {
  name: "Recommendation",
  components: { Loader, RecommendationCard },
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
          this.recommendations = recommendations.results;
        })
        .catch(() => {
          throw stringFormat(
            config.messagingConfig.messages.error.watched_all,
            "recommendations"
          );
        });
    },
  },
  created() {
    this.getRecommendations();
  },
};
</script>


