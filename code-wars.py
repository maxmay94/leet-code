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
"""

def digitize(n):
    return [int(s) for s in str(n)][::-1]

# ------------------------------------------------------------------------------------------------------------
