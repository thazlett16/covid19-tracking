
import axios from "axios";
import { Provider } from "./provider";
import {
  DiseaseCovidService
} from "@/utilities/services";

jest.mock("axios")
jest.mock("./diseaseCovidService")

describe(">>> Provider Testing", () => {
  it(">>  Should instantiate provider and each service once", () => {
    Provider()
    expect(DiseaseCovidService.prototype.constructor).toBeCalled()
})
})