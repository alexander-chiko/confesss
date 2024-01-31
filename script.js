const buttons = document.querySelectorAll(".btn");
const title = document.querySelector(".title");
const image = document.querySelector(".image");

const question = ["Halo1", "Halo2", "Halo3", "Halo4", "Halo5", "Halo6"];

let countNo = 0;
let countYes = 0;
let countTitle = 0;
let xTes, yTes;

function getRandomX() {
  const minDiff = 30;
  let coba;

  do {
    coba = Math.floor(Math.random() * 50) + 50;
  } while (Math.abs(coba - xTes) < minDiff);

  xTes = coba;
  return coba;
}
function getRandomY() {
  const minDiff = 40;
  let coba;

  do {
    coba = Math.floor(Math.random() * 100) + 100;
  } while (Math.abs(coba - yTes) < minDiff);

  yTes = coba;
  return coba;
}

function updateButtonDisplay() {
  buttons.forEach((button) => {
    if (button.id === "btn-no") {
      button.style.display = countTitle === 5 ? "block" : "none";
    }
    if (button.id === "btn-yes") {
      button.style.display = countTitle >= 6 ? "none" : "block";
    }
  });
}

if (countTitle === 0) {
  title.innerHTML = question[countTitle];
  buttons.forEach((button) => {
    if (button.id === "btn-no") {
      button.style.display = "none";
    } else {
      button.innerText = "Apaa?";
    }
  });
  countTitle++;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // let x = Math.floor(Math.random() * 50) + 50;
    // let y = Math.floor(Math.random() * 100) + 100;
    let randomX = Math.floor(Math.random() * 100) + 1;
    let randomY = Math.floor(Math.random() * 100) + 1;

    if (button.id === "btn-no") {
      countNo++;
      button.style.transform = `translate(${
        randomX > 50 ? "-" : ""
      }${getRandomX()}px, ${randomY > 50 ? "" : "-"}${getRandomY()}px)`;
    } else {
      countYes++;
      title.innerHTML = question[countTitle];
      countTitle++;
      if (countYes >= 1 && countYes <= 4) {
        button.innerText = ["Siap", "Okei", "Iyaaa", "Mauuu"][countYes - 1];
      }
      if (countTitle === 5) {
        button.style.transform = `translate(-50px, 0px)`;
      }
    }

    updateButtonDisplay();
  });
});

// aku mau tanya sesuatu, kamu uda siap dengerinnya?, setelah baca jangan marah ya, dijawab jujur okei..?
