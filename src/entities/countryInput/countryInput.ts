import {
  ICountryInput,
  ICountryInputData,
  ICountryOption,
  ICountryOptionData
} from "./countryInput.types"

export class CountryInput implements ICountryInput {
  readonly updated: string
  readonly country: string
  readonly countryInfo: {
    _id: number
    iso2: string
    iso3: string
    lat: number
    long: number
    flag: string
  }
  readonly cases: number
  readonly todayCases: number
  readonly deaths: number
  readonly todayDeaths: number
  readonly recovered: number
  readonly todayRecovered: number
  readonly active: number
  readonly critical: number
  readonly casesPerOneMillion: number
  readonly deathsPerOneMillion: number
  readonly tests: number
  readonly testsPerOneMillion: number
  readonly population: number
  readonly continent: string
  readonly oneCasePerPeople: number
  readonly oneDeathPerPeople: number
  readonly oneTestPerPeople: number
  readonly activePerOneMillion: number
  readonly recoveredPerOneMillion: number
  readonly criticalPerOneMillion: number

  constructor(data: ICountryInputData) {
    this.updated = data.updated
    this.country = data.country
    this.countryInfo = data.countryInfo
    this.cases = data.cases
    this.todayCases = data.todayCases
    this.deaths = data.deaths
    this.todayDeaths = data.todayDeaths
    this.recovered = data.recovered
    this.todayRecovered = data.todayRecovered
    this.active = data.active
    this.critical = data.critical
    this.casesPerOneMillion = data.casesPerOneMillion
    this.deathsPerOneMillion = data.deathsPerOneMillion
    this.tests = data.tests
    this.testsPerOneMillion = data.testsPerOneMillion
    this.population = data.population
    this.continent = data.continent
    this.oneCasePerPeople = data.oneCasePerPeople
    this.oneDeathPerPeople = data.oneDeathPerPeople
    this.oneTestPerPeople = data.oneTestPerPeople
    this.activePerOneMillion = data.activePerOneMillion
    this.recoveredPerOneMillion = data.recoveredPerOneMillion
    this.criticalPerOneMillion = data.criticalPerOneMillion
  }
}

export class CountryOption implements ICountryOption {
  readonly country: string
  readonly countryCode: string

  constructor(data: ICountryOptionData) {
    this.country = data.country
    this.countryCode = data.countryCode
  }
}