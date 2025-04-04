 
//  1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , 
// თუ რიცხვები ტოლია დააბრუნებს 0 -ს

// function numbers(m,n){
// if (m>n) return m
// else if (m==n) return 0
// else return n}
//  console.log (numbers(7,10))


// 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
// function sumofnumbers(a,b) {
//     return a+b
// }
// console.log(sumofnumbers(7,1))


//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
// function fullname () 
// { console.log ( "Tamari Tsikarishvili")
//  } 
// fullname ()
// ან
// const Name = () => console.log ("Tamari Tsikarishvili");
// Name ()

//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ
//( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
// function fullname (firstname, lastname) {
//      return firstname+" "+lastname
//  }
//  console.log (fullname ("Tamari", "Tsikarishvili"))

// 5.Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ 
// რიცხვამდე (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის
//  მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის 
//  მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)

//  function multiply (n) {
//             let y=1
//        for (let n=1; n<5; n++) y *=n
//            return y *=n
//        }
// console.log (multiply (5))

//Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: 
// firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი 
// fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ
//  უნდა დაწეროთ ) 

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

// let student = {
//     fisrtName: "Tamari",
//     lastName: "Tsikarishvili",
//     age: 34,
//     scores: [4, 7, 5, 3, 2],
//     fullName: function () {
//         this.firstName= "Tamari"
//         return this.firstName + " " + this.lastName
//     }
// }
// console.log(student.fullName()) 



// 7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს 
//  ქულების ჯამს

// let student = {
//     fisrtName: "Tamari",
//     lastName: "Tsikarishvili",
//     age: 34,
//     scores: [4, 7, 5, 3, 2],
//     sumofscores: function () {
//         sum=0
//         for (let i = 0; i < this.scores.length; i++) 
//             {
//             sum += this.scores[i];
//         }
//         return sum
//     }

// }
// console.log(student.sumofscores())

// 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი

// let student = {
//     fisrtName: "Tamari",
//     lastName: "Tsikarishvili",
//     age: 34,
//     scores: [4, 7, 5, 3, 2],
//     fullName: function () {
//         this.firstName= "Tamari"
//         return this.firstName + " " + this.age
//     }}
// console.log (student.fullName ())
