 
 
 
 const myvalue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    const mysuits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

    let selectedCards = [];

    const myButton = document.querySelector("#button");
    const myOutput = document.querySelector("#output");

    function randomHand() {
        selectedCards = [];

        while (selectedCards.length < 5) {
            const chooseValue = Math.floor(Math.random() * myvalue.length);
            const valueRandom = myvalue[chooseValue];

            const myRandom = Math.floor(Math.random() * mysuits.length);
            const suitRandom = mysuits[myRandom];

            const card = valueRandom === 'Ace' || valueRandom === 'Jack' || valueRandom === 'Queen' || valueRandom === 'King'
                ? `${valueRandom} ${suitRandom}`
                : `${valueRandom} of ${suitRandom}`;

            if (!selectedCards.includes(card)) {
                selectedCards.push(card);
            }
        }

        displayHand();
    }

    function displayHand() {
        myOutput.innerHTML = '';

        for (let card of selectedCards) {
            const cardElement = document.createElement('p');
            cardElement.textContent = card;
            myOutput.appendChild(cardElement);
        }
    }

    myButton.addEventListener("click", randomHand);
