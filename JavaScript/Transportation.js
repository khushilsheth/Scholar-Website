// Logic for step selection
const allRadios = document.getElementsByName("accordian");
let currentStepIndex = 0;

function goToNextStep() {
  currentStepIndex++;

  if (currentStepIndex > 0) {
    const previousStepLabel =
      allRadios[currentStepIndex - 1].nextElementSibling;
    previousStepLabel.style.backgroundColor = "rgba(40, 167, 69, 1)";
    previousStepLabel.style.borderRadius = "8px";
    previousStepLabel.style.color = "white";
  }

  if (currentStepIndex < allRadios.length) {
    allRadios[currentStepIndex - 1].checked = false;
    allRadios[currentStepIndex].checked = true;
  }
}

document.querySelectorAll(".save-continue").forEach((button) => {
  button.addEventListener("click", goToNextStep);
});

//Logic for option selection for first step
const firstStep = document.getElementById("first-step");
const firstStepOptions = firstStep.querySelectorAll(".option");

function removeFirstOptionSelectedClass() {
  firstStepOptions.forEach((option) => {
    option.classList.remove("selected-option");
  });
}

firstStepOptions.forEach((option) => {
  option.addEventListener("click", function () {
    removeFirstOptionSelectedClass();
    this.classList.add("selected-option");
    const optionRange = this.textContent.trim();
    const optionDisplay = firstStep.querySelectorAll("h3")[1];
    optionDisplay.innerHTML = `Wow, You have ${optionRange} Drivers/Conductors`;
  });
});

//Logic for option selector for second step
const secondStep = document.getElementById("second-step");
const secondStepOptions = secondStep.querySelectorAll(".option");

function removeSecondStepSelectedClass() {
  secondStepOptions.forEach((option) => {
    option.classList.remove("selected-option");
  });
}

secondStepOptions.forEach((option) => {
  option.addEventListener("click", function () {
    removeSecondStepSelectedClass();
    this.classList.add("selected-option");
    const optionRange = this.textContent.trim();
    const optionDisplay = secondStep.querySelectorAll("h3")[1];
    optionDisplay.innerHTML = `Wow, You have ${optionRange} Vehicles, Please select which types of vehicle you have?`;
  });
});

//Logic for vehicle seleecting step
const vehicleOptions = secondStep.querySelectorAll(".vehicle-choice");

vehicleOptions.forEach((option) => {
  option.addEventListener("click", function () {
    this.classList.toggle("selected-vehicle-choice");
  });
});
