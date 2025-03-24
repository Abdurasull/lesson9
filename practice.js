// 1-misol 
// let arr = [1, 5, 32, 0, -5];

// const maxNamber = (arr) => {
//     length1 = arr.length - 1;
//     for (let i = 0; i < length1 -1; i++) {
//         if(arr[i] > arr[i + 1]) arr[i + 1] = arr[i];
//     }
//     return arr[arr.length - 1 - 1]
// }

// console.log(maxNamber(arr));


// // 2-misol 

// let arr = [1, 5, 32, 0, -5];
// let arr2 = []

// arr.sort((a, b) => (a - b))

// arr2.push(arr[0], arr[arr.length - 1]);

// console.log(arr2);

// // 3-misol 

// let arr = [["key1", "Asror"], ["key2", "Asror1"], ["key3", "Asror3"], ["key4", "Asror4"]];

// const objFunc = (list) => {
//     let obj = {};
//     for(let index of list) obj[index[0]] = index[1];
//     return obj;
// }

// console.log(objFunc(arr));

// // 4-misol 

// let arr = ["100011", "0011", "110", "0010"];

// const reverseWord = (word) => word.split("").reverse().join("");

// const reverseFunc = (list) => {
//     newList = (list.map(reverseWord)).reverse();
//     return newList;
// }

// console.log(reverseFunc(arr));

// 5-misol
// let arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6];

// const setFunc = (arr) => {
//     obj = {};
//     newArr = [];
//     for(let index of arr){
//         if(!obj[index]) obj[index] = index; 
//     }
//     for(let key in obj) newArr.push(Number(key));
//     return newArr;
// }

// console.log(setFunc(arr));

// // 6-misol 
// let arr = [3, 67, 4, 5, 6];

// let arr1 = [1, 67, 2, 3, 4];
// const setFun = (arr1, arr2) => {
//     newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] == arr2[j]) newArr.push(arr1[i]);           
//         }
        
//     }
//     return newArr;
// }
// console.log(setFun(arr1, arr));

// // 7-misol 
// let arr = [1, 2, 3, 4, 5];

// let target = 3;

// const checkTarget = (arr, tar) => {
//     for(let index of arr) {
//         if(tar == index) return "Found";
//     }
//     return "not found";
// }

// console.log(checkTarget(arr, target));

// // 8-misol 

// let arr = ["apple", "banana", "kiwi"];

// const strFun = (str) => str.length;

// let newArr = arr.map(strFun);
// console.log(newArr)

// // 9-misol 
// let arr1 = [1, 2, 3, 4];
// let n = 3;

// const repetArr = (arr, n) => {
//     newArr = [];
//     for (let i = 0; i < n; i++) {
//         newArr.push(...arr);
//     }
//     return newArr;
// }

// console.log(repetArr(arr1, n));

// // 10-misol 

// let arr = [1, 3, 3, 2, 4, 3, 2, 2,2,2, 1];

// const maxElrepate = (arr) => {
//     count = {};
//     max_el = arr[0];
//     maxCount = 0;

//     for(let index of arr){
//         if(count[index]) count[index]++;
//         else count[index] = 1;

//         if(count[index] > maxCount){
//             maxCount = count[index];
//             max_el = index;
//         }
//     }
//     return max_el;
// }

// console.log(maxElrepate(arr));

// 11-misol 
// let arr = [ 19, 1, 2, 15 ];
// let users = [
//     {
//         id: 1,
//         username: "Mardonbek",
//         age: 17
//     },
//     {
//         id: 2,
//         username: "Shohjahon",
//         age: 16
//     },
//     {
//         id: 3,
//         username: "Amirbek",
//         age: 19
//     },
//     {
//         id: 4,
//         username: "Sherbek",
//         age: 18
//     }
// ]
// function handleSortUsers(arr, key){
//     arr.sort((a, b) =>  {
//         String.
//         if(key == 'username' || key == 'age' || key == 'id'){
//             if(key == 'username') return a[key].toUpperCase().charCodeAt(0) - b[key].toUpperCase().charCodeAt(0);
//             else return a[key] - b[key];
//         }
//     });
// }


// handleSortUsers(users, "username")
// console.log(users);