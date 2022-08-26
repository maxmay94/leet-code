"""
DNA to RNA Conversion
  Convert any 'T' in a string to a 'U'
    
    "GCAT"  =>  "GCAU"
"""
def dna_to_rna(dna):
    return dna.replace('T', 'U')

# ------------------------------------------------------------------------------------------------------------

"""
Convert number to reversed array of digits
  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

    348597 => [7,9,5,8,4,3]
    0 => [0]  
"""

def digitize(n):
    return [int(s) for s in str(n)][::-1]

# ------------------------------------------------------------------------------------------------------------

"""
Beginner Series #1 School Paperwork
  Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
  Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
    Example:
    n= 5, m=5: 25
    n=-5, m=5:  0
"""

def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    else:
        return n * m

# ------------------------------------------------------------------------------------------------------------

"""
Basic Mathematical Operations
  Your task is to create a function that does four basic mathematical operations.
  The function should take three arguments - operation(string/char), value1(number), value2(number).
  The function should return result of numbers after applying the chosen operation.
    Examples(Operator, value1, value2) --> output
    ('+', 4, 7) --> 11
    ('-', 15, 18) --> -3
    ('*', 5, 5) --> 25
    ('/', 49, 7) --> 7
"""

def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '*':
        return value1 * value2
    elif operator == '/':
        return value1 / value2

# ------------------------------------------------------------------------------------------------------------

"""
Categorize New Member
  The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
  To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
  Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output
  Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

    Example
    input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
    output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
"""

def open_or_senior(data):
    ret = []
    for person in data:
        if person[0] >= 55 and person[1] > 7:
            ret.append('Senior')
        else:
            ret.append('Open')
    return ret

# Better Solution 
def openOrSenior(data):
  return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]

# ------------------------------------------------------------------------------------------------------------

"""
Return Negative
  In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
    Examples
    make_negative(1);  # return -1
    make_negative(-5); # return -5
    make_negative(0);  # return 0
"""

def make_negative( number ):
  return -number if number > 0 else number

# ------------------------------------------------------------------------------------------------------------

"""
String ends with?
  Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
    Examples:
    solution('abc', 'bc') # returns true
    solution('abc', 'd') # returns false
"""
def solution(string, ending):
    return string.endswith(ending)

# ------------------------------------------------------------------------------------------------------------

"""
Square Every Digit
  Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
    Note: The function accepts an integer and returns an integer
"""

def square_digits(num):
    nums = [int(d) for d in str(num)]
    ret = []
    
    for n in nums:
        str(ret.append(n**2))
        
    strings = [str(ints) for ints in ret]
    response = "".join(strings)
    return int(response)

# Better solution
def square_digits2(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)

# ------------------------------------------------------------------------------------------------------------

"""
Sum of two lowest positive integers
  Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
    [10, 343445353, 3453445, 3453545353453] should return 3453455.
"""

def sum_two_smallest_numbers(numbers):
    min1 = min(numbers)
    numbers.remove(min1)
    min2 = min(numbers)
    return min1 + min2

#Better Solution
def sum_two_smallest_numbers_2(numbers):
    return sum(sorted(numbers)[:2])

# ------------------------------------------------------------------------------------------------------------

"""
Mumbling
  This time no story, no theory. The examples below show you how to write function accum:
    Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
"""

#Naive Solution 
def accum(s):
    ret = ''
    for i, char in enumerate(s):
        for j in range(0, i + 1):
            if j == 0:
                ret += char.upper()
            else:
                ret += char.lower()
        ret += '-'
    return ret[:-1]

#Better Solution
def accum_2(s):
    ret = ""
    for i, c in enumerate(s):
        ret += c.upper() + c.lower()*i + "-"
    return ret[:-1]

#Best Solution
def accum_3(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))

# ------------------------------------------------------------------------------------------------------------

"""
Abbreviate a Two Word Name
  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
  The output should be two capital letters with a dot separating them.
    It should look like this:
    Sam Harris => S.H
    patrick feeney => P.F
"""

def abbrev_name(name):
    first, last = name.upper().split()
    return first[0] + '.' + last[0]

# ------------------------------------------------------------------------------------------------------------

"""
Even or Odd
  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
"""

def even_or_odd(number):
    return 'Odd' if number % 2 else 'Even'

#Interesting solution
def even_or_odd_2(number):
  return ["Even", "Odd"][number % 2]

# ------------------------------------------------------------------------------------------------------------

"""
List Filtering
  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
    Example
    filter_list([1,2,'a','b']) == [1,2]
    filter_list([1,'a','b',0,15]) == [1,0,15]
    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
"""

def filter_list(l):
  return [i for i in l if not isinstance(i, str)]

# ------------------------------------------------------------------------------------------------------------

"""
Sentence Smash
  Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
    Example
    ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
"""

def smash(words):
    return ' '.join(words)

# ------------------------------------------------------------------------------------------------------------

"""
Binary Addition
  Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
  The binary number returned should be a string.
    Examples:(Input1, Input2 --> Output (explanation)))
    1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
    5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
"""

def add_binary(a,b):
    return bin(a + b)[2:]

#Different Syntax
def add_binary_2(a, b):
    return format(a + b, 'b')

# ------------------------------------------------------------------------------------------------------------

"""
L1: Set Alarm
  Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
  The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 
    Examples:
    setAlarm(true, true) -> false
    setAlarm(false, true) -> false
    setAlarm(false, false) -> false
    setAlarm(true, false) -> true
"""

def set_alarm(employed, vacation):
    return employed and not vacation

# ------------------------------------------------------------------------------------------------------------

"""
Double Char
  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
    Examples (Input -> Output):
    * "String"      -> "SSttrriinngg"
    * "Hello World" -> "HHeelllloo  WWoorrlldd"
    * "1234!_ "     -> "11223344!!__  "
"""

def double_char(s):
    return ''.join(char + char for char in s)

# ------------------------------------------------------------------------------------------------------------

"""
Remove First and Last Character
  It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
"""

def remove_char(s):
    return s[1:-1]

# ------------------------------------------------------------------------------------------------------------

"""
MakeUpperCase
  Write a function which converts the input string to uppercase.
"""

def make_upper_case(s):
    return s.upper()

# ------------------------------------------------------------------------------------------------------------
