def exponential(a, b):
  
  number = abs(a) #to convert it to a non-negative number
  exponent = b
  
  while b > 1:

    result = 0
    
    for i in range(0, abs(a)):
      result += number #add the number as many times as the number to replace the mupltiplication
    
    number = result
    b -= 1
    
  if a < 0 and (exponent % 2 == 1):
    return -result

  else:
    return result


print(exponential(5,3))

