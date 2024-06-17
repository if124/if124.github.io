// -----------------------------------------------------------------------------------------------------------
// The following script sets the initial parameters for the drag-and-drop functions. As seen, null is used to
// set these parameters to a neutral state.

let leftDraggedElement = null;
console.log(leftDraggedElement);

let middleDraggedElement = null;
console.log(middleDraggedElement);

let rightDraggedElement = null;
console.log(rightDraggedElement);

// -----------------------------------------------------------------------------------------------------------
// The following script checks the constants of the parameters made. console.log() was used to make sure that
// everything works first upon the website loading up.

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

// -----------------------------------------------------------------------------------------------------------
// The following script changes the inital parameters according to what the users drag. Additionally, it also
// stops any event from happening when users do not let go of the drag within an action area.

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

// -----------------------------------------------------------------------------------------------------------
// The following script executes the foloowing actions upon the users letting go of the dragged colours. As
// shown below, each colour has its own designated dropbox. When the colour dragged is not matched to its assigned
// colour, an incorrect prompt shows up within the dropbox the users chose to provide visual feedback to them.
// But, if they do manage to correctly match the colour to its assigned emotion, a lot happens. First off, the
// colour fits into the dropbox and stays there. A text overlay saying that it's correct further indicates that
// yes, the user has correctly matched the colour to the emotion. After that, the box where the colour initially
// was gets purged of any form of feedback to show user that that colour has found its final spot. It also prevents
// more bugs to show up (I had this reoccurring issue where the invisible colour box was still interactive, despite
// the colour being gone. That led to some very undesirable bugs). Lastly, the parameter pertaining to that
// specific colour was resetted back to its initial state.

middleDropBox.addEventListener("drop", handleLeftDrop);

function handleLeftDrop() {
  if (leftDraggedElement) {
    const color = window
      .getComputedStyle(leftDraggedElement)
      .getPropertyValue("background-color");
    middleDropBox.style.backgroundColor = color;
    middleDropBox.textContent = "Yes, #FFC37C is Happiness!";
    middleDropBox.removeEventListener("drop", handleLeftDrop);
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
    rightDropBox.removeEventListener("drop", handleMiddleDrop);
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
    leftDropBox.removeEventListener("drop", handleRightDrop);
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