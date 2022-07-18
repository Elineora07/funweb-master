//For math game
//     let n1 = Math.floor(Math.random() * 10);
//     let n2 = Math.floor(Math.random() * 10);
//     document.getElementById('v1').value = n1;
//     document.getElementById('v2').value = n2;
//     let ans = n1 + n2;
//
// function JsGame() {
//     let usera = document.getElementById('answer').value;
//     if (usera != ans) {
//          alert("To'g'ri javob " + ans + ". Yana urinib ko'ring!");
//     }
//     n1 = Math.floor(Math.random() * 500);
//     n2 = Math.floor(Math.random() * 500);
//     document.getElementById('v1').value = n1;
//     document.getElementById('v2').value = n2;
//     ans = n1 + n2;
// };

// For Catch game
document.querySelectorAll("div.catch, button").forEach((item) => {
    item.addEventListener("mouseenter", function () {
        style.left = (Math.random() * 90) + "%";
        style.right = (Math.random() * 90) + "%";
        style.top = (Math.random() * 90) + "%";
        style.bottom = (Math.random() * 90) + "%";
    })
});

//For paper game
//
// let userScore = 0;
// let computerScore = 0;
//
// const userScore_span = document.getElementById('user-score');
// const computerScore_span = document.getElementById('comp-score');
// const scoreBoard_div = document.querySelector('.score_board');
// const result_p = document.querySelector('.result > p');
// const rock_div = document.getElementById('r');
// const paper_div = document.getElementById('p');
// const sci_div = document.getElementById('s');
//
// function getComputerChoice() {
//     const choices = ['r', 'p', 's'];
//     const randomNumber = Math.floor(Math.random() * 3);
//     return choices[randomNumber];
// }
// function convertWord(letter){
//     if (letter === 'r') return 'Tosh';
//     if (letter === 'p') return "Qog'oz";
//     if (letter === 's') return "Qaychi";
//  }
// function win(userChoice, computerChoice){
//     userScore++;
//     userScore_span.innerHTML = userScore;
//     computerScore_span.innerHTML = computerScore;
//     result_p.innerHTML = convertWord(userChoice) + ' ' + convertWord(computerChoice) + 'ni yutdi. Siz yutdingiz';
//
// }
// function lose(){
//
// }
// function draw(){
//
// }
// function game(userChoice){
//     const computerChoice = getComputerChoice();
//     console.log(computerChoice);
//     switch (userChoice + computerChoice) {
//         case 'rs':
//         case 'pr':
//         case 'sp':
//             win(userChoice, computerChoice);
//             break;
//         case 'rp':
//         case 'ps':
//         case 'sr':
//             lose();
//             break;
//         case 'rr':
//         case 'pp':
//         case 'ss':
//             draw();
//             break;
//     }
// };
//
// function main() {
//     rock_div.addEventListener('click', function () {
//         game('r');
//     })
//     paper_div.addEventListener('click', function () {
//         game('p');
//     })
//     sci_div.addEventListener('click', function () {
//         game('s');
//     })
// }
//
// main();