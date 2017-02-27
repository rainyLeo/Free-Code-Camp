/* global $ */
var state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// player 1: human; player 2: AI; default: player 1 move first
var player = 1;
var AIfirst = false;
var winState = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function winTest(pl, st) {
  return winState.some(e => e.every(v => st[v] === pl));
}

function tieTest(st) {
  return !(st.some(e => e === 0));
}

function $(e) {
  if (/^\./.test(e)) {
    return document.querySelectorAll(e)
  }
  if (/^#/.test(e)) {
    return document.querySelector(e)
  }
}

function isGameOver(st) {
  if (winTest(1, st)) {
    $("#gameMessage").textContent = "You win! Not possible";
    return true;
  } else if (winTest(2, st)) {
    $("#gameMessage").textContent = "You lose!";

    winState.forEach(e => {
      if (e.every(v => state[v] === 2)) {
        e.forEach(n => {
          $("#sq" + n).classList.add("winState");
        });
      }
    });

    setTimeout(function () {
      init();
      if (AIfirst) {
        AIMove(state);
      }
    }, 1000);
    return true;
  } else if (tieTest(st)) {
    $("#gameMessage").textContent = "Draw!";
    setTimeout(function () {
      init();
      if (AIfirst) {
        AIMove(state);
      }
    }, 1500);
    return true;
  }
  return false;
}

// available move location
function possibleIdx(st) {
  var possibleAct = [];
  st.forEach(function(e, i, a) {
    if (a[i] === 0) {
      possibleAct.push(i);
    }
  });
  return possibleAct;
}

function nextState(st) {
  var possibleMove = possibleIdx(st);
  if ((possibleMove.length % 2 === 0 && !AIfirst) ||
      (possibleMove.length % 2 === 1 && AIfirst)) {
    player = 2;
  } else {
    player = 1;
  }
  return possibleMove.map(function(e, i, a) {
    var temp = st.slice(0);
    temp[e] = player;
    return temp;
  });
}

var cache = new Map();
function getScore(st, count = 0) {

  if (winTest(1, st)) {
    return 100 - count;
  } else if (winTest(2, st)) {
    return -100 + count;
  } else if (tieTest(st)) {
    return 0;
  }

  if (cache[st]) {
    return cache[st];
  }
  var value;
  var nextStates = nextState(st);
  var temp = nextStates.map(function (e) {
    return getScore(e, count + 1);
  });

  if ((nextStates.length % 2 === 1 && !AIfirst) ||
      (nextStates.length % 2 === 0 && AIfirst)) {
    value = Math.max.apply(null, temp);
  } else {
    value = Math.min.apply(null, temp);
  }

  cache[st] = value;
  return value;
}

function AIMove(st) {
  var nextStates = nextState(st);
  var scoreArray = [];

  nextStates.forEach(function(e) {
    var temp = getScore(e);
    scoreArray.push(temp);
  });

  var possibleMove = possibleIdx(st);
  var moveArray = [];
  if ((nextStates.length % 2 === 0 && !AIfirst)
      || (nextStates.length % 2 === 1 && AIfirst)) {
    var min = Math.min.apply(null, scoreArray);
    scoreArray.forEach(function (e, i, a) {
      if (a[i] === min) {
        moveArray.push(possibleMove[i]);
      }
    });
  } else {
    var max = Math.min.apply(null, scoreArray);
    scoreArray.forEach(function (e, i, a) {
      if (a[i] === max) {
        moveArray.push(possibleMove[i]);
      }
    });
  }

  var index;
  if (moveArray.length === 9) {
    index = [0, 2, 4, 6, 8][Math.floor(Math.random() * 5)];
  } else {
    index = moveArray[Math.floor(Math.random() * moveArray.length)];
  }
  //AI move
  state[index] = 2;
  updateUI(index, 2);
}

function updateUI(idx, pl) {
  var mark = pl === 1 ? 'x' : 'o';
  $("#sq" + idx).textContent = mark;
}


var squareArr = $(".square")
for (let i = 0; i < squareArr.length; i++) {
  squareArr[i].setAttribute('data-index', i)
}

$("#grid").addEventListener('click', function(event) {
  if (event.target.className = 'square') {
    console.log('click square')
    var index = +event.target.getAttribute('data-index')
    console.log('index', index)
    var possibleMove = possibleIdx(state);

    if (!isGameOver(state) && possibleMove.indexOf(index) !== -1) {
      console.log('here')
      //human move
      state[index] = 1;
      updateUI(index, 1);
      if (!isGameOver(state)) {
        AIMove(state);
        isGameOver(state);
      }
    }
  }
}, false);

$("#play1").addEventListener('click', function() {
  init();
  AIfirst = false;
}, false);

$("#play2").addEventListener('click', function() {
  init();
  AIfirst = true;
  AIMove(state);
}, false);

function init() {
  state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  cache = new Map();

  var squareArr = $('.square')
  for (let i = 0; i < squareArr.length; i++) {
    squareArr[i].classList.remove("winState");
    squareArr[i].textContent = ""
  }
  $("#gameMessage").textContent = "";
}
