/*
  804. Unique Morse Code Words

  International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

  'a' maps to ".-",
  'b' maps to "-...",
  'c' maps to "-.-.", and so on.
  For convenience, the full table for the 26 letters of the English alphabet is given below:

  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

  For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
  Return the number of different transformations among all words we have.
*/

var uniqueMorseRepresentations = function(words) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  
  let letterMap = new Map()
  let ret = new Set()
  
  morse.forEach((code, i) => {
      letterMap.set(alph[i], code)
  })
  
  words.forEach(word => {
      let acc = ''
      word.split('').forEach(char => {
          acc += (letterMap.get(char))
      })
      if(!ret.has(acc)) ret.add(acc)
  })
  
  return ret.size
}

/*
  Runtime: 65 ms, faster than 96.35% of JavaScript online submissions for Unique Morse Code Words.
  Memory Usage: 43.1 MB, less than 68.25% of JavaScript online submissions for Unique Morse Code Words.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
  387. First Unique Character in a String
  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

var firstUniqChar = function(s) {
  s = s.split('')
  const charMap = new Map()
  
  s.forEach(char => {
      if(!charMap.has(char)) charMap.set(char, 1)
      else charMap.set(char, charMap.get(char) + 1)
  })
  
  for(let i in s) {
      if(charMap.get(s[i]) === 1) return i
  }
  return -1
}

/*
  Runtime: 216 ms, faster than 14.67% of JavaScript online submissions for First Unique Character in a String.
  Memory Usage: 57.4 MB, less than 5.18% of JavaScript online submissions for First Unique Character in a String.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
