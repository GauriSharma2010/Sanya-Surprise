/* ==========================================
   SANYA'S SECRET WORLD 💙
   Website interactions and animations
========================================== */

// Get all website screens
const welcomeScreen = document.getElementById("welcome-screen");
const relationshipScreen = document.getElementById("relationship-screen");
const profileScreen = document.getElementById("profile-screen");
const letterScreen = document.getElementById("letter-screen");

// Get form elements
const nameForm = document.getElementById("name-form");
const firstNameInput = document.getElementById("first-name");
const nameMessage = document.getElementById("name-message");

// Get relationship elements
const relationshipButtons = document.querySelectorAll(".relationship-button");
const relationshipMessage = document.getElementById("relationship-message");

// Get letter elements
const openLetterButton = document.getElementById("open-letter-button");
const envelope = document.getElementById("envelope");
const tapInstruction = document.getElementById("tap-instruction");
const secretLetter = document.getElementById("secret-letter");
const backToProfileButton = document.getElementById("back-to-profile");


// ==========================================
// FUNCTION 1: SWITCH BETWEEN SCREENS
// ==========================================

function showScreen(screenToShow) {
    const allScreens = [
        welcomeScreen,
        relationshipScreen,
        profileScreen,
        letterScreen
    ];

    allScreens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    screenToShow.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// FUNCTION 2: CHECK THE NAME
// ==========================================

nameForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredName = firstNameInput.value.trim();

    nameMessage.textContent = "";

    if (enteredName === "") {
        nameMessage.textContent = "Please enter your name first! 💙";
        return;
    }

    if (enteredName.toLowerCase() === "sanya") {
        nameMessage.textContent = "OMG, the princess has arrived! 👑💗";

        setTimeout(function () {
            showScreen(relationshipScreen);
            firstNameInput.value = "";
            nameMessage.textContent = "";
        }, 900);

    } else {
        nameMessage.textContent =
            "Oops! Sorry, this isn't for you. 🤭💙";

        firstNameInput.value = "";
        firstNameInput.focus();
    }
});


// ==========================================
// FUNCTION 3: CHECK THE RELATIONSHIP
// ==========================================

relationshipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedRelationship = button.dataset.relation;

        relationshipMessage.textContent = "";

        if (selectedRelationship === "bff") {
            relationshipMessage.textContent =
                "CORRECT! THE ONE AND ONLY BFFFFFF! 💗👑";

            relationshipButtons.forEach(function (item) {
                item.disabled = true;
            });

            setTimeout(function () {
                relationshipButtons.forEach(function (item) {
                    item.disabled = false;
                });

                relationshipMessage.textContent = "";
                showScreen(profileScreen);
            }, 1100);

        } else {
            const funnyMessages = {
                lover: "LOVER?! 😭 Gauri wants to know about this immediately! 💀",

                classmate: "CLASSMATE? THAT'S ALL? 🤨 Try again, Suneo! 😂",

                enemy: "ACCESS DENIED! 😈 Nice try, bro. You're not fooling us!"
            };

            relationshipMessage.textContent =
                funnyMessages[selectedRelationship] ||
                "Wrong answer! Try again. 🤭";
        }
    });
});


// ==========================================
// FUNCTION 4: OPEN THE LETTER SCREEN
// ==========================================

openLetterButton.addEventListener("click", function () {
    showScreen(letterScreen);
});


// ==========================================
// FUNCTION 5: OPEN THE ROYAL ENVELOPE
// ==========================================

let letterHasOpened = false;

envelope.addEventListener("click", function () {
    if (letterHasOpened) {
        return;
    }

    letterHasOpened = true;

    envelope.classList.add("opening");

    envelope.setAttribute("aria-label", "Letter opened");

    tapInstruction.textContent = "A little something from Gauri... 💙";

    tapInstruction.style.animation = "none";

    // Wait for the envelope animation before revealing the letter.
    setTimeout(function () {
        envelope.style.display = "none";
        tapInstruction.style.display = "none";

        secretLetter.hidden = false;

        secretLetter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 900);
});


// ==========================================
// FUNCTION 6: RETURN TO SANYA'S PROFILE
// ==========================================

backToProfileButton.addEventListener("click", function () {
    showScreen(profileScreen);
});


// ==========================================
// FUNCTION 7: KEYBOARD ACCESSIBILITY
// ==========================================

// The envelope is a button, so Enter and Space
// can activate it automatically.

console.log("Sanya's Secret World is ready! 💙🪷");