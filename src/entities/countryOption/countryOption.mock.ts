import { 
  ICountryOption,
  ICountryOptionData
} from "./countryOption.types"
import { CountryOption } from "./countryOption"

export const mockCountryOptionData = (): ICountryOptionData[] => [{
  country: "United States",
  countryCode: "USA"
}, {
  country: "Albania",
  countryCode: "ALB"
}]

export const mockCountryOptions = (data: ICountryOptionData[] = mockCountryOptionData()): ICountryOption[] => data.map(item => new CountryOption(item))
