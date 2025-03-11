// Write your code here!
//removing "main" element in the id
document.getElementById("main").remove();

//creating a newHeader and giving it an id and text
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "William Wambugu is the champion";

//displaying it using append...
document.body.appendChild(newHeader);