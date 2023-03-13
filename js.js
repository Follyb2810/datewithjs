const  timeElement = document.querySelector(".time")
const  dateElement = document.querySelector(".date")
/** 
//  @param {date} date
*/
function formatTime(date){
    // date=new Date
    const hours12 = date.getHours() % 12 || 12
    const minutes=date.getMinutes()
    const seconds = date.getSeconds()
    const isAm = date.getHours() < 12
    return `${hours12.toString().padStart(0,"0")}: ${minutes.toString().padStart(1,"0")}: ${seconds} ${isAm ?"Am":"Pm"}`
}
let a = formatTime(new Date())
console.log(a)
function formatDay(date){
    const days=["sunday","tuesday","wednesday","thursday","friday","saturday"]
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}
let b = formatDay(new Date())
console.log(b)

setInterval(()=>{
    const now =new Date()
    timeElement.textContent=formatTime(now)
    dateElement.textContent=formatDay(now)
},200)

let friuts = ["a","b","c","d","e","f","g","h","i","j","k"]
// console.log(friuts)
// a=friuts[0]
// b=friuts[1]
// c=friuts[2]
// let ["a","b","c",..] =friuts
// console.log(a,b,c,)

function Operate(operation,...operand) {
    console.log(operation,operand)
}
Operate(2,3,6)