// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// button to assign random items to guests
const assignButton = document.querySelector(".assign");
// list of potluck items each guest is assigned
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

guestInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const guest = guestInput.value;
    if (guest !== "") {
      addToList(guest);
      clearInput();
      updateGuestCount();
    }
  }
});

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});

function clearInput() {
  guestInput.value = "";
}

function addToList(guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
}

function updateGuestCount() {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestInput.classList.add("hide");
    guestFull.classList.remove("hide");
  }
}

function assignItems() {
  const potLuckItems = [
    "potato salad",
    "baked potatoes",
    "potato chips",
    "fries",
    "stuffed potato skins",
    "mashed potato",
    "potato gratin",
    "dauphinoise potatoes",
    "hash browns",
    "literally more hash browns",
    "new potatoes",
    "home fries"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotLuckIndex = Math.floor(Math.random() * potLuckItems.length);
    let randomPotLuckItem = potLuckItems[randomPotLuckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}`;
    assignedItems.append(listItem);
    potLuckItems.splice(randomPotLuckIndex, 1);
  }
}
