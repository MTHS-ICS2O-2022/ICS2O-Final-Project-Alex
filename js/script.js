// Created by: Alex Nelson
// Created on: Jan 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Final-Project-Alex/sw.js", {
    scope: "/ICS2O-Final-Project-Alex/",
  })
}

//Variable to control turns
var xTurn = 1

//Variables to lock each square
var lockSquare1 = 0
var lockSquare2 = 0
var lockSquare3 = 0
var lockSquare4 = 0
var lockSquare5 = 0
var lockSquare6 = 0
var lockSquare7 = 0
var lockSquare8 = 0
var lockSquare9 = 0
var lockAll = 0

//Variables for checking for a win in a row
var checkRow1WinX = 0
var checkRow1WinO = 0
var checkRow2WinX = 0
var checkRow2WinO = 0
var checkRow3WinX = 0
var checkRow3WinO = 0

//Variables for checking for a win in a column
var checkColumn1WinX = 0
var checkColumn1WinO = 0
var checkColumn2WinX = 0
var checkColumn2WinO = 0
var checkColumn3WinX = 0
var checkColumn3WinO = 0

//Variables for checking for a win in a column
var checkDiagonal1WinX = 0
var checkDiagonal1WinO = 0
var checkDiagonal2WinX = 0
var checkDiagonal2WinO = 0




//Top Right Square
function topRight() {

  //Lock
  if (lockSquare3 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }
  
  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare3 != 1) {
    document.getElementById("top-right").innerHTML = '<td class="top-right" id="top-right" onclick="topRight()"> X </td>'
    
    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare3 = 1
    checkRow1WinX++
    checkColumn3WinX++
    checkDiagonal2WinX++
    lockAll++
  }

  //Displays O and adds to the check counter
  else if (lockSquare3 != 1) {
    document.getElementById("top-right").innerHTML = '<td class="top-right" id="top-right" onclick="topRight()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare3 = 1
    checkRow1WinO++
    checkColumn3WinO++
    checkDiagonal2WinO++
    lockAll++
  }

  //Win check
  if (checkRow1WinX == 3 || checkColumn3WinX == 3 || checkDiagonal2WinX == 3) {
  document.getElementById("output").innerHTML = "X wins"
    lockAll = 9
  }
  else if (checkRow1WinO == 3 || checkColumn3WinO == 3 || checkDiagonal2WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}




//Top Left Square
function topLeft() {

  //Lock
  if (lockSquare1 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }
  
  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare1 != 1) {
    document.getElementById("top-left").innerHTML = '<td class="top-right" id="top-left" onclick="topLeft()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare1 = 1
    checkRow1WinX++
    checkColumn1WinX++
    checkDiagonal1WinX++
    lockAll++
  }
    
  //Displays O and adds to the check counter
  else if (lockSquare1 != 1) {
    document.getElementById("top-left").innerHTML = '<td class="top-right" id="top-left" onclick="topLeft()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare1 = 1
    checkRow1WinO++
    checkColumn1WinO++
    checkDiagonal1WinO++
    lockAll++
  }

  //Win check
  if (checkRow1WinX == 3 || checkColumn1WinX == 3 || checkDiagonal1WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
    lockAll = 9
  }
  else if (checkRow1WinO == 3 || checkColumn1WinO == 3 || checkDiagonal1WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}




//Top Middle Square
function topMiddle() {

  //Lock
  if (lockSquare2 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }
  
  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare2 != 1) {
    document.getElementById("top-middle").innerHTML = '<td class="top-middle" id="top-middle" onclick="topMiddle()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare2 = 1
    checkRow1WinX++
    checkColumn2WinX++
    lockAll++
  }

  //Displays O and adds to the check counter
  else if (lockSquare2 != 1){
    document.getElementById("top-middle").innerHTML = '<td class="top-middle" id="top-middle" onclick="topMiddle()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare2 = 1
    checkRow1WinO++
    checkColumn2WinO++
    lockAll++
  }

  //Win check
  if (checkRow1WinX == 3 || checkColumn2WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
    lockAll = 9
  }
  else if (checkRow1WinO == 3 || checkColumn2WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}




//Middle left square
function middleLeft() {

  //Lock
  if (lockSquare4 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }
  
  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare4 != 1) {
    document.getElementById("middle-left").innerHTML = '<td class="middle-left" id="middle-left" onclick="middleLeft()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare4 = 1
    checkRow2WinX++
    checkColumn1WinX++
    lockAll++
  }

  //Displays O and adds to the check counter
  else if (lockSquare4 != 1) {
    document.getElementById("middle-left").innerHTML = '<td class="middle-left" id="middle-left" onclick="middleLeft()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare4 = 1
    checkRow2WinO++
    checkColumn1WinO++
    lockAll++
  }

  //Win check
  if (checkRow2WinX == 3 || checkColumn1WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
    lockAll = 9
  }
  else if (checkRow2WinO == 3 || checkColumn1WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}




//Middle square
function middle() {

  //Lock
  if (lockSquare5 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }
    
  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare5 != 1) {
    document.getElementById("middle").innerHTML = '<td class="middle" id="middle" onclick="middle()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare5 = 1
    checkRow2WinX++
    checkColumn2WinX++
    checkDiagonal1WinX++
    checkDiagonal2WinX++
    lockAll++
  }

  //Displays O and adds to the check counter
  else if (lockSquare5 != 1) {
     document.getElementById("middle").innerHTML = '<td class="middle" id="middle" onclick="middle()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare5 = 1
    checkRow2WinO++
    checkColumn2WinO++
    checkDiagonal1WinO++
    checkDiagonal2WinO++
    lockAll++
  }
  
  //Win check
  if (checkRow2WinX == 3 || checkColumn2WinX == 3 || checkDiagonal2WinX == 3 || checkDiagonal1WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
    lockAll = 9
  }
  else if (checkRow2WinO == 3 || checkColumn2WinO == 3 || checkDiagonal2WinO == 3 || checkDiagonal1WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}




//Middle Right Square
function middleRight() {

  //Lock
  if (lockSquare6 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }

  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare6 != 1) {
    document.getElementById("middle-right").innerHTML = '<td class="middle-right" id="middle-right" onclick="middleRight()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare6 = 1
    checkRow2WinX++
    checkColumn3WinX++
    lockAll++
  }

  //Displays O and adds to the check counter
  else if (lockSquare6 != 1) {
     document.getElementById("middle-right").innerHTML = '<td class="middle-right" id="middle-right" onclick="middleRight()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare6 = 1
    checkRow2WinO++
    checkColumn3WinO++
    lockAll++
  }

  //Win check
  if (checkRow2WinX == 3 || checkColumn3WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
    lockAll = 9
  }
  else if (checkRow2WinO == 3 || checkColumn3WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}




//Bottom left Square functions
function bottomLeft() {

  //Lock
  if (lockSquare7 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }

  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare7 != 1) {
    document.getElementById("bottom-left").innerHTML = '<td class="bottom-left" id="bottom-left" onclick="bottomLeft()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare7 = 1
    checkRow3WinX++
    checkColumn1WinX++
    checkDiagonal2WinX++
    lockAll++
  }

  //Displays O and adds to the check counter
  else if (lockSquare7 != 1) {
    document.getElementById("bottom-left").innerHTML = '<td class="bottom-left" id="bottom-left" onclick="bottomLeft()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare7 = 1
    checkRow3WinO++
    checkColumn1WinO++
    checkDiagonal2WinO++
    lockAll++
  }

  //Win check
  if (checkRow3WinX == 3 || checkColumn1WinX == 3 || checkDiagonal2WinX == 3) {
  document.getElementById("output").innerHTML = "X wins"
    lockAll = 9
  }
  else if (checkRow3WinO == 3 || checkColumn1WinO == 3 || checkDiagonal2WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}




//Bottom middle square function
function bottomMiddle() {

  //Lock
  if (lockSquare8 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }

  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare8 != 1) {
    document.getElementById("bottom-middle").innerHTML = '<td class="bottom-middle" id="bottom-middle" onclick="bottomMiddle()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare8 = 1
    checkRow3WinX++
    checkColumn2WinX++
    lockAll++
  }

  //Displays O and adds to the check counter
  else if (lockSquare8 != 1) {
    document.getElementById("bottom-middle").innerHTML = '<td class="bottom-middle" id="bottom-middle" onclick="bottomMiddle()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare8 = 1
    checkRow3WinO++
    checkColumn2WinO++
    lockAll++
  }

  //Win check
  if (checkRow3WinX == 3 || checkColumn2WinX == 3) {
  document.getElementById("output").innerHTML = "X wins"
    lockAll = 9
  }
  else if (checkRow3WinO == 3 || checkColumn2WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}




//Bottom right square Function
function bottomRight() {

  //Lock
  if (lockSquare9 == 1 || lockAll == 9) {
    console.log("Square Locked")
  }

  //Displays X and adds to the check counter
  else if (xTurn == 1 && lockSquare9 != 1) {
    document.getElementById("bottom-right").innerHTML = '<td class="bottom-right" id="bottom-right" onclick="bottomRight()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare9 = 1
    checkRow3WinX++
    checkColumn3WinX++
    checkDiagonal1WinX++
    lockAll++
  }

  //Displays O and adds to the check counter
  else if (lockSquare9 != 1) {
     document.getElementById("bottom-right").innerHTML = '<td class="bottom-right" id="bottom-right" onclick="bottomRight()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare9 = 1
    checkRow3WinO++
    checkColumn3WinO++
    checkDiagonal1WinO++
    lockAll++
  }

  //Win check
  if (checkRow3WinX == 3 || checkColumn3WinX == 3 || checkDiagonal1WinX == 3) {
  document.getElementById("output").innerHTML = "X wins"
    lockAll = 9
  }
  else if (checkRow3WinO == 3 || checkColumn3WinO == 3 || checkDiagonal1WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
    lockAll = 9
  }
  else if (lockAll == 9) {
  document.getElementById("output").innerHTML = "Draw"
  }
}