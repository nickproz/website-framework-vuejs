<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <button class="ui button">Semantic Button</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="less" scoped>
  h1 {
    display: flex;
    flex-direction: column;
  }
</style>
