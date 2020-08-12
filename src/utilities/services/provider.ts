import {
  IProvider,
  BASE_URL
} from "./provider.types"
import { DiseaseCovidService } from "./diseaseCovidService"
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
})

export const Provider = (): IProvider => ({
  covid: new DiseaseCovidService(axiosInstance)
})