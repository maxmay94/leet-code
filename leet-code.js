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


/*
  66. Plus One
  You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
  Increment the large integer by one and return the resulting array of digits.
*/

var plusOne = function(digits) {
  digits = BigInt(digits.join(''))
  digits++
  return digits.toString().split('')
}

/*
  Runtime: 105 ms, faster than 21.42% of JavaScript online submissions for Plus One.
  Memory Usage: 41.8 MB, less than 74.85% of JavaScript online submissions for Plus One.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
 You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

  The professor will give you a simple math expression, of the form

  [number][op][number]=[number]
  He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

  Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

  Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.
*/

function solveExpression(exp) {
  
} 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  35. Search Insert Position
  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
  You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = (nums, target) => {
  let lo = 0, hi = nums.length
  while(lo < hi) { 
    let mid = lo + Math.floor((hi-lo)/2)
    if (target > nums[mid]) lo = mid + 1 
    else hi = mid 
  }
  return lo
}

/*
  Runtime: 72 ms, faster than 82.99% of JavaScript online submissions for Search Insert Position.
  Memory Usage: 42.2 MB, less than 58.01% of JavaScript online submissions for Search Insert Position.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  2. Add Two Numbers
  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var addTwoNumbers = function(l1, l2) {
  let head = null
  let temp = null
  let carry = 0
  while (l1 !== null || l2 !== null) {
      let sum = carry
      if (l1 != null) {
          sum += l1.val
          l1 = l1.next
      }
      if (l2 != null) {
          sum += l2.val
          l2 = l2.next
      }
      let node = new ListNode(Math.floor(sum) % 10)
      carry = Math.floor(sum / 10)
      if (temp == null) {
          temp = head = node
      } else {
          temp.next = node
          temp = temp.next
      }
  }
  if (carry > 0) temp.next = new ListNode(carry)
  return head
}

/*
  Got a little stuck and had to search for help, but we got there
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  Recover a secret string from random triplets.

  There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
  A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".
  As a simplification, you may assume that no letter occurs more than once in the secret string.
  You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

          secret1 = "whatisup"
          triplets1 = [
            ['t','u','p'],
            ['w','h','i'],
            ['t','s','u'],
            ['a','t','s'],
            ['h','a','p'],
            ['t','i','s'],
            ['w','h','s']
          ]
*/

var recoverSecret = function(triplets) {
  let trips = triplets
  let tempKey
  let ret = []
  
  const mapItems = (trips) => {
    let charMap = new Map()
    //Map Items in triplets, if they are in index 0 in all arrays, value should be 0
    trips.forEach(trip => {
      trip.forEach((char, i) => {
        if(!charMap.has(char)) charMap.set(char, i)
        else charMap.set(char, charMap.get(char) + i)
      })
    })
    return charMap
  }
  
  const findZero = (value, key) => {
    // Get Key of item with value 0
    if(value === 0) {
      tempKey = key
    }
  }
  
  const checkTrips = () => {
    // Flatten 2d Array and see if there is anything in it
    return trips.flat().length > 0 ? true : false
  }
  
  while(checkTrips()) {
    let zeroMap = mapItems(trips)
    zeroMap.forEach(findZero)
    ret.push(tempKey)
    // Remove the selected character from all arrays
    trips.forEach(trip => {
      if(trip[0] === tempKey){
        trip.shift()
      } 
    })
  }

  return ret.join('')
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  231. Power of Two
    Given an integer n, return true if it is a power of two. Otherwise, return false.
    An integer n is a power of two, if there exists an integer x such that n == 2x.
*/

var isPowerOfTwo = function(n) {
  if (n == 0) return false
  if( n % 2 !== 0 && n !== 1) return false
  while (n != 1) {
      if (n % 2 != 0) return false
      n = n / 2
  }
  return true
}

/*
  Runtime: 73 ms, faster than 87.31% of JavaScript online submissions for Search Insert Position.
  Memory Usage: 43 MB, less than 91.47% of JavaScript online submissions for Search Insert Position.
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
