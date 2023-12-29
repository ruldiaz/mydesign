console.log("Hello World!");

function getDate(){
   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
   return monthNames[(new Date().getMonth())] + " " + new Date().getDate() + ", " + new Date().getFullYear() + ", " + new Date().getHours() + ":" + new Date().getMinutes();
}

const todaysDate = document.querySelector(".date");
console.log(todaysDate);
todaysDate.insertAdjacentText("beforeend", getDate());