import assert from 'node:assert'
import { describe, it } from 'node:test'
import searchPhone from './which-is-your-favorite-algorithm'

describe('Which is your favorite algorithm?', () => {
  it('should return true if type is a number', () => {
    const expected = 'number'
    const actual = typeof searchPhone([1, 2, 3, 4, 5], 3)

    assert.strictEqual(actual, expected)
  })

  it('should return 3 for the array [1001, 1002, 1005, 1008, 1010, 1015, 1020] and target 1008', () => {
    const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]
    const target = 1008
    const expected = 3
    const actual = searchPhone(phones, target)

    assert.strictEqual(actual, expected)
  })

  it('should return 0 for the array [1001, 1002, 1005, 1008, 1010, 1015, 1020] and target 1001', () => {
    const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]
    const target = 1001
    const expected = 0
    const actual = searchPhone(phones, target)

    assert.strictEqual(actual, expected)
  })
})
