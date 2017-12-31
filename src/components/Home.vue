<template>
  <div class="home">
    <img src="../assets/logo.png"/>
    <p>Store/Spreadsheet example:</p>
    <div v-if="!musicEventsFetched">
      <v-progress-circular indeterminate color="indigo darken-1" :size="50" class="loader"></v-progress-circular>
      <p>Loading...</p>
    </div>
    <div v-else>
      <div v-for="(item, index) in musicEvents" :key="index">
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import * as spreadsheetActions from '../store/modules/spreadsheet/action-types'

  export default {
    name: 'home',
    computed: {
      ...mapGetters(['musicEvents', 'musicEventsFetched'])
    },
    methods: {
      ...mapActions({
        getMusicEvents: spreadsheetActions.GET_SPREADSHEET_EVENTS
      })
    },
    /**
     * Fetch our events on startup.
     */
    created () {
      this.getMusicEvents()
    }
  }
</script>

<style lang="less" scoped>
  .home {
    flex-direction: column;
  }
</style>
