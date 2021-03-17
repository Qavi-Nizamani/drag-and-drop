console.log("Drag and Drop");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", dragStart);
function dragStart(e) {
  setTimeout(() => {
    e.target.className = " hide";
  }, 0);
  console.log("drag start");
}

imgBox.addEventListener("dragend", dragEnd);
function dragEnd(e) {
  e.target.className = "imgBox";
  console.log("drag end");
}

function onDragOver(e) {
  e.preventDefault();
}

function onDragEnter(e) {
  e.target.className += " dashed hold";
}

function onDragLeave(e) {
  e.target.classList.remove("dashed");
  e.target.classList.remove("hold");
}

function onDragDrop(e) {
  e.target.append(imgBox);
  console.log(e.target);
}
for (let whitebox of whiteBoxes) {
  whitebox.addEventListener("dragover", onDragOver);
  whitebox.addEventListener("dragenter", onDragEnter);
  whitebox.addEventListener("dragleave", onDragLeave);
  whitebox.addEventListener("drop", onDragDrop);
}
