// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */

var xTurn = 1
var lockSquare1 = 0
var lockSquare2 = 0
var lockSquare3 = 0
var lockSquare4 = 0
var lockSquare5 = 0
var lockSquare6 = 0
var lockSquare7 = 0
var lockSquare8 = 0
var lockSquare9 = 0
var activateSquareX1 = 0
var activateSquareO1 = 0
 
function topRight() {
  if (xTurn == 1 && lockSquare3 != 1) {
    document.getElementById("top-right").innerHTML = '<td class="top-right" id="top-right" onclick="topRight()"> X </td>'
    xTurn = 0
    console.log(xTurn)
    lockSquare3 = 1
    activateSquareX1 = 1
  }
  else if (lockSquare3 != 1) {
    document.getElementById("top-right").innerHTML = '<td class="top-right" id="top-right" onclick="topRight()"> O </td>'
    xTurn = 1
    lockSquare3 = 1
    activateSquareO1 = 1
  }
}
function topLeft() {
  if (xTurn == 1 && lockSquare1 != 1) {
    document.getElementById("top-left").innerHTML = '<td class="top-right" id="top-left" onclick="topLeft()"> X </td>'
    xTurn = 0
    lockSquare1 = 1
  }
  else if (lockSquare1 != 1) {
    document.getElementById("top-left").innerHTML = '<td class="top-right" id="top-left" onclick="topLeft()"> O </td>'
    xTurn = 1
    lockSquare1 = 1
  }
}
function topMiddle() {
  if (xTurn == 1 && lockSquare2 != 1) {
    document.getElementById("top-middle").innerHTML = '<td class="top-middle" id="top-middle" onclick="topMiddle()"> X </td>'
    xTurn = 0
    lockSquare2 = 1
  }
  else if (lockSquare2 != 1){
    document.getElementById("top-middle").innerHTML = '<td class="top-middle" id="top-middle" onclick="topMiddle()"> O </td>'
    xTurn = 1
    lockSquare2 = 1
  }
}
function middleLeft() {
  if (xTurn == 1 && lockSquare4 != 1) {
    document.getElementById("middle-left").innerHTML = '<td class="middle-left" id="middle-left" onclick="middleLeft()"> X </td>'
    xTurn = 0
    lockSquare4 = 1
  }
  else if (lockSquare4 != 1) {
    document.getElementById("middle-left").innerHTML = '<td class="middle-left" id="middle-left" onclick="middleLeft()"> O </td>'
    xTurn = 1
    lockSquare4 = 1
  }
}
function middle() {
  if (xTurn == 1 && lockSquare5 != 1) {
    document.getElementById("middle").innerHTML = '<td class="middle" id="middle" onclick="middle()"> X </td>'
    xTurn = 0
    lockSquare5 = 1
  }
  else if (lockSquare5 != 1) {
     document.getElementById("middle").innerHTML = '<td class="middle" id="middle" onclick="middle()"> O </td>'
    xTurn = 1
    lockSquare5 = 1
  }
}
function middleRight() {
  if (xTurn == 1 && lockSquare6 != 1) {
    document.getElementById("middle-right").innerHTML = '<td class="middle-right" id="middle-right" onclick="middleRight()"> X </td>'
    xTurn = 0
    lockSquare6 = 1
  }
  else if (lockSquare6 != 1) {
     document.getElementById("middle-right").innerHTML = '<td class="middle-right" id="middle-right" onclick="middleRight()"> O </td>'
    xTurn = 1
    lockSquare6 = 1
  }
}
function bottomLeft() {
  if (xTurn == 1 && lockSquare7 != 1) {
    document.getElementById("bottom-left").innerHTML = '<td class="bottom-left" id="bottom-left" onclick="bottomLeft()"> X </td>'
    xTurn = 0
    lockSquare7 = 1
  }
  else if (lockSquare7 != 1) {
    document.getElementById("bottom-left").innerHTML = '<td class="bottom-left" id="bottom-left" onclick="bottomLeft()"> O </td>'
    xTurn = 1
    lockSquare7 = 1
  }
}
function bottomMiddle() {
  if (xTurn == 1 && lockSquare8 != 1) {
    document.getElementById("bottom-middle").innerHTML = '<td class="bottom-middle" id="bottom-middle" onclick="bottomMiddle()"> X </td>'
    xTurn = 0
    lockSquare8 = 1
  }
  else if (lockSquare8 != 1) {
    document.getElementById("bottom-middle").innerHTML = '<td class="bottom-middle" id="bottom-middle" onclick="bottomMiddle()"> O </td>'
    xTurn = 1
    lockSquare8 = 1
  }
}
function bottomRight() {
  if (xTurn == 1 && lockSquare9 != 1) {
    document.getElementById("bottom-right").innerHTML = '<td class="bottom-right" id="bottom-right" onclick="bottomRight()"> X </td>'
    xTurn = 0
    lockSquare9 = 1
  }
  else if (lockSquare9 != 1) {
     document.getElementById("bottom-right").innerHTML = '<td class="bottom-right" id="bottom-right" onclick="bottomRight()"> O </td>'
    xTurn = 1
    lockSquare9 = 1
  }
  if (activateSquareX1 == 1) {
  document.getElementById("output").innerHTML = "activated X"
  }
  else if (activateSquareO1 == 1) {
    document.getElementById("output").innerHTML = "activated O"
  }
}
