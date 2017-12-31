import * as mutationTypes from './mutation-types'
import * as actionTypes from './action-types'
import axios from 'axios'

import * as urls from '../../../util/constants/urls'

const state = {
  musicEvents: [],
  musicEventsFetched: false
}

const getters = {
  musicEvents: state => state.musicEvents,
  musicEventsFetched: state => state.musicEventsFetched
}

const actions = {
  /**
   * Get all spreadsheet music events.
   *
   * @param commit - the mutation commit object
   */
  async [actionTypes.GET_SPREADSHEET_EVENTS] ({ commit }) {
    // Only fetch events if we haven't already
    if (!state.musicEventsFetched) {
      try {
        const response = await axios.get(`${urls.SPREADSHEET_BASE_URL}/1/rows/`)
        const events = response.data

        commit(mutationTypes.UPDATE_SPREADSHEET_EVENTS, { events })
      } catch (error) {
        console.log(`Failed to get music events with error: ${error}`)
      }
    }
  }
}

const mutations = {
  /**
   * Update the music events state with the passed in music events.
   *
   * @param state - the current store state
   * @param events - events to update the state with
   */
  [mutationTypes.UPDATE_SPREADSHEET_EVENTS] (state, { events }) {
    state.musicEvents = events
    state.musicEventsFetched = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
