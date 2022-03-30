<template>
  <div class="clock-container d-flex justify-center">
    <article class="clock">
      <div class="hours-container">
        <div class="hours"></div>
      </div>
      <div class="minutes-container">
        <div class="minutes"></div>
      </div>
      <div class="seconds-container">
        <div class="seconds"></div>
      </div>
    </article>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Relogio",
})
export default class Relogio extends Vue {

  intervalHandler = 0
  
  initLocalClocks() {
  // Get the local time using JS
  const date = new Date;
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  const hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        (elements[k] as HTMLElement).style.transform = 'rotateZ('+ hands[j].angle +'deg)';
         (elements[k] as HTMLElement).style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          (elements[k]?.parentNode as Element)?.setAttribute('data-second-angle', hands[j + 1].angle.toString());
        }
    }
  }
}

  mounted() {
    this.intervalHandler = setInterval(this.initLocalClocks, 1000);
  }

  beforeDestroy() {
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
      this.intervalHandler = 0;
    }
  }
}
</script>
<style scoped lang="scss">
.clock {
  margin-top: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.116) url("@/assets/ios_clock.svg") no-repeat center;
  background-size: 88%;
  box-shadow: #000 0px 0px 5px;
  height: 10em;
  padding-bottom: 31%;
  position: relative;
  width: 10em;
  .minutes-container,
  .hours-container,
  .seconds-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.hours {
  background: #000;
  height: 20%;
  left: 48.75%;
  position: absolute;
  top: 30%;
  transform-origin: 50% 100%;
  width: 2.5%;
}

.minutes {
  background: #000;
  height: 40%;
  left: 49%;
  position: absolute;
  top: 10%;
  transform-origin: 50% 100%;
  width: 2%;
}

.seconds {
  background: rgb(255, 0, 0);
  height: 45%;
  left: 49.5%;
  position: absolute;
  top: 14%;
  transform-origin: 50% 80%;
  width: 1%;
  z-index: 8;
}

.minutes-container {
 
  transition: transform 0.3s cubic-bezier(.4,2.08,.55,.44);
}
.seconds-container {
  
  transition: transform 0.2s cubic-bezier(.4,2.08,.55,.44);
}

.hours-container {
  
  transition: transform 0.2s cubic-bezier(.4,2.08,.55,.44);
}

@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}

.clock:after {
  background: #000;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
  z-index: 10;
}
</style>