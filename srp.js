const userScore = 0
const compScore = 0
const userScoreSpan = document.getElementById("user-score")
const compScoreSpan = document.getElementById("comp-score")
const scoreBoard = document.querySelector(".score-board")
const result = document.querySelector(".result")

const rock = document.getElementById("brick")
const paper = document.getElementById("parchment")
const scissors = document.getElementById("scissors")
const button = document.getElementById("button")

rock.addEventListener('click', function (){
    console.log("you clicker on rock")
})

paper.addEventListener('click', function (){
    console.log("you clicker on paper")
})

scissors.addEventListener('click', function (){
    console.log("you clicker on scissors")
})

button.addEventListener('click', function (){
    console.log("you clicker on button")
})