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
    getDiv.innerHTML += "<div class=\"gameboarditem\"><button class=\"tikbutton\">"+randomItem+"</button></div>";
    count++;
  }

  return {
    displayController,
  };
})()

const playerData = (name, mark) => {
  const setMark = () => console.log('hello!');
  return { name, mark, setMark };
};


document.querySelector(".tikbutton").addEventListener("click",displayThis);
function displayThis(){
  console.log("your eggs");
}
