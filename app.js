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

cardArray.sort(() => 0.5 - Math.random())

// Looking for id of grid throughout whole document
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const messageDisplay = document.querySelector('#message')

// Pushing items into this array 
let cardsChosen = []

let cardsChosenIds = []

const cardsWon = []

function createBoard () 
{
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
        messageDisplay.textContent = 'You have clicked the same image!'
    }

    else if (cardsChosen[0] == cardsChosen[1]) {
        messageDisplay.textContent = 'You found a match!'
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
        messageDisplay.textContent = 'Sorry, try again!'
    }

    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2)
    {
        resultDisplay.textContent = 'Congratulations you found them all!'
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
