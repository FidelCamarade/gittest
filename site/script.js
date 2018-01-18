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