//STEP 1
// let month = 1 // change this to desired input month between 0-11
// let year = 2023 // change this to the desired input year
// let d = new Date(year,month+1,0)
// let dayOfMonth = d.toString().slice(8,10)
// console.log(`The inputted month has ${dayOfMonth} days.`)
// Source consulted: https://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery

//STEP 2
// let d = new Date(2024, 0, 20)
// console.log(`The month in the inputted date is: ${d.toLocaleString('default', { month: 'long' })}`)
// Sources consulted: https://stackoverflow.com/questions/1643320/get-month-name-from-date and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

//STEP 3
// let d = new Date(2024, 0, 22)

// if (d.getDay()===6 || d.getDay()===0) {
//     console.log("The date you inputted IS a weekend.")
// } else {
//     console.log("The date you inputted is NOT a weekend.")
// }

//STEP 4
// let d = new Date()
// console.log(d)
// d.setDate(d.getDate() - 1);
// console.log(d)
// console.log(d.toLocaleString('default', { weekday: 'long' }))
// Source consulted: https://stackoverflow.com/questions/13838441/javascript-how-to-calculate-the-date-that-is-2-days-ago

//STEP 5
// let d = new Date()
// console.log(d.toString().slice(0,1))
