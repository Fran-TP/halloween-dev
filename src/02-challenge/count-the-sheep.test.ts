import assert from 'node:assert'
import { describe, it } from 'node:test'
import countSheep from './count-the-sheep'

describe('Code Possession Challenge', () => {
  it('should return true if the type is number', () => {
    const actual = typeof countSheep('sheepxsheepy')
    const expected = 'number'

    assert.strictEqual(actual, expected)
  })

  it("should return 2 for the letters 'sheepxsheepy'", () => {
    const actual = countSheep('sheepxsheepy')
    const expected = 2

    assert.strictEqual(actual, expected)
  })

  it("should return 2 for the letters 'sshhheeeepppp'", () => {
    const actual = countSheep('sshhheeeepppp')
    const expected = 2

    assert.strictEqual(actual, expected)
  })

  it("should return 1 for the letters 'peesh'", () => {
    const actual = countSheep('peesh')
    const expected = 1

    assert.strictEqual(actual, expected)
  })
})
