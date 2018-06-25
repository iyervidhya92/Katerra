def sort(array, end):
   
   #Linear-time partition  
    start = 0; mid = 0
    pivot = end - 1
    
    
    while midd <= pivot:
        
        #put all the zeros in the start of the array, 1's in the middle 
        #and 2's in the end of the array

        if array[mid] == 0:
            
            array[start],array[mid] = array[mid],array[start]
            start = start + 1; mid = mid + 1;
        
        elif array[mid] == 1:
        
            mid = mid + 1;
        
        else:
        
            array[mid],array[pivot] = array[pivot],array[mid] 
            pivot = pivot - 1;

    return array
     
#Input array to be sorted
array = [2,0,0,1,2,1]
size = len(array)

#Function call to sort the array 
array = sort(array, size)

#print the sorted array
print "Sorted Array",

for item in array:
        print item,
print