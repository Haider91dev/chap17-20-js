   //Q3 Write a program to print numeric counting from 1 to 10

//    var num = prompt("enter the number you want to print");

//    for(var i=0;i<num;i++)
//    {
//       console.log(i);
//    }

 //Q4  Write a program to print multiplication table of any  number using for loop. Table number & length should be  taken as an input from user

//   var number = prompt("enter the table number");
//   var length = prompt("length of the table to print");
  
//   console.log("Table of a number is "+number)
//   for(var i =1;i<=length;i++)
//   {
//       console.log(
//             number+" x "+i +" = " + number*i     )
//   }

//  Q 5    Write a program to print items of the following array  using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”,  “strawberry”] 

//  var fruits =['apple','banana','mango','orange','strawberry']

//   for (var i =0 ;i<fruits.length;i++)
//   {
//       // console.log(fruits[i])
//       console.log("Elements at index "+i+" is "+fruits[i]);
//   }

 // 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an  array. 
// After searching, prompt the user whether the given item is found in the list or not. Example:

//   var cakes =['cake','apple pie','cookie','chips','patties'];
//   var search =prompt("name the item do you want to search?");
//   var flag = false
//   for(var i=0;i< cakes.length;i++)
//   {
//       if(cakes[i] === search.toLocaleLowerCase())
//       {
//             alert("we find the items " + search);
//             flag =true;
//       }
//   }
   
//    if(flag ===false)
//    {
//       alert("not find in the list")
//    }

  
 
 //Q6 a. 
 
    
   
 
//
  //  Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//  for (var i = 0;i<=15;i++)
//  {
//       console.log(i)
//  }
  // Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//    for(var i =10 ;i>=1;i--)
//    {
//       console.log(i)
//    }


    //Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//   for(var i =0;i<=10;i++)
//   {
//       console.log(i*2)
//   }

 // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
  
  
//  e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//   for (var i =1;i<=10;i++)
//    {
//        console.log(i*2+"k")
//    }

// 8. Write a program to identify the largest number in the  given array. 
  // var nums  = [24, 53, 78, 91, 12];
  // var largestNumber = 0;

  // for(var i =0 ;i<nums.length;i++)
  // {
  //   if (nums[i]>largestNumber) {
  //     largestNumber =nums[i]
      
  //   }
  // }
  // alert("we got the largrst number is: " +largestNumber)
 


// 9. Write a program to identify the smallest number in the  given array. 
//  var nums = [2, 53, 78, 91, 12,-3];
//  var smallestNumber = nums[0]

//   for(var i = 0 ;i<nums.length;i++)
//   {

//     // this algorithm is not good to find the smallest number
//     if(nums[i]<nums[0]){
//       smallestNumber =nums[i]

//     }
//   }
//    alert("we got the smallest number "+smallestNumber)



  // 10. Write a program to print multiples of 5 ranging 1 to  100
  
   var nums =prompt("entet thr numbrter")
  for (var i =1;i<=nums.length;i++)
  { 
    if (i%5 ==0) {
      console.log(i)
    }
  }

