// // 1-misol 

// let arr = [1, null, 2, 0,  "", 3, undefined, 4,7, 0];

// const notFalse = (arr) => arr.filter(el => el !== null && el !== undefined && el !== '');

// newArr = notFalse(arr);
// console.log(newArr);

// // 2-misol 
// let arr = ["madam", "level", "world", "radar", "hello"];

// const pal_El = (arr) => {
//     return arr.filter(palen => palen.split("").reverse().join('') == palen);
// }
// newArr = pal_El(arr);
// console.log(newArr);

// // 3-misol 

// let arr = [1, [2, 3], [4, [5, 6]]];

// const allFlat = (arr) => arr.flat(Infinity);

// newArr = allFlat(arr);

// console.log(newArr);

// // 4-misol(1-usul)
// let arr = [10, 20, 30, 40, 50];

// let n = 3;

// const returnN = (arr, n) => {
//     newArr = []
//     for (let i = 0; i < n; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// newArr = returnN(arr, n);

// console.log(newArr);
// // 4-misol(2-usul)
// let arr = [10, 20, 30, 40, 50];

// let n = 2;

// const returnN = (arr, n) => arr.slice(0, n)

// newArr = returnN(arr, n);

// console.log(newArr);

// // 5-misol 

// let arr = ["hello", "world"];

// const toUpperCaseFunc = (arr) => arr.map(el => el.charAt(0).toUpperCase() + el.slice(1, ));

// let newArr = toUpperCaseFunc(arr);

// console.log(newArr);

// // 6-misol 
// let arr = [5, 10, 15];

// const indexFunc = (arr) => {
//     let count = 0;
//     let newArr = [];
//     for(let index of arr){
//         newArr.push(count * index);
//         count++;
//     }
//     return newArr;
// }

// let newArr = indexFunc(arr);
// console.log(newArr);

// // 7-misol 
// let arr = [1, 2, 3, 4, 5, 6];

// const toqJuft = (arr) => [arr.filter(el => el % 2 == 0), arr.filter(el => el % 2 == 1)];
// let newArr = toqJuft(arr)

// console.log(newArr);

// // 8-misol 
// let arr = [3, 1, 4, 2, 5];
// const usishFun = (arr) => arr.sort((a, b) => a - b);
// const kamayishFun = (arr) => arr.sort((x, y) => y - x );

// usishArr = usishFun(arr);

// console.log(usishArr)

// kamayishArr = kamayishFun(arr);
// console.log(kamayishArr);

// // 9-misol 
// let arr = ["apple", "kiwi", "banana", "pear"];

// const sortLength = (arr) => arr.sort((a, b) => a.length - b.length);

// sortLength(arr) 

// console.log(arr);

// // 10-misol 

// let arr = [1, 2, 3, 4, 5, 6];
// let n = 2;

// const funArr = (arr, n) => {
//     result = [];
//     for (let i = 0; i < arr.length; i+=n) {
//         result.push(arr.slice(i, i + n))        
//     }
//     return result;
// }

// newArr = funArr(arr, n);
// console.log(newArr);

