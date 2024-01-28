const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color"); //why need ".color" what does the period mean in front of color?

/*
The selector "color" is looking for an HTML element with the tag name <color>, 
but in your HTML, the color element has a class attribute, not a tag name. 
You should use the class selector with a dot (.) 
*/

btn.addEventListener("click", function(){
    // get random number between 0-3
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}