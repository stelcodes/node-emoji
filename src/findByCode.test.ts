import { describe, expect, it } from 'vitest'

import { findByCode } from './findByCode.js'

describe('findByCode', () => {
  it('returns undefined when given a name', () => {
    expect(findByCode('heart')).toBeUndefined()
  })

  it('returns undefined when given a :name:', () => {
    expect(findByCode(':heart:')).toBeUndefined()
  })

  it('returns the emoji when given an emoji code', () => {
    expect(findByCode('❤')).toEqual({ emoji: '❤', key: 'red_heart' })
  })

  it('returns the base emoji when given an alternate emoji code', () => {
    expect(findByCode('❤️')).toEqual({ emoji: '❤', key: 'red_heart' })
  })
})
