import { Module } from "vuex"
import { countryDataState } from "./index.types"
import { RootState } from "@/store/index.types"
/*import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";*/

export const state: countryDataState = {
  allData: undefined,
  selectedData: undefined,
  isCountryDataLoading: 0
}

const namespaced = true

export const countryDataModule: Module<countryDataState, RootState> = {
  namespaced,
  state/*,
  getters,
  actions,
  mutations*/
}