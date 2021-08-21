<template>
    <div class="card-container">
        <icon-day-night :time="getTime.hour"></icon-day-night>
        <h2 class="card-title">{{ timezone.name }}</h2>
        <div class="clock-container">
            <div class="clock">
                <div class="hour">
                    <span>{{ getTime.hour }}</span>
                </div>
                <div class="colon">
                    <span>:</span>
                </div>
                <div class="minute">
                    <span>{{ getTime.minutes }}</span>
                </div>
                <div class="meridiem">
                    <span>{{ getTime.meridiem }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { DateTime } from 'luxon';
import IconDayNight from './IconDayNight.vue';

export default {
    name: 'TimezoneCard',
    props: {
        timezone: Object
    },
    components: {
        IconDayNight
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
            return {hour: time.toFormat('HH'), minutes: time.toFormat('mm'), meridiem: time.toFormat('a')};
        }
    }
}
</script>

<style scoped lang="scss">
.card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.card-title {
    margin: 0 0 26px;
    text-align: center;
    @media (min-width: 1140px) {
        margin-bottom: 0;
    }
}
.clock-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.clock {
    display: flex;
    width: fit-content;
    padding: 12px 20px;
    border: 1px solid;
    font-size: 18px;
    @media (min-width: 768px) {
        font-size: 26px;
    }
}
.hour,
.minute {
    letter-spacing: 4px;
}
.colon {
    margin: 0 8px;
    animation-duration: 0.8s;
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
}
.meridiem {
    margin-left: 8px;
}
@keyframes blink {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
</style>
