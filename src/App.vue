<template>
  <v-app>
    <v-system-bar class="notification-bar pl-1"  dark color="rgba(0, 0, 0, 0.5)" absolute height="24" >
      <v-icon>email</v-icon>
      <span>Nova mensagem ...</span>
      <v-spacer></v-spacer>
      <v-icon>wifi</v-icon>
      <v-icon>signal_cellular_4_bar</v-icon>
      <v-icon>battery_full</v-icon>
      <span class="mr-2">{{ relogio }}</span>
    </v-system-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <div class="navigator-bar d-flex justify-space-around align-center">
      <v-btn icon class="rotate_left"><v-icon>change_history</v-icon></v-btn>
      <v-btn icon><v-icon>radio_button_unchecked</v-icon></v-btn>
      <v-btn icon><v-icon>check_box_outline_blank</v-icon></v-btn>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import gsap from "gsap";
@Component
export default class App extends Vue {

  private relogio = "00:00"
  private relogioHandler = 0;

  //animação da notificação quando recebida
  // animar() {
  //   gsap.to(".cellphone", { duration: 1, y: -150, onComplete: function() {
  //     setTimeout(() => {
  //       this.reverse()
  //     }, 3000);
  //   }})
  // }

  async mounted() {
    await this.$nextTick();
    this.relogioHandler = setInterval(() => { 
      this.relogio = new Intl.DateTimeFormat("pt-BR", { timeStyle: "short" }).format(Date.now())
     }, 1000)
    // window.addEventListener("message", (ev) => {
    //   if (ev.data.action === "y") {
    //     this.animar();
    //   }
    // });
  }
}
</script>

<style lang="scss">
#app {
  width: 320px;
  height: 568px;
}

.inside-screen {
  width: 320px;
  height: 100%;
  padding-top: var(--notification-bar-height);
  padding-bottom: var(--navigator-bar-height);
  box-sizing: border-box;
}

.navigator-bar {
  background: var(--bar-background);
  width: 320px;
  height: var(--navigator-bar-height);
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
}

.v-application--wrap {
  min-height: 568px !important;
}

.rotate_left {
  transform: rotate(-90deg);
}

.page-content {
  background: rgba(62, 65, 197, 0.436);
  height: calc(100% - var(--navigator-bar-height));
}

.notification-bar {
  height: var(--notification-bar-height);
  background: var(--bar-background);
  width: var(--mobile-inside-size-width);
  margin-left: 0 !important;
  padding-left: 0 !important;
  padding-right: 8px !important;
  margin-right: 0 !important;
}

</style>