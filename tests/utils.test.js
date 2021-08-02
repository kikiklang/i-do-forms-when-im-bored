import multiply from '../utils/utils.js'

describe('testing utils functions', () => {
  test('multiply', () => {
    expect(multiply(5, 5)).toBe(25)
  })
})
