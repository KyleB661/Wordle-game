// ***********Variables************
let currentRow = 0;
let currentGuess = [];

//***********Cached elements****************

const rows = document.querySelectorAll(`.row${currentRow +1}`);
console.log(`.row${currentRow.toString()}`);

const keys = document.querySelectorAll(".key");


// **********Functions************
const getAnswer = (answers) => {
    const answerIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[answerIndex];
    return answer;
}

const handleClick = (letter) => {
    console.log(letter);
    console.log(currentGuess.length);
    console.log(currentGuess);
    
      
    if  (letter === "Enter") {
        submit();
    } else if (letter === "Backspace") {
        backspace();
    } else if (currentGuess.length < 5) {
            currentGuess.push(letter);
            updateBoard();
}
}

const backspace = () => { 
    currentGuess.pop();
    updateBoard();
}

const submit = () => {
} 

const updateBoard = () => {    
    const currentRowElement = rows[currentRow];
    const boxes = currentRowElement.querySelectorAll(".box");
    currentGuess.forEach((letter, i) => {
        boxes[i].textContent = letter;
     });
     for (let i = 0; i < 5; i++) {
        if (currentGuess[i] === undefined) {
            boxes[i].textContent = "";
        } else {
            boxes[i].textContent = currentGuess[i];
        }
     }
    }

const init = () => {
    const answer = getAnswer(answers);
    console.log(`Random answer: ${answer}`);
}

init();

// ***************Event Listeners**************
keys.forEach(key => {
    key.addEventListener("click", () => handleClick(key.textContent));
});





// To do:
//sort answer list? why wont it link with answers.js???? - using small portion within answers array for now
// updateBoard function - ?????
// Make keys functional and correspond with the letter clicked - Eventlistener - handleClick?
// row/guess functionality. would this have to be 2 seperate functions? i.e a counter that hits > row 6 === you lose?
//backspace function for the del
//sumbit function for Enter 


