// ***********Variables************
let currentRow = 0;
let currentGuess = [];
let currentAnswer;

//***********Cached elements****************

let rows = document.querySelectorAll(`.row${currentRow}`);
const keys = document.querySelectorAll(".key");


// **********Functions************
const getAnswer = (answers) => {
    const answerIndex = Math.floor(Math.random() * answers.length);
    currentAnswer = answers[answerIndex];
    return currentAnswer;
}

const handleClick = (letter) => {
       if  (letter === "Enter") {
        submit();
    } else if (letter === "Backspace") {
        backspace();
    } else if (currentGuess.length < 5) {
            currentGuess.push(letter);
            updateBoard();
}
}

const checkGuess = (guess) => {
    const boxes = rows[0].querySelectorAll(".box");
    const answerCopy = [...currentAnswer];  

    let correctGuess = true;

// Green squares
for (let i = 0; i < guess.length; i++) {
    if (guess[i] === currentAnswer[i]) {
        boxes[i].style.backgroundColor = "green";
        answerCopy[i] = null; 
    } else {
        correctGuess = false;
    }
    };

// Yellow squares
for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== currentAnswer[i] && answerCopy.includes(guess[i])) {
        boxes[i].style.backgroundColor = "yellow";
        answerCopy[answerCopy.indexOf(guess[i])] = null; 
    }
}
// Grey/incorrect squares
for (let i = 0; i < guess.length; i++) {
    if (boxes[i].style.backgroundColor !== "green" && boxes[i].style.backgroundColor !== "yellow") {
        boxes[i].style.backgroundColor = "gray";
    }
}

for (let i = 0; i < guess.length; i++) {
    boxes[i].textContent = guess[i];
}

// if win
if (correctGuess) {
    document.getElementById("winMessage").style.display = "block"; 
    return; 
}

// if lose
if (correctGuess) {
    document.getElementById("winMessage").style.display = "block";
    return;
}
}
const backspace = () => { 
    currentGuess.pop();
    updateBoard();
}

const submit = () => {
    const guess = currentGuess.join("").toLowerCase();
    const validWord = isValidWord(guess);
    errorMessage(validWord);
    if (validWord) {
        checkGuess(guess);
        nextRow();
    } else {
        backspace()
        backspace()
        backspace()
        backspace()
        backspace()
    }
    
}

const nextRow = () => {
    currentGuess = [];
    currentRow++;
    rows = document.querySelectorAll(`.row${currentRow}`);

    if(currentRow >=6) {
        document.getElementById("loseMessage").style.display = "block";
        document.getElementById("correctWord").textContent = currentAnswer; 
    } else {
        updateBoard();
    }
}

const errorMessage = (validWord) => {
    console.log(validWord);
    
    if (validWord) {
        console.log("codeIsReaching Here");
        
        document.getElementById("errorMessage").style.display = "none";
            return; 
    } else {
        document.getElementById("errorMessage").style.display = "block";
     return;
    }
}

const isValidWord = (word) => {
    console.log(word);
    const isWord = answers.includes(word)
    console.log(isWord);
    
    return answers.includes(word);
}

const updateBoard = () => { 
    const currentRowElement = rows[0];
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
