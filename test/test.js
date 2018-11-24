var InitialLayout = "023100900100000080700059013071003400300000008002490370910520007030000004007001290";
var FinalLayout = "623178945195346782784259613571683429349712568862495371916524837238967154457831296";

//$("#dialog").dialog({ title: 'hi'});

var c1 = getCells(InitialLayout);
var c2 = getCells(FinalLayout);
var l1 = getLayout(c2);
var l2 = getLayout(c1);

console.log(isCellsCorrect(c1, c2));
console.log(l1);
console.log(l2);

function getCells(layout) {
  var cells = [];
  for (var i = 0; i < 81; i++) {
    if (layout[i] === '0')
      cells.push(null);
    else
      cells.push(parseInt(layout[i]));
  }
  cells = _.chunk(cells, 9);
  return cells;
}

function isCellsCorrect(currentCells, finalCells) {
  for (var i = 0; i < currentCells.length; i++) {
    for (var j = 0; j < currentCells[i].length; j++) {
      if ((currentCells[i][j] != null) && (currentCells[i][j] != finalCells[i][j])) {
        return false;

      }
    }
  }
  return true;
}

function getLayout(cells) {
  var layout = "";
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (cells[i][j] === null)
        layout += '0';
      else
        layout += cells[i][j];
    }
  }
  return layout;
}