import {
  ICountryInputData,
  IGetAllInputData
} from "@/entities";

export interface countryDataState {
  allData?: ICountryInputData[]
  selectedData?: IGetAllInputData | ICountryInputData
  isCountryDataLoading: number
}