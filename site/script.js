function playGues1() {
    var answer = parseInt(Math.random() * 100);
    // var playerNum = 1;

    while (true) {
        var userAnswer = prompt("Угадайте число от 0 до 100, для выхода - q");
        if (userAnswer == "q") {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert("Ваш ответ слишком большой");
        } else if (userAnswer < answer) {
            alert("Ваш ответ слишком маленький");
        } else if (userAnswer == answer) {
            alert("Вы угадали! Ответ - " + userAnswer);
            break;
        } else {
            alert("Вы не ввели число");
        }
    }
}


function playGues2() {
    var answer = parseInt(Math.random() * 100);
    var playerNum = 1;
    alert (answer);

    while (true) {
        var userAnswer = prompt("Игрок " + playerNum + ": угадайте число от 0 до 100, для выхода - q");
        if (userAnswer == "q") {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert("Ваш ответ слишком большой");
        } else if (userAnswer < answer) {
            alert("Ваш ответ слишком маленький");
        } else if (userAnswer == answer) {
            alert("Вы угадали! №" + playerNum);
            break;
        } else {
            alert("Вы не ввели число");
        }

        if (playerNum == 1) {
            playerNum = 2;
        } else {
            playerNum = 1;
        }

    }
}

// для загадок:

var correctAnswerCount = 0;

function askQuestion(textBoxId, answer) {
    var userAnswer = document.getElementById(textBoxId).value;
    userAnswer = userAnswer.toLocaleLowerCase();
    if (userAnswer == answer) {
        correctAnswerCount++;
    }
}


function playPuzzle() {
    correctAnswerCount = 0;
    askQuestion("userAnswer1", "капуста");
    askQuestion("userAnswer2", "елка");

/*    var userAnswer = document.getElementById("userAnswer1").value;
    if (userAnswer == "капуста") {
        correctAnswerCount++;
    }

    userAnswer = document.getElementById("userAnswer2").value;
    if (userAnswer == "елка") {
        correctAnswerCount++;
    }*/
    alert("Правильных ответов - " + correctAnswerCount);

}