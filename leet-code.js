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

/*
  7. Reverse Integer
  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
  Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {
  let ret = []
  let neg = false
  x.toString().split('').forEach(char => {
      if(char == '-') neg = true
      else ret.unshift(char)
  })
  ret = parseInt(ret.join(''))
  if(neg) ret *= -1
  if(ret > 2147483647 || ret < -2147483647) return 0
  else return ret
}

/*
  Runtime: 105 ms, faster than 58.20% of JavaScript online submissions for Reverse Integer.
  Memory Usage: 44.4 MB, less than 17.89% of JavaScript online submissions for Reverse Integer.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  9. Palindrome Number
  Given an integer x, return true if x is palindrome integer.

  An integer is a palindrome when it reads the same backward as forward.
  For example, 121 is a palindrome while 123 is not.
*/

var isPalindrome = function(x) {
  if(x < 0) return false
  return x === parseInt(x.toString().split('').reverse().join('')) ? true : false
}

/*
  Runtime: 171 ms, faster than 96.12% of JavaScript online submissions for Palindrome Number.
  Memory Usage: 51.1 MB, less than 52.12% of JavaScript online submissions for Palindrome Number.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
  14. Longest Common Prefix
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".
*/

var longestCommonPrefix = function(strs) {
  let result = []
  
  for(let i in strs[0]){
      let same = true
      for(let j = 1; j < strs.length; j++){
          if(strs[j][i] !== strs[0][i]) {
              same = !same
              break
          }
      }
      if(same) result.push(strs[0][i])
      else break
  }
  return result.join('')
}

/*
  Runtime: 91 ms, faster than 59.55% of JavaScript online submissions for Longest Common Prefix.
  Memory Usage: 42.5 MB, less than 58.12% of JavaScript online submissions for Longest Common Prefix.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
