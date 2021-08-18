<template>
    <div class="card-container">
        <h2 class="card-title">{{ timezone.name }}</h2>
        <div class="Clock">
            <div class="Hour">
                <span>{{ getTime.hour }}</span>
            </div>
            <div class="Colon">
                <span>:</span>
            </div>
            <div class="Minute">
                <span>{{ getTime.minutes }}</span>
            </div>
            <div class="meridiem">
                <span>{{ getMeridiem }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { DateTime } from 'luxon';
export default {
    props: {
        timezone: Object
    },
    computed: {
        getTime() {
            var time = null;
            const today = DateTime.now();
            if(this.timezone.name === 'Japan') {
                time = today.setZone(this.timezone.region);
            } else {
                time = today;
            }
            return {hour: time.hour, minutes: time.minute};
        },
        getMeridiem() {
            var meridiem = '';
            if (this.getTime.hour > 0 && this.getTime.hour < 12) {
                meridiem = 'AM'
            } else {
                meridiem = 'PM'
            }
            return meridiem;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
