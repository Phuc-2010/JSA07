// console.log ("aaaaa")

// let i = 1
// while(i < 5){
//     console.log("So" + i)
//     i++
// }

// do{
//     console.log("So" + i)

// }while(i < 5)

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log("So chan" + i)
//     }
    
// }

// let arr = ["1", "2", "3"]
// console.log("arr" + arr)
// console.log("Lenght" + arr.length)
// console.log("Push" + arr.push("4"))
// console.log("arr" + arr)
// console.log("Pop" + arr.pop())
// console.log("arr" + arr)
// console.log("arr" + arr)
// console.log("shift" + arr.shift())
// console.log("arr" + arr)

let sp1 = {
    Name : "Giay" , 
    Color : "Do" ,
    Price : "3.000.000",
    Size : 43
    
}
console.log(sp1)

let arr = [sp1]


console.log(arr)

for (let i = 1; i < arr.lenght; i++) {
    if(arr[i].Price == "3.000.000"){
        console.log(arr[i].Name)
    }
   }