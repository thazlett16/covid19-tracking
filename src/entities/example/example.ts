import {
  IExample,
  IExampleData,
  TITLE_MAX_LENGTH
} from "./example.types"

export class Example implements IExample {
  readonly id?: number
  readonly title: string
  readonly createdAt?: Date | string

  constructor(data: IExampleData) {
    if(data.id){
      this.id = data.id
    }
    this.title = data.title
    if(data.createdAt){
      this.createdAt = data.createdAt
    }
  }

  validate(): boolean {
    if (!this.title || this.title.length <= 0 || this.title.length > TITLE_MAX_LENGTH) {
      return false
    }
    return true
  }
}