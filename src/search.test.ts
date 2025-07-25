import { describe, expect, it } from 'vitest'

import { search } from './search.js'

describe('search', () => {
  it('returns a single pair when given a one-of emoji name', () => {
    expect(search('hundred')).toEqual([{ emoji: '💯', name: 'hundred_points' }])
  })

  it('returns a single pair when given one-of emoji name as regular expression', () => {
    expect(search(/hundred/)).toEqual([{ emoji: '💯', name: 'hundred_points' }])
  })

  it('returns multiple emojis when given a common substring', () => {
    expect(search('cartwheel')).toEqual([
      {
        emoji: '🤸',
        name: 'person_cartwheeling',
      },
      {
        emoji: '🤸‍♂️',
        name: 'man_cartwheeling',
      },
      {
        emoji: '🤸‍♀️',
        name: 'woman_cartwheeling',
      },
    ])
  })

  it('returns multiple emojis when given a common regular expression', () => {
    expect(search(/cartwheel/)).toEqual([
      {
        emoji: '🤸',
        name: 'person_cartwheeling',
      },
      {
        emoji: '🤸‍♂️',
        name: 'man_cartwheeling',
      },
      {
        emoji: '🤸‍♀️',
        name: 'woman_cartwheeling',
      },
    ])
  })

  it('should match when you include the colon', () => {
    expect(search(':cartwheel:')).toEqual([
      {
        emoji: '🤸',
        name: 'person_cartwheeling',
      },
      {
        emoji: '🤸‍♂️',
        name: 'man_cartwheeling',
      },
      {
        emoji: '🤸‍♀️',
        name: 'woman_cartwheeling',
      },
    ])
  })

  it('should match when you include the colon in the regular expression', () => {
    expect(search(/:cartwheel:/)).toEqual([
      {
        emoji: '🤸',
        name: 'person_cartwheeling',
      },
      {
        emoji: '🤸‍♂️',
        name: 'man_cartwheeling',
      },
      {
        emoji: '🤸‍♀️',
        name: 'woman_cartwheeling',
      },
    ])
  })

  it('returns an empty array when no matching emojis are found for a string search', () => {
    expect(search('notAnEmoji')).toEqual([])
  })

  it('returns an empty array when no matching emojis are found for a regular expression search', () => {
    expect(search(/notAnEmoji/)).toEqual([])
  })
})
