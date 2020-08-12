import {
  IGetAllInput,
  IGetAllInputData
} from "./getAllInput.types"

export class GetAllInput implements IGetAllInput {
  readonly updated: number
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
  readonly oneCasePerPeople: number
  readonly oneDeathPerPeople: number
  readonly oneTestPerPeople: number
  readonly activePerOneMillion: number
  readonly recoveredPerOneMillion: number
  readonly criticalPerOneMillion: number
  readonly affectedCountries: number

  constructor(data: IGetAllInputData) {
    this.updated = data.updated
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
    this.oneCasePerPeople = data.casesPerOneMillion
    this.oneDeathPerPeople = data.oneDeathPerPeople
    this.oneTestPerPeople = data.oneTestPerPeople
    this.activePerOneMillion = data.activePerOneMillion
    this.recoveredPerOneMillion = data.recoveredPerOneMillion
    this.criticalPerOneMillion = data.criticalPerOneMillion
    this.affectedCountries = data.affectedCountries
  }
}