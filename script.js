//your code here
// Function to handle drag start event
function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.currentTarget.style.opacity = "0.4";
}

// Function to handle drag over event
function handleDragOver(event) {
  event.preventDefault();
}

// Function to handle drop event
function handleDrop(event) {
  event.preventDefault();
  const draggableId = event.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(draggableId);
  const dropzoneElement = event.target;

  // Swap the background images
  const tempBackground = draggableElement.style.backgroundImage;
  draggableElement.style.backgroundImage = dropzoneElement.style.backgroundImage;
  dropzoneElement.style.backgroundImage = tempBackground;

  event.currentTarget.style.opacity = "1";
}

// Add event listeners to each draggable element
const draggableElements = document.getElementsByClassName("image");
draggableElements.forEach(element => {
  element.addEventListener("dragstart", handleDragStart);
  element.addEventListener("dragover", handleDragOver);
  element.addEventListener("drop", handleDrop);
});
