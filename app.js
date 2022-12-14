// 12 cards 
const cardArray = [
    {
        name: 'hammer', 
        img: 'images/hammerkirby.png'
    }, 
    {
        name: 'ice', 
        img: 'images/icekirby.png'
    },     
    {
        name: 'mike', 
        img: 'images/mikekirby.png'
    },     
    {
        name: 'mirror', 
        img: 'images/mirrorkirby.png'
    },     
    {
        name: 'sleeping', 
        img: 'images/sleepingkirby.png'
    }, 
    {
        name: 'sword', 
        img: 'images/swordkirby.png'
    }, 
    {
        name: 'hammer', 
        img: 'images/hammerkirby.png'
    }, 
    {
        name: 'ice', 
        img: 'images/icekirby.png'
    },     
    {
        name: 'mike', 
        img: 'images/mikekirby.png'
    },     
    {
        name: 'mirror', 
        img: 'images/mirrorkirby.png'
    },     
    {
        name: 'sleeping', 
        img: 'images/sleepingkirby.png'
    }, 
    {
        name: 'sword', 
        img: 'images/swordkirby.png'
    }
]

// Randomizes the cards each time 
cardArray.sort(() => 0.5 - Math.random())

// Looks for id of grid throughout whole document
const gridDisplay = document.querySelector('#grid')

// Looks for id of result throughout whole document 
const resultDisplay = document.querySelector('#result')

// Looks for id of message throughout whole document 
const messageDisplay = document.querySelector('#message')

const restartButton = document.querySelector('#restart-btn')

const audio = new Audio("poyo.m4a")

restartButton.addEventListener('click', resetGame)

function resetGame() {
    window.location.reload(); 
    audio.play(); 
    return false; 
}

// Pushing items into this array 
let cardsChosen = []

let cardsChosenIds = []

const cardsWon = []

function createBoard () 
{
    resultDisplay.textContent = 'Score: 0' 

    for (let i = 0; i < cardArray.length; i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/warpstar.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

function checkMatch() {
    // Gets all of the cards
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId)
    {
        cards[optionOneId].setAttribute('src', 'images/warpstar.png')
        cards[optionTwoId].setAttribute('src', 'images/warpstar.png')
        messageDisplay.textContent = 'You have clicked the same image... ?????????(???????????????????)?????????'
    }

    else if (cardsChosen[0] == cardsChosen[1]) {
        messageDisplay.textContent = 'You found a match! ???( ???? ???? ????)???'
        cards[optionOneId].setAttribute('src', 'images/blank.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpeg')

        // Stop listening for clicks 
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        cardsWon.push(cardsChosen)
    }

    // Not a match 
    else 
    {
        cards[optionOneId].setAttribute('src', 'images/warpstar.png')
        cards[optionTwoId].setAttribute('src', 'images/warpstar.png')
        messageDisplay.textContent = 'Uh oh, wrong move! (????????????????'
    }

    resultDisplay.textContent = 'Score: ' + cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2)
    {
        resultDisplay.textContent = 'Congratulations! You did it! (????????????)'
        messageDisplay.textContent = ' '
    }
}

function flipCard() {
    messageDisplay.textContent = ' '

    // Lets us know which card we clicked on 
    const cardId = this.getAttribute('data-id')

    // Adds the card that the user clicked on into this array 
    cardsChosen.push(cardArray[cardId].name)
    
    cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)

    // If there are 2 cards in there 
    if (cardsChosen.length == 2)
    {
        setTimeout(checkMatch, 500)
    }

}

createBoard()
