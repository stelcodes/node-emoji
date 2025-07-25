import { describe, expect, it } from 'vitest'

import { has } from './has.js'

describe('has', () => {
  it('returns true when given an emoji', () => {
    expect(has('☕')).toBe(true)
  })

  it('returns true when given the name of an emoji', () => {
    expect(has('hot_beverage')).toBe(true)
  })

  it('returns true when given a markdown emoji name', () => {
    expect(has(':hot_beverage:')).toBe(true)
  })

  it('returns false when given unrelated text', () => {
    expect(has('nonexistent')).toBe(false)
  })

  it('returns false when given an unknown markdown name', () => {
    expect(has(':nonexistent:')).toBe(false)
  })

  it('returns true when given a emoji in base form', () => {
    expect(has('❤️')).toBe(true)
  })

  it('returns true when given an emoji in code text form', () => {
    expect(has('❤')).toBe(true)
  })

  it('returns false when given multiple emoji codes', () => {
    expect(has('🍕❤️‍💋‍☕')).toBe(false)
  })
})
