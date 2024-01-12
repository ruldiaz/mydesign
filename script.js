

console.log("Hello World!");

function getDate(){
   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
   return monthNames[(new Date().getMonth())] + " " + new Date().getDate() + ", " + new Date().getFullYear() + ", " + new Date().getHours() + ":" + new Date().getMinutes();
}

const todaysDate = document.querySelector(".date");
console.log(todaysDate);
todaysDate.insertAdjacentText("beforeend", getDate());

const dataButton = document.querySelector(".data-btn");
const dataShow = document.querySelector(".data");
console.log(dataButton);



// Asynchronous function to fetch data from data.json
async function fetchData() {
   try {
     const response = await fetch('data.json');
     const jsonData = await response.json();
     
     // Use jsonData as needed
     console.log(jsonData);
      dataShow.textContent = JSON.stringify(jsonData, null, 2);
     // For example, display the info property in the console
     console.log(jsonData.info);
   } catch (error) {
     console.error('Error fetching data:', error);
   }
 }
 
 // Attach the fetchData function to the button click event
 dataButton.addEventListener("click", fetchData);
