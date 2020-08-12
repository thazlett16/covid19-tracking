import { CountryInput } from "./countryInput"
import {
  mockCountryInputData
} from "./countryInput.mock"

describe(">>> countryOption", () => {
  it("Should instantiate the object", () => {
    const entity1 = new CountryInput({
      ...mockCountryInputData()[0]
    })
    expect(entity1).toEqual(new CountryInput({
      updated: "1595820582022",
      country: "Afghanistan",
      countryInfo: {
        _id: 4,
        iso2: "AF",
        iso3: "AFG",
        lat: 33,
        long: 65,
        flag: "https://disease.sh/assets/img/flags/af.png"
      },
      cases: 36157,
      todayCases: 0,
      deaths: 1259,
      todayDeaths: 0,
      recovered: 25180,
      todayRecovered: 0,
      active: 9718,
      critical: 31,
      casesPerOneMillion: 928,
      deathsPerOneMillion: 32,
      tests: 86907,
      testsPerOneMillion: 2229,
      population: 38983033,
      continent: "Asia",
      oneCasePerPeople: 1078,
      oneDeathPerPeople: 30963,
      oneTestPerPeople: 449,
      activePerOneMillion: 249.29,
      recoveredPerOneMillion: 645.92,
      criticalPerOneMillion: 0.8
    }))
  })
})