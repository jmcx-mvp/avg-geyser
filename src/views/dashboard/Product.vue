<template>
  <div class="product-div">
    <div class="row">
      <div class="col">
        <div class="product-logo-div">
          <img class="product-logo" :src="productData.img" alt=""/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="pdt-name">{{ productData.name }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="pdt-txt">{{ productData.txt }}</p>
      </div>
    </div>
    <div class="row">
      <input type="submit" class="btn btn-info btn-select" :value="$t('dashboard.product.select')"
             @click="select"
      >
    </div>
    <div class="row pdt-apy">
      <div class="col text-left">
        {{ $t("common.apy") }}
        <div></div>
      </div>
      <div class="col text-right">
        <div>{{ productData.apy }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
import chainOpt from "@/utils/web3/chainOperation";

let opt = chainOpt.opt

export default {
  name: "Product",
  props: ["productData", "productIndex"],
  data() {
    return {
      querying: false,
      poolInfo: null,
    }
  },
  mounted() {
    this.loopGetInfo()
    setInterval(async _=> {
      await this.loopGetInfo()
    }, 5000)
  },

  methods: {
    select() {
      this.$router.push({ name: "actions", params: { tx_id: this.productData.tx, pool_info: this.poolInfo, pool_idx: this.productIndex } });
    },

    async loopGetInfo() {
      if(this.querying) {
        return
      }

      this.querying =  true
      this.poolInfo = await opt.poolInfo(this.productIndex)
      window.allPoolInfo[this.productIndex] = this.poolInfo
      this.querying = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.product-div {
  border-width: 1px;
  border-style: solid;
  border-color: $divBorderColor;
  border-image: initial;
  border-radius: 5px;
  padding: 25px 15px 15px ;
  margin-top: 15px !important;

  .product-logo {
    width: 48px;
    height: 48px;
  }
  .product-logo-div {
    background-color: $bg2;
    font-size: 36px;
    height: 80px;
    width: 80px;
    border-radius: 40px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    box-shadow: $btnBoxShadow-sushi 4px 4px 8px inset, $btnBoxShadow-sushi-2 -6px -6px 12px inset;
    margin: 0 auto 16px;
  }

  .pdt-name {
    font-family: $fontTit;
    font-size: 24px;
    font-weight: 700;
  }

  .pdt-txt {
    font-family: $fontTxt;
    font-size: 16px;
    font-weight: 400;
  }

  .btn-select {
    -webkit-box-align: center;
    align-items:center;
    background-color: $btnBg2;
    border: 0;
    border-radius: 5px;
    box-shadow: $btnBoxShadow-sushi 2px 2px 4px, $btnBoxShadow-sushi-2 -2px -2px 4px -1px;
    color: $bg2;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    height: 56px;
    -webkit-box-pack: center;
    justify-content: center;
    outline: none;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    margin: 20px 0 !important;
  }
  .btn-select:hover,
  .btn-select:focus,
  .btn-select:active {
    background-color: $divBorderColor;
    color: $bg2;
    border: 0;
    outline: none;
  }

  .pdt-apy {
    background-color: $btnFontColor;
    color: $txtColor;
    border-width: 1px;
    border-style: solid;
    border-color: $divBorderColor;
    border-image: initial;
    border-radius: 3px;
    font-size: 12px;
    padding: 5px;
  }
}
</style>
