<template>
  <div class="bank-home inside-screen d-flex flex-column">
    <v-container>
      <div class="d-flex justify-space-between">
        <span class="flex-fill client-name">Olá, Su'el</span>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon color="white">settings</v-icon></v-btn>
        <v-btn icon><v-icon color="white">notifications</v-icon></v-btn>
      </div>
      <div class="d-flex flex-column mt-4 pt-4">
        <v-card class="mb-4">
          <v-card-title class="card-title-bank"
            ><v-icon>attach_money</v-icon>Conta</v-card-title
          >
          <v-card-subtitle>Saldo disponível</v-card-subtitle>
          <v-card-text class="info-valor">{{
            saldo | formatCurrency
          }}</v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title class="card-title-bank"
            ><v-icon>request_quote</v-icon>Multas</v-card-title
          >
          <v-card-subtitle>Valor total</v-card-subtitle>
          <v-card-text
            class="info-valor"
            :style="{ color: multa > 0 ? 'red' : 'blue' }"
            >{{ multa | formatCurrency }}</v-card-text
          >
        </v-card>
        <div class="d-flex more-item-container" ref="moreItemContainer">
          <v-card
            class="card-item me-2 d-flex flex-column justify-content-between"
            elevation="0"
            color="#dc3df5"
            v-for="(item, index) in mores"
            :key="item.route"
            @click.prevent="onItemClick(index)"
          >
            <v-card-title class="p-2 card-item-title-slide"
              ><v-icon color="white">{{ item.icon }}</v-icon></v-card-title
            >
            <v-card-text class="mt-4 card-item-text pe-0">{{
              item.text
            }}</v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppBankHomeView extends Vue {
  multa = 15000000;
  saldo = 15000000;

  mores = [
    { icon: "paid", text: "Transferir", route: "bank.transfer" },
    { icon: "find_in_page", text: "Extrato", route: "bank.extract" },
    { icon: "person_add", text: "Cobrar", route: "bank.requestpayment" },
    {
      icon: "request_quote",
      text: "Cobranças",
      route: "bank.requestedpayment",
    },
    { icon: "account_balance", text: "Poupança", route: "bank.savings" },
  ];

  mounted() {
    this.$refs.moreItemContainer.addEventListener(
      "wheel",
      (e) => {
        this.$refs.moreItemContainer.scrollLeft += e.deltaY;
      },
      { passive: true }
    );
  }
}
</script>

<style lang="scss" scoped>
.bank-home {
  background: hotpink;
}
.client-name {
  font-size: 1.5rem !important;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px !important;
  color: white;
}

.card-title-bank {
  color: rgba(0, 0, 0, 0.54);
}

.info-valor {
  color: black;
  font-weight: 600;
  font-size: 1.3rem;
}

.card-item {
  min-width: 90px;
  min-height: 90px !important;
  height: 100px;
}
.card-item > * {
  color: white !important;
}
.card-item-title-slide {
  .v-icon {
    font-size: 1.3em;
  }
}
.card-item-text {
  font-weight: 300;
  font-size: 0.8rem;
}

.more-item-container {
  max-width: 800px !important;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>