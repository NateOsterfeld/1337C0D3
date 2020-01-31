// const lengthOfLongestSubstring = require('./index')
const lengthOfLongestSubstring = require('./solution')

test('[abcabcbb]', () =>
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3))

test('[bedba]', () =>
    expect(lengthOfLongestSubstring('bedba')).toEqual(4))
    
test('[pwwkew]', () =>
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3))
    
test('[dfghhhigklofgi]', () =>
    expect(lengthOfLongestSubstring('dfghhhigklofgi')).toEqual(7))
