
var L = document.getElementById('L').value;
var C = document.getElementById('C').value;
let P = 5;
let N = 5;
var puzzle_tab = [];
var coups = 0;
document.getElementById('coups').innerHTML = coups
anothertab ()
LC()
function LC() {
    let L = document.getElementById('L').value;
    let C = document.getElementById('C').value;

    if (L <= 5 && L >= 2 ) {
      document.getElementById('L').classList.remove('erreur')
      P=L
  } else {
      document.getElementById('L').classList.add('erreur')
  }

    if (C <= 5 && C >= 2 ) {
        document.getElementById('C').classList.remove('erreur')
        N=C
    } else {
        document.getElementById('C').classList.add('erreur')
    }
    maketable()
}

function maketable() {
        puzzle_tab = []
        for (i = 0; i < P; i++) {
            puzzle_tab.push([])
            for (j = 0; j < N; j++) {
                puzzle_tab[i].push(Math.floor(Math.random() * (P*N-1))+1)
            }
        }
        puzzle_tab[Math.floor(Math.random() * P)][Math.floor(Math.random() * N)] = ''
        opBoard()
        coups = 0
        document.getElementById('coups').innerHTML = coups;
        anothertab ()
}

function opBoard() {
    let board = document.getElementById('puzzle_tab')
    board.innerHTML = ''
    for (var i = 0; i < puzzle_tab.length; i++) {
        row = board.insertRow(i)
        for (var j = 0; j < puzzle_tab[i].length; j++) {
            cell = row.insertCell(j)
            if(puzzle_tab[i][j] != ''){
            cell.innerHTML = "<input type='button' value='"+ puzzle_tab[i][j] +"' id='b-"+ i +"-"+ j +"' onclick='move("+ i +", " + j+")' />"
            } else {
                cell.innerHTML = "<input type='hidden' value='"+ puzzle_tab[i][j] +"' id='b-"+ i +"-"+ j +"' />"
            }
        }
    }
    document.getElementById('coups').innerHTML = coups
}

function movementsof(n) {
    mov_tab = document.getElementById('mov_tab')
    row = mov_tab.insertRow(coups)
    cell0 = row.insertCell(0)
    cell1 = row.insertCell(1)
    cell0.innerHTML = coups
    cell1.innerHTML = "Déplacement de " + n
}

function move(i, j) {
    if (i == 0){
        if (puzzle_tab[i+1][j] === ''){
            coups++
            movementsof(puzzle_tab[i][j])
            puzzle_tab[i+1][j] = puzzle_tab[i][j]
            puzzle_tab[i][j] = ''
            
        }
    } else if (i == P-1) {
        if (puzzle_tab[i-1][j] === ''){
            coups++
            movementsof(puzzle_tab[i][j])
            puzzle_tab[i-1][j] = puzzle_tab[i][j]
            puzzle_tab[i][j] = ''
        }
    } else {
        if (puzzle_tab[i+1][j] === ''){
            coups++
            movementsof(puzzle_tab[i][j])
            puzzle_tab[i+1][j] = puzzle_tab[i][j]
            puzzle_tab[i][j] = ''
        }
        if (puzzle_tab[i-1][j] ===''){
            coups++
            movementsof(puzzle_tab[i][j])
            puzzle_tab[i-1][j] = puzzle_tab[i][j]
            puzzle_tab[i][j] = ''
        }
    }

    if (j == 0){
        if (puzzle_tab[i][j+1] === ''){
            coups++
            movementsof(puzzle_tab[i][j])
            puzzle_tab[i][j+1] = puzzle_tab[i][j]
            puzzle_tab[i][j] = ''
        }
    } else if (j == N-1) {
        if (puzzle_tab[i][j-1] === ''){
            coups++
            movementsof(puzzle_tab[i][j])
            puzzle_tab[i][j-1] = puzzle_tab[i][j]
            puzzle_tab[i][j] = ''
        }
    } else {
        if (puzzle_tab[i][j+1] === ''){
            coups++
            movementsof(puzzle_tab[i][j])
            puzzle_tab[i][j+1] = puzzle_tab[i][j]
            puzzle_tab[i][j] = ''
        }
        if (puzzle_tab[i][j-1] === ''){
            coups++
            movementsof(puzzle_tab[i][j])
            puzzle_tab[i][j-1] = puzzle_tab[i][j]
            puzzle_tab[i][j] = ''
        }
    }
    opBoard();
    win();
}

function anothertab () {
    table = document.getElementById('mov_tab')
    table.innerHTML = "<tbody><th>#</th><th>Opération</th></tr></tbody>"
 }
 function win() {
    var j = 0;
    var k = 0
    var puzzle_2 = []
    for (i = 0; i < P * N; i++) {
        puzzle_2[i] = puzzle_tab[j][k]
        if (k === N - 1) {
            j++
            k = 0
        } else {
            k++
        }
    }
    var x = 0;
    let result = []
    for (var z = 0; z < (P * N); z++) {
        if (puzzle_2[z] !== '') {
            result[x] = puzzle_2[z]
            x++
        }
    }

    i = 0
    while (i < (P * N)) {
        if (result[i] > result[i + 1]) {
            break;
        } else {
            i++
        }
    }

    if (i === (P * N)) {
        document.getElementById('demo').innerHTML = "YOU WON!!";
        document.getElementById('btn').style.display = "block";
    }
}
