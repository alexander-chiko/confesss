const buttons = document.querySelectorAll(".btn");
const title = document.querySelector(".title");
const image = document.querySelector(".image");

const question = [
  "Haii Aku Mau Tanya Sesuatu...",
  "Kamu uda siap dengerin nya??",
  "Setelah baca ini aku harap<br>jangan marah ya..?",
  "Dijawab dengan jujur okei..?",
  "Daniella Lolita Charlie..<br> will you be my girlfriend?",
  "Ekspresiku saat ini...",
];

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

document.addEventListener("DOMContentLoaded", () => {
  title.style.animation = "typing 3.5s steps(40, end)";
  if (countTitle === 0) {
    title.innerHTML = question[countTitle];
    buttons.forEach((button) => {
      if (button.id === "btn-no") {
        button.style.display = "none";
      } else {
        button.innerText = "Apaa?";
      }
    });
    countTitle = 1;
  }
  setTimeout(() => {
    title.style.animation = "none";
    buttons.forEach((button) => {
      button.classList.add("fadeIn");
      if (button.id == "btn-yes") {
      }
    });
  }, 3500);
});

function updateButtonDisplay() {
  if (countTitle != 5) {
    title.style.animation = "typing 3.5s steps(40, end)";
    setTimeout(() => {
      title.style.animation = "none";
    }, 3500);
  }
  buttons.forEach((button) => {
    if (button.id === "btn-no") {
      button.style.display = countTitle === 5 ? "block" : "none";
    }
    if (button.id === "btn-yes") {
      button.style.display = countTitle >= 6 ? "none" : "block";
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(countTitle);

    if (countTitle >= 4) {
      button.style.opacity = 1;
    } else {
      button.style.transition = "none";
      button.classList.remove("fadeIn");
    }

    let randomX = Math.floor(Math.random() * 100) + 1;
    let randomY = Math.floor(Math.random() * 100) + 1;

    if (button.id === "btn-yes") {
      console.log("yes di klik");
      countYes++;
      title.innerHTML = question[countTitle];
      countTitle++;
      if (countYes >= 1 && countYes <= 4) {
        button.innerText = ["Siap", "Okei", "Iyaaa", "Mauuu"][countYes - 1];
      }
      if (countTitle === 5) {
        button.style.transform = `translate(-50px, 0px)`;
      }
      if (countTitle != 5) {
        setTimeout(() => {
          button.style.transition = "all 0.5s";
          button.classList.add("fadeIn");
        }, 3500);
      }
    } else if (button.id == "btn-no") {
      console.log("no di klik");
      button.style.transform = `translate(${
        randomX > 50 ? "-" : ""
      }${getRandomX()}px, ${randomY > 50 ? "" : "-"}${getRandomY()}px)`;
    }

    updateButtonDisplay();
  });
});
