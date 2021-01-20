import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"
import { RootState } from "./index.types"

import { countryDataModule } from "./countryData"

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    globalLoadingVal: 0
  },
  getters: {
    isGlobalLoading(state): boolean {
      return state.globalLoadingVal === 0
    }
  },
  mutations: {
    setGlobalLoading(state, newValue: number): void {
      state.globalLoadingVal += newValue
    }
  },
  modules: {
    countryDataModule
  }
}

export default new Vuex.Store<RootState>(store)
