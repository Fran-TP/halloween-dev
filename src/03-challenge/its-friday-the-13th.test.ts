import assert from 'node:assert'
import { describe, it } from 'node:test'
import myersCalendar from './its-friday-the-13th'

describe('Its friday the 13th', () => {
  it('should return true if the return type is an array', () => {
    const result = myersCalendar(2023)
    assert.strictEqual(Array.isArray(result), true)
  })

  it("should return ['2025-06-13', '2025-10-31'] by 2025", () => {
    const year = 2025
    const expected = ['2025-06-13', '2025-10-31']
    const actual = myersCalendar(year)

    assert.deepEqual(actual, expected)
  })

  it("should return ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13'] by 2026", () => {
    const year = 2026
    const expected = ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']
    const actual = myersCalendar(year)

    assert.deepEqual(actual, expected)
  })
})
