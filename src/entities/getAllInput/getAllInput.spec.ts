import { GetAllInput } from "./getAllInput"
import {
  mockGetAllInputData
} from "./getAllInput.mock"

describe(">>> getAllInput", () => {
  it("should instantiate object when created", () => {
    const entity1 = new GetAllInput({
      ...mockGetAllInputData()[0]
    })
    expect(entity1).toEqual(new GetAllInput({
      "updated": 1596084119204,
      "cases": 17188007,
      "todayCases": 10447,
      "deaths": 670207,
      "todayDeaths": 635,
      "recovered": 10698202,
      "todayRecovered": 8672,
      "active": 5819598,
      "critical": 66389,
      "casesPerOneMillion": 2205,
      "deathsPerOneMillion": 86,
      "tests": 331971407,
      "testsPerOneMillion": 42756.85,
      "population": 7764168468,
      "oneCasePerPeople": 0,
      "oneDeathPerPeople": 0,
      "oneTestPerPeople": 0,
      "activePerOneMillion": 749.55,
      "recoveredPerOneMillion": 1377.89,
      "criticalPerOneMillion": 8.55,
      "affectedCountries": 215
    }))
  })
})