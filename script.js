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

//Anonyoums function

var a = function (str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
console.log(a("geeks for geeks"));


//c.Sum of all numbers in an array

//Anonyoums function

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




