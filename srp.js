window.addEventListener("load", function () {
    let userChoise;
    let compChoise;
    let userScore = 0;
    let compScore = 0;
    const userScoreSpan = document.getElementById("user-score");
    const compScoreSpan = document.getElementById("comp-score");
    const scoreBoard = document.querySelector(".score-board");
    const resultCombination = document.getElementById("resultCombination");
    const winner = document.getElementById("winner");
    const result = document.querySelector(".result");

    const rock = document.getElementById("rock");
    const paper = document.getElementById("parchment");
    const scissors = document.getElementById("scissors");
    const button = document.getElementById("button");

    rock.addEventListener('click', function (){
        userChoise = "Rock";
    });

    paper.addEventListener('click', function (){
        userChoise = "Paper";
    });

    scissors.addEventListener('click', function (){
        userChoise = "Scissors";
    });

    button.addEventListener('click', function (){
        console.log(userChoise);
        compChoise = computerChoise();
        console.log(compChoise);
        getResult();
    });

    function computerChoise() {
        const choise = ["Rock", "Paper", "Scissors"];
        let getIndex = Math.floor(Math.random()*3);
        return choise[getIndex];
    }

    function getResult(){
        if (userChoise === "Rock" && compChoise === "Rock") {
            resultCombination.innerText = "Rock vs Rock! ";
            winner.innerText = "Frendship wins!";

        } else if (userChoise === "Rock" && compChoise === "Paper") {
            resultCombination.innerText = "Paper covers Rock! ";
            winner.innerText = "Computer Wins!";
            compScoreSpan.innerText = (++compScore).toString();
        } else if (userChoise === "Rock" && compChoise === "Scissors") {
            resultCombination.innerText = "zdfgsfgsdfg ";
            winner.innerText = "sfgsdfgsdfg";
        }
    }
});
