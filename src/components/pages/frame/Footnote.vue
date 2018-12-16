<template>
  <div class="footnote">
    <v-card class="card">
      <p class="content">This website was created by <a class="website-link" href="http://www.nickproz.com" target="_blank">Nick Prozorovsky</a>. For support or to report website issues, email me at nick.prozorovsky@gmail.com.</p>
    </v-card>
  </div>
</template>

<script>
  /**
   * Component for the footer.
   */
  export default {
      name: 'footnote'
  };
</script>

<style lang="less" scoped>
@import '../../../style/mixins';

.footnote {

  .card {
    width: 100%;
    padding: 0 5%;
  }
  .content {
    margin: 0;
    padding: 15px;
    font-size: 12px;
  }
  .website-link {
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
  }
}
</style>
