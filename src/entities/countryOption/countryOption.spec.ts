import { CountryOption } from "./countryOption"
import {
  mockCountryOptionData
} from "./countryOption.mock"

describe(">>> countryOption", () => {
  it("Should instantiate the object", () => {
    const entity1 = new CountryOption({
      ...mockCountryOptionData()[0]
    })
    expect(entity1).toEqual(new CountryOption({
      country: "United States",
      countryCode: "USA"
    }))
  })
})