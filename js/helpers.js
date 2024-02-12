const h1Element = document.getElementById("operation");
const h2Element = document.getElementById("access");
const h4Element = document.querySelector(".mission");

h2Element.style.visibility = "hidden";
h4Element.style.visibility = "hidden";

function displayExperience() {
    const currentDate = new Date();
    const startDate = new Date("January 1, 2022");

    // Calculate the total months
    const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth() + 1);
    const years = parseFloat(totalMonths / 12).toFixed(1)
    const experience = document.querySelector(".experience");
    experience.textContent = 3 || years + " years "
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const headers = document.querySelector(".section-header");

function transformText() {
    let iteration = 0;
    const interval = setInterval(() => {
        headers.innerText = headers.innerText
            .split("")
            .map((letter, letterIndex) => {
                if (letterIndex < iteration) {
                    return headers.dataset.value[letterIndex];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= headers.dataset.value.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
}

function revealText() {
    const revealMission = document.querySelectorAll(".mission");
    const revealSpeed = 50;
    const originalText = revealMission[0].innerHTML;
    let currentIndex = 0;

    function revealLetter() {
        if (currentIndex < originalText.length) {
            revealMission[0].innerHTML = originalText.slice(0, currentIndex + 1);
            currentIndex++;
            setTimeout(revealLetter, revealSpeed);
        }
    }

    revealLetter();
}
// Function to toggle an element's visibility like a glitch
function toggleGlitchEffect(element) {
    let isHidden = false;
    const interval = setInterval(function () {
      element.style.visibility = isHidden ? "visible" : "hidden";
      isHidden = !isHidden;
    }, 500); // Adjust the interval speed as needed
    // Stop the glitch effect after 2 seconds (adjust as needed)
    setTimeout(function () {
      clearInterval(interval);
      element.style.visibility = "visible"; // Ensure the element is visible
    }, 2000);
  }

// Function to visibility an element with a delay
function displayElementWithDelay(element, delay, triggerTransformation) {
    setTimeout(function () {
        element.style.visibility = "visible";
        triggerTransformation?.(element)
    }, delay);
}

window.onload = () => {
    transformText()
    displayExperience()
    onScroll()
};

// Display <h2> after a 2-second delay
displayElementWithDelay(h2Element, 3000, toggleGlitchEffect);

// Display <h4> after a 4-second delay (2 seconds after <h2>)
displayElementWithDelay(h4Element, 5000, revealText);