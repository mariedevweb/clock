<template>
    <div>
        <svg v-if="!getDayTime" class="icon icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 43">
            <defs/>
            <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7">
                <path d="M25.4 1H24a15.4 15.4 0 01-7.2 29c-4.7 0-9-2-11.8-5.4a20.6 20.6 0 0041-3.1C46 10.2 36.8 1 25.4 1zM14 7.5c-4.2 1-5.5 2.3-6.5 6.5-1-4.2-2.3-5.5-6.5-6.5 4.2-1 5.5-2.3 6.5-6.5 1 4.2 2.3 5.5 6.5 6.5zM16 16v4M14 18h4"/>
            </g>
        </svg>
        <svg v-else class="icon icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66">
            <defs/>
            <g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="2" transform="translate(1 1)">
                <circle cx="32" cy="32" r="16"/>
                <path stroke-linecap="round" d="M32 10V0M32 64V54M54 32h10M0 32h10M48 16l5-5M11 53l5-5M48 48l5 5M11 11l5 5"/>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        time: String
    },
    computed: {
        getDayTime() {
            var isDayTime = false;
            if(this.time > 6 && this.time < 20) {
                isDayTime = true;
            } else {
                isDayTime = false;
            }
            return isDayTime;
        },
    }
}
</script>

<style scoped lang="scss">
.icon {
    position: absolute;
    g {
        stroke: currentColor;
    }
}
.icon-moon {
    width: 50px;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 1140px) {
        left: 40px;
        transform: translateX(0);
    }
}
.icon-sun {
    width: 65px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 1140px) {
        left: 20px;
        transform: translateX(0);
    }
}
</style>