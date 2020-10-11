<template>
  <div class="footer-background">
    <div class="row">
      <div class="col text-center">
        {{$t("footer.copyRight")}}
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Footer",
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/colors.scss";
@import "../styles/fonts.scss";

.footer-background {
  color: $fontColor;
  padding: 60px 0;

  .footer-logo {
    height: 32px;
  }
  .footer-col {
    margin: 45px 0;
  }
}
</style>
