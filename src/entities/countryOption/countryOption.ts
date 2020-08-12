import {
  ICountryOption,
  ICountryOptionData
} from "./countryOption.types"

export class CountryOption implements ICountryOption {
  readonly country: string
  readonly countryCode: string

  constructor(data: ICountryOptionData) {
    this.country = data.country
    this.countryCode = data.countryCode
  }
}