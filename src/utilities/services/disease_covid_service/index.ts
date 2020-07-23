import http from "../http-common"
import { AxiosResponse } from "axios"

class ICovidDataService {
  fetchCountries(): Promise<AxiosResponse> {
    return http.get("/countries")
  }
}

export const CovidDataService = new ICovidDataService()
