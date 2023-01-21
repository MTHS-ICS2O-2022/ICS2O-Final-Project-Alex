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

//Variables to activate the squares
var activateSquareX1 = 0
var activateSquareO1 = 0
var activateSquareX2 = 0
var activateSquareO2 = 0
var activateSquareX3 = 0
var activateSquareO3 = 0
var activateSquareX4 = 0
var activateSquareO4 = 0
var activateSquareX5 = 0
var activateSquareO5 = 0
var activateSquareX6 = 0
var activateSquareO6 = 0
var activateSquareX7 = 0
var activateSquareO7 = 0
var activateSquareX8 = 0
var activateSquareO8 = 0
var activateSquareX9 = 0
var activateSquareO9 = 0


//Variables for checking if there is a win in a row
var checkRow1WinX = 0
var checkRow1WinO = 0
var checkRow2WinX = 0
var checkRow2WinO = 0
var checkRow3WinX = 0
var checkRow3WinO = 0

//Top Right Square
function topRight() {
  
  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare3 != 1) {
    document.getElementById("top-right").innerHTML = '<td class="top-right" id="top-right" onclick="topRight()"> X </td>'
    
    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare3 = 1
    activateSquareX1 = 1
    checkRow1WinX++ 
  }

  //Displays O and adds to the check counter
  else if (lockSquare3 != 1) {
    document.getElementById("top-right").innerHTML = '<td class="top-right" id="top-right" onclick="topRight()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare3 = 1
    activateSquareO1 = 1
    checkRow1WinO++
  }

  //Win check
  if (checkRow1WinX == 3) {
  document.getElementById("output").innerHTML = "X wins"
  }
  else if (checkRow1WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

//Top Left Square
function topLeft() {
  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare1 != 1) {
    document.getElementById("top-left").innerHTML = '<td class="top-right" id="top-left" onclick="topLeft()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare1 = 1
    activateSquareX2 = 1
    checkRow1WinX++
  }
    
  //Displays O and adds to the check counter
  else if (lockSquare1 != 1) {
    document.getElementById("top-left").innerHTML = '<td class="top-right" id="top-left" onclick="topLeft()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare1 = 1
    activateSquareO2 = 1
    checkRow1WinO++
  }

  //Win check
  if (checkRow1WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
  }
  else if (checkRow1WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

//Top Middle Square
function topMiddle() {
  
  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare2 != 1) {
    document.getElementById("top-middle").innerHTML = '<td class="top-middle" id="top-middle" onclick="topMiddle()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare2 = 1
    activateSquareX3 = 1
    checkRow1WinX++
  }

  //Displays O and adds to the check counter
  else if (lockSquare2 != 1){
    document.getElementById("top-middle").innerHTML = '<td class="top-middle" id="top-middle" onclick="topMiddle()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare2 = 1
    activateSquareX3 = 1
    checkRow1WinO++
  }

  //Win check
  if (checkRow1WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
  }
  else if (checkRow1WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

//Middle left square
function middleLeft() {
  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare4 != 1) {
    document.getElementById("middle-left").innerHTML = '<td class="middle-left" id="middle-left" onclick="middleLeft()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare4 = 1
    activateSquareX4 = 1
    checkRow2WinX++
  }

  //Displays O and adds to the check counter
  else if (lockSquare4 != 1) {
    document.getElementById("middle-left").innerHTML = '<td class="middle-left" id="middle-left" onclick="middleLeft()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare4 = 1
    activateSquareO4 = 1
    checkRow2WinO++
  }

  //Win check
  if (checkRow2WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
  }
  else if (checkRow2WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

//Middle square
function middle() {

  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare5 != 1) {
    document.getElementById("middle").innerHTML = '<td class="middle" id="middle" onclick="middle()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare5 = 1
    activateSquareX5 = 1
    checkRow2WinX++
  }

  //Displays O and adds to the check counter
  else if (lockSquare5 != 1) {
     document.getElementById("middle").innerHTML = '<td class="middle" id="middle" onclick="middle()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare5 = 1
    activateSquareO5 = 1
    checkRow2WinO++
  }
  
  //Win check
  if (checkRow2WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
  }
  else if (checkRow2WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

//Middle Right Square
function middleRight() {

  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare6 != 1) {
    document.getElementById("middle-right").innerHTML = '<td class="middle-right" id="middle-right" onclick="middleRight()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare6 = 1
    activateSquareX6 = 1
    checkRow2WinX++
  }

  //Displays O and adds to the check counter
  else if (lockSquare6 != 1) {
     document.getElementById("middle-right").innerHTML = '<td class="middle-right" id="middle-right" onclick="middleRight()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare6 = 1
    activateSquareO6 = 1
    checkRow2WinO + 1
  }

  //Win check
  if (checkRow2WinX == 3) {
  document.getElementById("output").innerHTML = "X Wins"
  }
  else if (checkRow2WinO++ == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

//Bottom left Square functions
function bottomLeft() {

  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare7 != 1) {
    document.getElementById("bottom-left").innerHTML = '<td class="bottom-left" id="bottom-left" onclick="bottomLeft()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare7 = 1
    activateSquareO7 = 1
    checkRow3WinX++
  }

  //Displays O and adds to the check counter
  else if (lockSquare7 != 1) {
    document.getElementById("bottom-left").innerHTML = '<td class="bottom-left" id="bottom-left" onclick="bottomLeft()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare7 = 1
    activateSquareO7 = 1
    checkRow3WinO++
  }

  //Win check
  if (checkRow3WinX == 3) {
  document.getElementById("output").innerHTML = "X wins"
  }
  else if (checkRow3WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

//Bottom middle square function
function bottomMiddle() {

  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare8 != 1) {
    document.getElementById("bottom-middle").innerHTML = '<td class="bottom-middle" id="bottom-middle" onclick="bottomMiddle()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare8 = 1
    activateSquareO8 = 1
    checkRow3WinX++
  }

  //Displays O and adds to the check counter
  else if (lockSquare8 != 1) {
    document.getElementById("bottom-middle").innerHTML = '<td class="bottom-middle" id="bottom-middle" onclick="bottomMiddle()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare8 = 1
    activateSquareO8 = 1
    checkRow3WinO++
  }

  //Win check
  if (checkRow3WinX == 3) {
  document.getElementById("output").innerHTML = "X wins"
  }
  else if (checkRow3WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

//Bottom right square Function
function bottomRight() {

  //Displays X and adds to the check counter
  if (xTurn == 1 && lockSquare9 != 1) {
    document.getElementById("bottom-right").innerHTML = '<td class="bottom-right" id="bottom-right" onclick="bottomRight()"> X </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 0
    lockSquare9 = 1
    activateSquareO9 = 1
    checkRow3WinX++
  }

  //Displays O and adds to the check counter
  else if (lockSquare9 != 1) {
     document.getElementById("bottom-right").innerHTML = '<td class="bottom-right" id="bottom-right" onclick="bottomRight()"> O </td>'

    //To change turn, lock the square, and adds to check counter
    xTurn = 1
    lockSquare9 = 1
    activateSquareO9 = 1
    checkRow3WinO++
  }

  //Win check
  if (checkRow3WinX == 3) {
  document.getElementById("output").innerHTML = "X wins"
  }
  else if (checkRow3WinO == 3) {
    document.getElementById("output").innerHTML = "O wins"
  }
}

  