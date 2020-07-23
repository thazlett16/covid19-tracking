export interface IExampleData {
  readonly id?: number
  readonly title: string
  readonly createdAt?: Date | string
}

export interface IExample extends IExampleData {
  validate(): boolean
}

export const TITLE_MAX_LENGTH = 10