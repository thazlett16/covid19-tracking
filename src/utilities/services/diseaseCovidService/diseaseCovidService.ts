import {
  CountryInput,
  ICountryInputData,
  IGetAllInputData
} from "@/entities"
import {
  AxiosResponse,
  AxiosInstance
} from "axios"
import { IDiseaseCovidService } from "./diseaseCovidService.types"

export class DiseaseCovidService implements IDiseaseCovidService {
  private readonly http: AxiosInstance

  constructor(axiosInst: AxiosInstance) {
    this.http = axiosInst
  }

  getAll (): Promise<AxiosResponse<ICountryInputData[]>> {
    return this.http.get("/countries")
  }
  getOne (data: CountryInput): Promise<AxiosResponse<ICountryInputData | undefined>> {
    return this.http.get(`/countries/${data.countryInfo.iso3}`)
  }
  getTotals (): Promise<AxiosResponse<IGetAllInputData>> {
    return this.http.get("/all")
  }
}