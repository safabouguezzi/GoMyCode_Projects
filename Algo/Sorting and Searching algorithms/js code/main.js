
function insertionSort(arr, n)  
{  
    let i, key, j;  
    for (i = 1; i < n; i++) 
    {  
        console.log("STEP ", i)

        key = arr[i];  
        console.log( "position of key=", i, "| value of key=", arr[i])
        j = i - 1;  
        /* Move elements of arr[0..i-1], that are  
        greater than key, one step to the right */
        while (j >= 0 && arr[j] > key) 
        {  
            console.log("value of j=", j)
            arr[j + 1] = arr[j]; 
            console.log("value to push one step to the right:", arr[j + 1]) 
            j = j - 1;  
            console.log("value of i=", i, "new value of j=", j)

        }  
        arr[j + 1] = key;  
        console.log("new position of key=", j + 1, "| value of key=", arr[j + 1])
        console.log("the array in this step=", arr)

    }
  
}  
    
// Print an array of size n  
function printArray(arr, n)  
{  
    let i;  
    document.write(" | "); 
    for (i = 0; i < n; i++) { 
        document.write(arr[i] + " | "); 
    }
}  
    
// Driver code 
    let arr = [5, 2, 9, 8, 1];  
    let n = arr.length;  
    
    insertionSort(arr, n);  
    printArray(arr, n);  
    
