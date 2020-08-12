import {
  ICountryInputData,
  IGetAllInputData,
  CountryInput
} from "@/entities"
import { AxiosResponse } from "axios"

export interface IDiseaseCovidService {
  getAll (): Promise<AxiosResponse<ICountryInputData[]>>
  getOne (data: CountryInput): Promise<AxiosResponse<ICountryInputData | undefined>>
  getTotals (): Promise<AxiosResponse<IGetAllInputData>>
}
