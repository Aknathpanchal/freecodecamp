//Search key in map and print the path

const map = {
  a: {
    b: "test",
    c: [],
    d: {
      e: "test",
      f: {
        "target1": "found me"
      }
    }
  },
  b1: [
    {
      c1: {
      	"target2": "found me again"
      },
      d1: "test"
    }
  ]
}

// Write a function that takes two input a key name & an object.
// Find if the key present in object.
// if key exist: then print the path of the key inside object.
// else return empty string("")


// Example
// Input 1: "tar

// Example
// Input 1: "target1" --- Input 2: map  -----> Output: "a.d.f.target1"
// Input 1: "target2" --- Input 2: map  -----> Output: "b1.0.c1.target2"
// Input 1: "target3" --- Input 2: map  -----> Output: ""

function find(key,obj){

}

// var x = 10;
// function disp (){
//     const a = -10;
//     x=5;
//     {
//         console.log(x);
//         // let x = 3;
//     }
//     console.log(a);
//     x=20;
//     disp2();
// }
// function disp2 (){
//   console.log(a);
//     let a=5;
//     let x=-4;
//     console.log(x);
// }
// disp();
// console.log(x);

//5,-10,-10,-4,20

// var arr=[1,2,3,4,5,6,7,8,9]
// ans= [ [2,8], [3,7], [4,6] , [1,9] ]
// var target=10


// function value(arr,target){
//   console.log(arr)
//   var s=0
//   var e=arr.length
//   var Data=[]
//   console.log(s,e)
//   while(s<arr.length-1){
    
//     if(arr[s]+arr[e]==target){
//       Data.push(arr[s],arr[e])
//     }
//     else if(arr[s]+arr[e]<target){
//       s++
//     }else {
//       e--
//     }
//   }
//   console.log(Data)
// }
// value(arr,target)

// var arr=[1,2,3,4,5,6,7,8,9]
// ans= [ [2,8], [3,7], [4,6] , [1,9] ]
// var target=10


// function value(arr,target){
//   console.log(arr)
//   var s=0
//   var e=arr.length-1
//   var Data=[]
//   // console.log(s,e)
//   while(s<e){
    
//     if(arr[s]+arr[e]==target && s!=e){
//       Data.push(arr[s],arr[e])
//       s++
//       e--
//     }
//     else if(arr[s]+arr[e]<target){
//       s++
//     }else {
//       e--
//     }
//   }
//   console.log(Data)
// }
// value(arr,target)

//   var data=[]
// for(var i=0;i<arr.length;i++){
//   var data1=[]
//   for(var j=i+1 ;j<arr.length ;j++){
// if(arr[i]+arr[j]==target){
  
//   data1.push(arr[i],arr[j])
// } 
//   }
//   data.push(data1)
// }
// console.log(data)
// }

// value(arr,target)

// let arr = [10201,30215,90051,36103,92315]
// //arr=arr.split(',').map(Number)
// // for (var i=0 ; i<arr.length ; i++){
// //  var arr2=
// // }
// var bag=[];

// let a ;
// // let obj = {}
// let mid ;
// for(let i =0;i<arr.length;i++){

    
// //   bag = bag + arr[i];
 
//   a = arr[i].toString()

//   mid = Math.floor(arr.length/2)
// //   console.log(a)
//   //   console.log(mid)

//    console.log(+(a[mid]), arr[i])

// // bag.push(+(a[mid]) , arr[i] )

// //    bag.push(+(a[mid] :  )    )

// }
// // console.log(bag )


// merge sort

var arr=[3,4,2,1,7]
// arr=arr.split(",").map(number)
function merge(arr , arr.length){
console.log(arr)
if(arr.length==1){

}
mid=~~(arr.length/2)
return merge(, 
}

merge(arr, arr.length)