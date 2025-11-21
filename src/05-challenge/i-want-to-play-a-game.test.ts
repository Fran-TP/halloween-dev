import assert from 'node:assert'
import { describe, it } from 'node:test'
import changeLock from './i-want-to-play-a-game'

describe('I want to play a game', () => {
  it('should return a true if type is a number', () => {
    const actual = typeof changeLock('1234', '5678')
    const expected = 'number'

    assert.strictEqual(actual, expected)
  })

  it('should return 4 for current code 0000 and target code 9999', () => {
    const current = '0000'
    const target = '9999'
    const expected = 4
    const actual = changeLock(current, target)

    assert.strictEqual(actual, expected)
  })

  it('should return 0 for current code 1234 and target code 9204', () => {
    const current = '1234'
    const target = '9204'
    const expected = 5
    const actual = changeLock(current, target)

    assert.strictEqual(actual, expected)
  })
})
