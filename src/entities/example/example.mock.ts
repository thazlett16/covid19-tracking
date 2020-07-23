import { 
  IExample,
  IExampleData
} from "./example.types"
import { Example } from "./example"

export const mockExampleData = (): IExampleData[] => [{
  id: 1,
  title: "title",
  createdAt: "2019-12-19T11:54:04 +05:00"
}, {
  id: 2,
  title: "title2",
  createdAt: "2019-12-19T11:54:04 +05:00"
}]

export const mockExamples = (data: IExampleData[] = mockExampleData()): IExample[] => data.map(item => new Example(item))