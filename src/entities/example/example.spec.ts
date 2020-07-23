import { Example } from "./example"
import {
  mockExampleData,
  mockExamples
} from "./example.mock"

describe(">>> Example", () => {
  it("should instantiate id only if it was provided", () => {
    const entity1 = new Example({
      ...mockExampleData()[0],
      id: 1
    })
    expect(entity1.id).toBe(1)

    const entity2 = new Example({
      ...mockExampleData()[0],
      id: undefined
    })
    expect(entity2.id).toBeUndefined()
  })

  it("should instantiate createdAt only if it was provided", () => {
    const entity1 = new Example({
      ...mockExampleData()[0],
      createdAt: "2019-12-19T11:54:04 +05:00"
    })
    expect(entity1.createdAt).toBe("2019-12-19T11:54:04 +05:00")

    const entity2 = new Example({
      ...mockExampleData()[0],
      createdAt: undefined
    })
    expect(entity2.createdAt).toBeUndefined()
  })

  describe(">>  validate function", () => {
    it("should return false if example is empty", () => {
      const entity = new Example({
        ...mockExampleData()[0],
        title: ""
      })
      expect(entity.validate()).toBeFalsy()
    })

    it("should return false if example is too long", () => {
      const entity = new Example({
        ...mockExampleData()[0],
        title: "abcabcabcabc"
      })
      expect(entity.validate()).toBeFalsy()
    })

    it("should return true if example is valid", () => {
      const entity = mockExamples()[0]
      expect(entity.validate()).toBeTruthy()
    })
  })
})