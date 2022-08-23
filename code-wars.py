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
