//Memory-games

const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

const grid = document.getElementById("grid");
const result = document.getElementById("score");
const shuffleArray = cardArray.sort(() => 0.5 - Math.random());
let cardChoosen = [];
let cardChoosenIds = [];
let cardWon = [];

function cardBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    grid.append(card);
  }
  flipCard();
}

cardBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionId = cardChoosenIds[0];
  const optionId2 = cardChoosenIds[1];

  if (optionId === optionId2) {
    alert("you have clicked same card");
  }

  if (cardChoosen[0] === cardChoosen[1]) {
    cards[optionId].setAttribute("src", "images/white.png");
    cards[optionId2].setAttribute("src", "images/white.png");
    cards[optionId].removeEventListener("click", flipCard);
    cards[optionId2].removeEventListener("click", flipCard);
    cardWon.push(cardChoosen);
  } else {
    cards[optionId].setAttribute("src", "images/blank.png");
    cards[optionId2].setAttribute("src", "images/blank.png");
    alert("sorry try again");
  }

  if (cardWon.length == cardArray.length / 2) {
    result.innerHTML = "You winn";
  }

  cardChoosen = [];
  cardChoosenIds = [];
}

function flipCard() {
  const img = document.querySelectorAll("#grid img");
  img.forEach((item) =>
    item.addEventListener("click", function () {
      this.setAttribute("src", shuffleArray[this.dataset.id].img);
      cardChoosen.push(shuffleArray[this.dataset.id].name);
      cardChoosenIds.push(parseFloat(this.dataset.id));

      if (cardChoosen.length == 2) {
        setTimeout(checkMatch, 500);
      }
    })
  );
}
