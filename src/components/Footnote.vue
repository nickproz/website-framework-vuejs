<template>
  <div class="footnote">
    <p class="content">This website was created by <a class="website-link" href="http://www.nickproz.com" target="_blank">Nick Prozorovsky</a>. For support or to report website issues, email me at nick.prozorovsky@gmail.com.</p>
  </div>
</template>

<script>
export default {
    name: 'footnote'
};
</script>

<style lang="less" scoped>
@import '../style/mixins';

.footnote {
    .card();
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        margin: 0;
        padding: 15px;
    }
    .website-link {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
