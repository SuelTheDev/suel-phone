<template>
  <div class="home inside-screen d-flex flex-column">
    <relogio-component></relogio-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({components: {
  RelogioComponent: () => import("@/components/RelogioComponent.vue")
}})
export default class HomeView extends Vue {}
</script>


<style scoped lang="scss">
.home {
  background: hotpink;
  position: relative;
}
</style>
