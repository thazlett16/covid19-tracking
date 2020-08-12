import axios from "axios"
import { BASE_URL } from "../provider.types"

import { DiseaseCovidService } from "./diseaseCovidService"
import {
  CountryInput,
  mockCountryInputData
} from "@/entities/countryInput"

const axiosMock = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
})

describe(">>> Service Testing", () => {
  const diseaseCovidService = new DiseaseCovidService(axiosMock)

  describe(">>  Get Many", () => {
    it(">>  Test Get Many", done => {
      diseaseCovidService.getAll().then(response => {
        expect(response.data.length).toBeGreaterThan(0)
      }).catch(error => {
        expect(error.status).toEqual(404)
      })
      done()
    })
  })

  describe(">>  Get One", () => {
    it(">>  Test Get One", done => {
      const countryInputEntity = new CountryInput({...mockCountryInputData()[0]})
      diseaseCovidService.getOne(countryInputEntity).then(response => {
        expect(response).toBeDefined()
      }).catch(error => {
        expect(error.status).toEqual(404)
      })
      done()
    })

    it(">>  Test Get One", done => {
      const countryInputEntity = new CountryInput({
        ...mockCountryInputData()[0],
        countryInfo: {
          _id: mockCountryInputData()[0].countryInfo._id,
          iso2: mockCountryInputData()[0].countryInfo.iso2,
          iso3: "asdf",
          lat: mockCountryInputData()[0].countryInfo.lat,
          long: mockCountryInputData()[0].countryInfo.long,
          flag: mockCountryInputData()[0].countryInfo.flag
        }
      })
      diseaseCovidService.getOne(countryInputEntity).then(response => {
        expect(response).toBeUndefined()
      }).catch(error => {
        expect(error.status).toEqual(404)
      })
      done()
    })
  })

  describe(">>  Get Totals", () => {
    it(">>  Test Get Totals", done => {
      diseaseCovidService.getTotals().then(response => {
        expect(response).toBeDefined()
      }).catch(error => {
        expect(error.status).toEqual(404)
      })
      done()
    })
  })
})