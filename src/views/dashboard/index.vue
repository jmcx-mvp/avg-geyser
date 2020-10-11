<template>
  <div class="dashboard-container">
    <div class="row">
      <div class="col text-center">
        <img class="home-logo" :src="'/static/logo/logo.png'" alt=""/>
      </div>
    </div>
    <div class="row">
      <div class="col text-center welcome-tit">{{ $t("common.welcome") }}</div>
    </div>
    <div class="row">
      <div class="col text-center welcome-txt">{{ $t("common.welcomeTxt") }}</div>
    </div>

    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 text-center"
           v-for="(product, index) in products" :key="index">
        <product :product-data="product" :product-index="index"></product>
      </div>
    </div>

    <loading :active.sync="loading"
             :can-cancel="false"
             :is-full-page="true"></loading>
  </div>
</template>

<script>
import Product from "./Product";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "dashboard",
  components: { Product, Loading },

  data() {
    return {
      allBalance: null,
      poolInfo: null,
      loading: false,

      products: [
        // {
        //   img: "/static/icon/AVG-ETH.png",
        //   name: "AVG Party!",
        //   txt: "Deposit AVG-ETH SLP Earn AVG",
        //   tx: "AVG-ETH",
        //   apy: "1000",
        // },
        {
          img: "/static/icon/USDT-ETH.png",
          name: "Tether Hulk!",
          txt: "Deposit USDT-ETH SLP Earn AVG",
          tx: "USDT-ETH",
          apy: "1000",
        },
        {
          img: "/static/icon/DAI-ETH.png",
          name: "Hydra DAI!",
          txt: "Deposit DAI-ETH SLP Earn AVG",
          tx: "DAI-ETH",
          apy: "1000",
        },
        {
          img: "/static/icon/sUSD-ETH.png",
          name: "Thanos Dollar!",
          txt: "Deposit sUSD-ETH SLP Earn AVG",
          tx: "sUSD-ETH",
          apy: "1000",
        },
        {
          img: "/static/icon/COMP-ETH.png",
          name: "COMP widow!",
          txt: "Deposit COMP-ETH SLP Earn AVG",
          tx: "COMP-ETH",
          apy: "1000",
        },
        {
          img: "/static/icon/LEND-ETH.png",
          name: "Captain LEND!",
          txt: "Deposit LEND-ETH SLP Earn AVG",
          tx: "LEND-ETH",
          apy: "1000",
        },
        {
          img: "/static/icon/AMPL-ETH.png",
          name: "AMPL Spider!",
          txt: "Deposit AMPL-ETH SLP Earn AVG",
          tx: "AMPL-ETH",
          apy: "1000",
        },
        {
          img: "/static/icon/YFII-ETH.png",
          name: "Spiderman YFII!",
          txt: "Deposit YFII-ETH SLP Earn AVG",
          tx: "YFII-ETH",
          apy: "1000",
        },
        {
          img: "/static/icon/$AAPL-ETH.png",
          name: "$AAPL Panther!",
          txt: "Deposit $AAPL-ETH SLP Earn AVG",
          tx: "$AAPL-ETH",
          apy: "1000",
        },
        {
          img: "/static/icon/BET-ETH.png",
          name: "BEST Thor!",
          txt: "Deposit BET-ETH SLP Earn AVG",
          tx: "BET-ETH",
          apy: "1000",
        },
      ]
    }
  },

  methods: {
    seeTheMenu() {
      this.$router.push({name: "Dashboard"})
    },
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.dashboard-container {
  width: 100%;
  height: 100%;

  .home-logo{
    width: 120px;
    height: 120px;
  }

  .welcome-tit {
    font-size: 27px;
    color: $fontColor;
    letter-spacing: 2px;
    font-family: $fontTit;
  }
  .welcome-txt {
    margin-bottom: 30px !important;
    color: $txtColor;
    font-family: $fontTxt;
  }
}
</style>
