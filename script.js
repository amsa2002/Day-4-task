//1.Do the below programs in anonymous function & IIFE

//a.Print odd numbers in an array

//anonymous function

var result = [];
var a = function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([15,18,23,14,16,24]));

//IIFE

 var result1 = [];
(function (arr1){
  for(var i=0;i<arr1.length;i=i+1){
    if(arr1[i]%2!==0){
        result1.push(arr1[i]);
    }
  }
  console.log(result1) 
})([1,2,3,4,5,6,7,8])


//b.Convert all the strings to title caps in a string array

//Anonymous function

var a = function (str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
console.log(a("geeks for geeks"));

//IIFE

//c.Sum of all numbers in an array

//Anonymous function

var a = function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(a([1,2,3]));

//IIFE

(function(numbers1){
    var sum1=0;
    for(var i=0; i < numbers1.length; i++){
        sum1 += numbers1[i];
    }
    console.log(sum1);
})([1,2,3])

//d.Return all the prime numbers in an array

//Anoyomous function

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var primenum = function(arr1) {
  var primeNumbers = [];
  for (var i = 0; i < arr1.length; i++) {
    if (isPrime(arr1[i])) {
      primeNumbers.push(arr1[i]);
    }
  }
  return primeNumbers;
}

console.log(primenum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//IFFE function

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
(function (arr) {
  var primeNumbers = [];
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }

  console.log(primeNumbers);

})([2,4])

//e.Return all the palindromes in an array

//Anonymous

var  palindrome = function(arr){
  var result =[];
  for(var i=0;i<arr.length;i++){
      var data = arr[i].split("").reverse().join("");
      if(data===arr[i]){
          result.push(arr[i]);
      }
  }
       return result;
  }
  console.log(palindrome(['mom','dad','data']));

//IFFE

(function(arr){
  var result =[];
  for(var i=0;i<arr.length;i++){
      var data = arr[i].split("").reverse().join(""); 
      if(data===arr[i]){
          result.push(arr[i]);
      }
  }
  console.log(result);
})(['mom','dad','data'])

//f.Return median of two sorted arrays of the same size.

//Anonymous

const arr1 = [1,3,5,7];
const arr2 = [2,4,6,7];
var findMedianOfTwoSortedArrays = function (arr1, arr2){
  let arr = [...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let n = arr.length;
  if(n%2===0){
 return((arr[n/2]+arr[n/2-1])/2)
  }
  else{
 return arr[Math.floor(n/2)]
  }
}
console.log(findMedianOfTwoSortedArrays(arr1,arr2));

//IFEE

const arr3 = [1,3,5,7];
const arr4 = [2,4,6];
(function (arr3, arr4){
  let arrMedian = [...arr3,...arr4];
  arrMedian.sort((a,b)=>a-b);
  let n = arrMedian.length;
  if(n%2===0){
 result.push ((arrMedian[n/2]+arrMedian[n/2-1])/2)
  }
  else{
//arrayname[length/2]
 result.push (arrMedian[Math.floor(n/2)])
  }
  console.log(result);
})(arr3,arr4);

//g.Remove duplicates from an array

//Anonymous

var removeduplicate = function(array1){
  return [...new Set(array1)]
}
console.log(removeduplicate([1,1,2,3,4]));

//IFFE

(function(array){
  let removeduplicate = [...new Set(array)];
  console.log(removeduplicate);
})([1,1,2,3,4]);

//h.Rotate an array by k times

//Anonymous

var rotateArray = function(arr1,k1){
  for(var i=0;i<k1;i++){
    //push
    arr1.push(arr1[i])
   }
   for(var i=0;i<k1;i++){
    //shift
    arr1.shift()
   }
   return arr1;
}
console.log(rotateArray([1,2,3,4,5],3));

//IFFE

(function(arr,k){
   for(var i=0;i<k;i++){
    //push
    arr.push(arr[i])
   }
   for(var i=0;i<k;i++){
    //shift
    arr.shift()
   }  
   console.log(arr)
})([1,2,3,4,5], 3);
  
//Q3.Do the below programs in arrow functions.

//Arrow function

    //a.Print odd numbers in an array

var result2 = [];
var odd =(arr2)=>{
  for(var i=0;i<arr2.length;i=i+1){
    if(arr2[i]%2!==0){
        result2.push(arr2[i]);
    }
  }
  return result2;
}
 console.log(odd([15,18,23,14,16,24]));

    //b.Convert all the strings to title caps in a string array

var strings = ["hello world", "goodbye world"];

var toTitleCase = (string) => {
  var words = string.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1));
};

 titleCaseStrings = strings.map(toTitleCase);

console.log(titleCaseStrings);

    //c.Sum of all numbers in an array

var a1 = (numbers3) => {
var sum3 = 0;
  for (var i = 0; i < numbers3.length; i++) {
      sum3+= numbers3[i];
    }
    return sum3;
}
console.log(a1([1,2,3]));

 //d.Return all the prime numbers in an array 

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var primenum1 = (arr2) => {
  var primeNumbers = [];
  for (var i = 0; i < arr2.length; i++) {
    if (isPrime(arr2[i])) {
      primeNumbers.push(arr2[i]);
    }
  }
  return primeNumbers;
}
console.log(primenum1([2,4]));

 //e.Return all the palindromes in an array

var palindrome1 = (arr) =>{
  var result =[];
  for(var i=0;i<arr.length;i++){
      var data = arr[i].split("").reverse().join(""); 
      if(data===arr[i]){
          result.push(arr[i]);
      }
  }
  return result;
}
console.log(palindrome1(['mom','dad','data']));







  

    












