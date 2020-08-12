import { IDiseaseCovidService } from "./diseaseCovidService"

export const BASE_URL = "https://disease.sh/v3/covid-19"

export interface IProvider {
  covid: IDiseaseCovidService
}