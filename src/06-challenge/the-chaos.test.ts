import assert from 'node:assert'
import { describe, it } from 'node:test'
import surviveRoulette from './the-chaos'

describe('The Chaos', () => {
  it('should return a true if type is a number', () => {
    const actual = typeof surviveRoulette(7, 3)
    const expected = 'number'

    assert.strictEqual(actual, expected)
  })

  it('should return 0 when the victims are 4 and count next is 2', () => {
    const actual = surviveRoulette(4, 2)
    const expected = 0

    assert.strictEqual(actual, expected)
  })

  it('should return 3 when the victims are 5 and count next is 3', () => {
    const actual = surviveRoulette(7, 3)
    const expected = 3

    assert.strictEqual(actual, expected)
  })
})
