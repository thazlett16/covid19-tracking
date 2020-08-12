import {
  ICountryInput,
  ICountryInputData
} from "./countryInput.types";
import { CountryInput } from "./countryInput";

export const mockCountryInputData = (): ICountryInputData[] => [{
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
}, {
  updated: "1596084119616",
  country: "Albania",
  countryInfo: {
    _id: 8,
    iso2: "AL",
    iso3: "ALB",
    lat: 41,
    long: 20,
    flag: "https://disease.sh/assets/img/flags/al.png"
  },
  cases: 5105,
  todayCases: 0,
  deaths: 150,
  todayDeaths: 0,
  recovered: 2830,
  todayRecovered: 0,
  active: 2125,
  critical: 17,
  casesPerOneMillion: 1774,
  deathsPerOneMillion: 52,
  tests: 34477,
  testsPerOneMillion: 11981,
  population: 2877539,
  continent: "Europe",
  oneCasePerPeople: 564,
  oneDeathPerPeople: 19184,
  oneTestPerPeople: 83,
  activePerOneMillion: 738.48,
  recoveredPerOneMillion: 983.48,
  criticalPerOneMillion: 5.91
}]

export const mockCountryInputs = (data: ICountryInputData[] = mockCountryInputData()): ICountryInput[] => data.map(item => new CountryInput(item))
