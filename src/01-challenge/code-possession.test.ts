import assert from 'node:assert'
import { describe, it } from 'node:test'
import translatePossessed from './code-possession'

describe('Code Possession Challenge', () => {
  it('should return true if the type is string', () => {
    const actual = typeof translatePossessed('Hello World')
    const expected = 'string'

    assert.strictEqual(actual, expected)
  })

  it('should translate a possessed message by reversing each word', () => {
    const actual = translatePossessed('Hello World')
    const expected = 'olleH dlroW'

    assert.strictEqual(actual, expected)
  })

  it("should return 'i enjoy watching you' for the message 'i yojne gnihctaw uoy'", () => {
    const actual = translatePossessed('i yojne gnihctaw uoy')
    const expected = 'i enjoy watching you'

    assert.strictEqual(actual, expected)
  })

  it("should return '  world the  ' for the input '  dlrow eht  '", () => {
    const actual = translatePossessed('  dlrow eht  ')
    const expected = '  world the  '

    assert.strictEqual(actual, expected)
  })

  it("should return '' for the input '    '", () => {
    const actual = translatePossessed('    ')
    const expected = ''

    assert.strictEqual(actual, expected)
  })
})
