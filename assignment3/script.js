let leftDraggedElement = null;
console.log(leftDraggedElement);

let middleDraggedElement = null;
console.log(middleDraggedElement);

let rightDraggedElement = null;
console.log(rightDraggedElement);

const leftBox = document.querySelector(".leftbox");
console.log(leftBox);
const middleDropBox = document.querySelector(".middledropbox");
console.log(middleDropBox);
const middleBox = document.querySelector(".middlebox");
console.log(middleBox);
const rightDropBox = document.querySelector(".rightdropbox");
console.log(rightDropBox);
const rightBox = document.querySelector(".rightbox");
console.log(middleBox);
const leftDropBox = document.querySelector(".leftdropbox");
console.log(rightDropBox);

leftBox.addEventListener("dragstart", startLeftDrag);

function startLeftDrag() {
  leftDraggedElement = leftBox;
}

middleBox.addEventListener("dragstart", startMiddleDrag);

function startMiddleDrag() {
  middleDraggedElement = middleBox;
}

rightBox.addEventListener("dragstart", startRightDrag);

function startRightDrag() {
  rightDraggedElement = rightBox;
}

middleDropBox.addEventListener("dragover", endLeftDrag);

function endLeftDrag(event) {
  event.preventDefault();
}

rightDropBox.addEventListener("dragover", endMiddleDrag);

function endMiddleDrag(event) {
  event.preventDefault();
}

leftDropBox.addEventListener("dragover", endRightDrag);

function endRightDrag(event) {
  event.preventDefault();
}

middleDropBox.addEventListener("drop", handleLeftDrop);

function handleLeftDrop() {
  if (leftDraggedElement) {
    const color = window
      .getComputedStyle(leftDraggedElement)
      .getPropertyValue("background-color");
    middleDropBox.style.backgroundColor = color;
    middleDropBox.textContent = "Yes, #FFC37C is Happiness!";
    leftBox.style.backgroundColor = "rgba(0, 0, 0, 0)";
    leftBox.textContent = "";
    leftBox.draggable = false;
    leftBox.style.cursor = 'default';
    leftDraggedElement = null;
  } else {
    middleDropBox.textContent = "Sorry, that's incorrect! Try again!";
    leftDraggedElement = null;
  }
}

rightDropBox.addEventListener("drop", handleMiddleDrop);

function handleMiddleDrop() {
  if (middleDraggedElement) {
    const color = window
      .getComputedStyle(middleDraggedElement)
      .getPropertyValue("background-color");
    rightDropBox.style.backgroundColor = color;
    rightDropBox.textContent = "Yes, #FF49B1 is Love!";
    middleBox.style.backgroundColor = "rgba(0, 0, 0, 0)";
    middleBox.textContent = "";
    middleBox.draggable = false;
    middleBox.style.cursor = 'default';
    middleDraggedElement = null;
  } else {
    rightDropBox.textContent = "Sorry, that's incorrect! Try again!";
    middleDraggedElement = null;
  }
}

leftDropBox.addEventListener("drop", handleRightDrop);

function handleRightDrop() {
  if (rightDraggedElement) {
    const color = window
      .getComputedStyle(rightDraggedElement)
      .getPropertyValue("background-color");
    leftDropBox.style.backgroundColor = color;
    leftDropBox.textContent = "Yes, #4038A8 is Nostalgia!";
    rightBox.style.backgroundColor = "rgba(0, 0, 0, 0)";
    rightBox.textContent = "";
    rightBox.draggable = false;
    rightBox.style.cursor = 'default';
    rightDraggedElement = null;
  } else {
    leftDropBox.textContent = "Sorry, that's incorrect! Try again!";
    rightDraggedElement = null;
  }
}