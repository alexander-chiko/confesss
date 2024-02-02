const buttons = document.querySelectorAll(".btn");
const title = document.querySelector(".title");
const image = document.getElementById("image");
const image2 = document.getElementById("image2");

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
  const minDiff = 30;
  let coba;

  do {
    coba = Math.floor(Math.random() * 80) + 50;
  } while (Math.abs(coba - yTes) < minDiff);

  console.log(coba, yTes);

  yTes = coba;
  return coba;
}

document.addEventListener("DOMContentLoaded", () => {
  title.style.animation = "typing 3s steps(40, end)";
  image.setAttribute("src", "image/gambar1.png");
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
  }, 3000);
});

function updateButtonDisplay() {
  if (countTitle != 5) {
    title.style.animation = "typing 3s steps(40, end)";
    setTimeout(() => {
      title.style.animation = "none";
    }, 3000);
  }
  buttons.forEach((button) => {
    if (button.id === "btn-no") {
      button.style.display = countTitle === 5 ? "block" : "none";
    }
    if (button.id === "btn-yes") {
      button.style.display = countTitle >= 6 ? "none" : "block";
    }
  });
  if (countTitle == 2) {
    image.setAttribute("src", "image/gambar3.png");
  }
  if (countTitle == 3) {
    image.setAttribute("src", "image/gambar4.png");
  }
  if (countTitle == 4) {
    image.setAttribute("src", "image/gambar5.png");
  }
  if (countTitle == 5) {
    image.setAttribute("src", "image/gambar7.png");
  }
  if (countTitle == 6) {
    image.setAttribute("src", "image/gambar6.png");
    image2.style.display = "block";
    image2.setAttribute("src", "image/gambar8.png");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    image.setAttribute("src", "");

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
        }, 3000);
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
