// const myHeading = document.querySelectorAll("p");
// console.log(myHeading);
// // console.log(myHeading.textContent);
// // myHeading.textContent = "new paragraph";
// // myHeading.style.backgroundColor = "limegreen";
// // myHeading[0].style.backgroundColor = "limegreen"
// // myHeading[1].style.backgroundColor = "limegreen"
// // myHeading[2].style.backgroundColor = "limegreen"

// // for (let i = 0; i < 3; i++) {
// //     myHeading[i].textContent = "new" + i;
// //     myHeading[i].style.backgroundColor = "limegreen";
// // }

// myHeading.forEach(changeMe);

// function changeMe(item) {
//     // item.style.backgroundColor = "coral"
//     item.classList.add("purple-box");
// }


const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", chooseTopic);

function toggleMe() {
    const myImage = document.querySelector("#my-image");
    // console.log(myImage);
    console.log(myImage.dataset.catname);
    myImage.classList.toggle("round");
    myButton.textContent = myImage.dataset.catname;
}

function chooseTopic() {
    const myPara = document.querySelectorAll("p");
    console.log(myPara);
    myPara.forEach(displayTopic);
    function displayTopic(item) {
        if(item.dataset.topic === "game") {
          item.classList.toggle("purple-box");
        } else if (item.dataset.topic === "sound") {
          item.classList.toggle("coral-box");
        } else if (item.dataset.topic === "web") {
          item.classList.toggle("lime-box");
        }
    }
}

const myTitle = document.querySelector("h1");
myTitle.textContent = "I am a new heading";
let course = "0ART1013";
const myImage = document.querySelector("#my-image");
myTitle.innerHTML = `I am a <span class="coral-box">new ${myImage.dataset.catname} </span>`;

myImage.addEventListener("mouseover", makeItRound);
myImage.addEventListener("mouseout", makeItSquare);

function makeItRound ()
{
    myImage.classList.add("round");
}

function makeItSquare ()
{
    myImage.classList.remove("round");
}