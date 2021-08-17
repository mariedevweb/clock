<template>
  <div class="home max-width-container">
    {{ timezone }}
  </div>
</template>

<script>
import Server from '@/server/Server.js';

export default {
  name: 'Home',
  data() {
    return {
      timezone: {}
    }
  },
  created() {
    this.getTimezoneData();
  },
  methods: {
    async getTimezoneData() {
      Server.getTimezone()
      .then(
        (timezone => {
          this.$set(this, "timezone", timezone);
        }).bind(this)
      );
    }
  }
};
</script>

<style lang="scss">

</style>
