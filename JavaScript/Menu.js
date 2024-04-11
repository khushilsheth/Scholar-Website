import { popupData } from "./popupData.js";

window.hidePopup = function() {
    const popupContainer = document.querySelector(".popup-container");
    popupContainer.style.display = "none";
};

function showPopup(option) {
    const data = popupData[option];
    if (data) {
      document.querySelector('.popup img').src = data.imgSrc;

      document.querySelector('.popup h2').innerHTML = data.content;

      document.querySelector('.popup-container').style.display = 'flex';

      const button = document.querySelector('.popup button');
      button.onclick = function() {
        window.location.href = data.redirectLink;
      };
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.addEventListener("click", () =>
            showPopup(option.textContent.trim())
        );
    });
});
