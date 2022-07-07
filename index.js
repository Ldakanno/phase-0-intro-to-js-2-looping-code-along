function writeCards(names, event) {
    let cardMessages = [];
    for (let i = 0; i < names.length; i++) {
        cardMessages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return cardMessages;
}

function countDown(number) {
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}