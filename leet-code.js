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

/*
  19. Remove Nth Node From End of List
  Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

var removeNthFromEnd = function(head, n) {
  let dummyHead = new ListNode(-Infinity)
  dummyHead.next = head
  let resultHead = dummyHead
  let count = 0
  let tail = head
  
  while(count < n) {
      count++
      tail = tail.next
  }
  
  let removeNode = head
  let prev = dummyHead
  
  while(tail) {
      tail = tail.next
      removeNode = removeNode.next
      prev = prev.next
  }
  
  prev.next = removeNode.next
  return resultHead.next
}

/*
  Runtime: 80 ms, faster than 72.43% of JavaScript online submissions for Remove Nth Node From End of List.
  Memory Usage: 43.2 MB, less than 36.10% of JavaScript online submissions for Remove Nth Node From End of List.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  20. Valid Parentheses
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
*/

var isValid = function(s) {
  if(s.length < 2) return false
  
  let stack = []
  let valid = true
  for(let i = 0; i < s.length; i++) {
      if(s[i] === '(' || s[i] === '[' || s[i] === '{' ) {
          stack.push(s[i])
      } else {
          let temp = stack.pop()
          if(temp === undefined) {
              valid = false
              break
          } else if(temp === '(' && s[i] !== ')') {
              valid = false
              break
          } else if(temp === '[' && s[i] !== ']') {
              valid = false
              break
          } else if(temp === '{' && s[i] !== '}') {
              valid = false
              break
          }
      }
  }
  if(stack.length !== 0) valid = false
  return valid
}

/*
  Runtime: 92 ms, faster than 57.18% of JavaScript online submissions for Valid Parentheses.
  Memory Usage: 42.3 MB, less than 73.01% of JavaScript online submissions for Valid Parentheses.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
  21. Merge Two Sorted Lists
  You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
  Return the head of the merged linked list.
*/

var mergeTwoLists = function(l1, l2) {  
  let dummy = new ListNode(-Infinity)
  let prev = dummy
  
  while(l1 && l2) {
      if(l1.val <= l2.val) {
          prev.next = l1
          prev = l1
          l1 = l1.next
      } else {
          prev.next = l2
          prev = l2
          l2 = l2.next
      }
  }
  
  if(!l1) prev.next = l2
  if(!l2) prev.next = l1
  
  return dummy.next
}

/*
  Runtime: 74 ms, faster than 90.88% of JavaScript online submissions for Merge Two Sorted Lists.
  Memory Usage: 44.3 MB, less than 48.60% of JavaScript online submissions for Merge Two Sorted Lists.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
  28. Implement strStr()
  Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
  Clarification:
  What should we return when needle is an empty string? This is a great question to ask during an interview.
  For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

var strStr = function(haystack, needle) {
  if(needle.length === '') return 0
  else if(haystack.includes(needle)) return haystack.indexOf(needle)
  else return -1
}

/*
  Runtime: 94 ms, faster than 40.66% of JavaScript online submissions for Implement strStr().
  Memory Usage: 42.1 MB, less than 42.63% of JavaScript online submissions for Implement strStr().
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  43. Multiply Strings
  Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
  Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

var multiply = function(num1, num2) {
  return (BigInt(num1) * BigInt(num2)).toString()
}

/*
  Runtime: 99 ms, faster than 73.73% of JavaScript online submissions for Multiply Strings.
  Memory Usage: 42.1 MB, less than 93.65% of JavaScript online submissions for Multiply Strings.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
