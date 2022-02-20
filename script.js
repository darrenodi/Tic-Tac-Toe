const gameBoard = (() => {
  const gameBoard = [];
 
  return {
    gameBoard,
  };
})()

const displayController = (() => {
  const displayController = ["X","O"];
  var count = 1;
  while(count<10) {
    const getDiv = document.getElementById("gameboard");
    var randomItem = displayController[Math.floor(Math.random()*displayController.length)];
    getDiv.innerHTML += "<div class=\"gameboarditem\"><button class=\"tikbutton\">Click</button></div>";

    count++;
  }

  return {
    displayController,
  };
})()

const Player = (name) => {
  return {name};
}

