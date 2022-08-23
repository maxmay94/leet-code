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
