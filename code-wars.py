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

# imporoved solution

def square_digits2(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)

# ------------------------------------------------------------------------------------------------------------
