<template>
  <div class="home max-width-container">
    <div v-for="timezone in timezones" :key="timezone.name">
      <timezone-card :timezone="timezone"></timezone-card>
    </div>
  </div>
</template>

<script>
import Server from '@/server/Server.js';
import TimezoneCard from '@/components/TimezoneCard.vue';

export default {
  name: 'Home',
  components: {
    TimezoneCard
  },
  data() {
    return {
      timezones: []
    }
  },
  created() {
    this.getTimezonesData();
  },
  methods: {
    async getTimezonesData() {
      Server.getTimezones()
      .then(
        (timezones => {
          this.$set(this, "timezones", timezones);
        }).bind(this)
      );
    }
  }
};
</script>

<style lang="scss">

</style>
