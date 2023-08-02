const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  document.querySelector(".modal-wrapper").setAttribute("hidden", true);
  initializeGame(data);
  console.log(data)
});

const initializeVarables = (data) => {
  data.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  data.round = 0;
  data.gameOver = false;
  data.choice = +data.choice;
  data.player1 = "X";
  data.player2 = "O";
  data.currentPlayer = "X"
};

const initializeGame = (data) => {
  initializeVarables(data);
};
