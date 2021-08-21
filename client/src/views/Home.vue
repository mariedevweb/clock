<template>
  <main class="page-wrapper timezone-container">
    <div class="timezone-card" v-for="timezone in timezones" :key="timezone.name">
      <timezone-card :timezone="timezone"></timezone-card>
    </div>
  </main>
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

<style scoped lang="scss">
.page-wrapper {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 40px 20px;
}
.timezone-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.timezone-card {
  display: flex;
  position: relative;
  background-color: rgba(#fffbf9, 0.75);
  color: #9c7887;
  border-radius: 10px;
  width: 100%;
  min-height: 200px;
  margin: 15px 0;
  padding: 110px 20px 35px;
  box-shadow: 0px 0px 20px 2px rgba(black, 0.1);
  @media (min-width: 1140px) {
    padding-top: 75px;
  }
  @media (min-width: 768px) {
    width: 40%;
    min-height: 300px;
  }
}
</style>
