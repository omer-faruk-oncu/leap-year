let year = Number(prompt("Enter a year : "))
let result 
if (year % 4 == 0 && year % 100 != 0) {
    result = "Leap Year"
} else if ((year % 100 == 0) && (year % 400 == 0)){
    result = "Leap Year"
} else if ((year % 100 == 0) && (year % 400 != 0)){
    result = "It is not a Leap Year"
} else {
    result = "It is not a Leap Year"
}

alert(result)  
