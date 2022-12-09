// 12 cards 
const cardArray = [
    {
        name: 'bomb', 
        img: 'images/bombkirby.png'
    }, 
    {
        name: 'fire', 
        img: 'images/firekirby.png'
    },     
    {
        name: 'ice', 
        img: 'images/icekirby.png'
    },     
    {
        name: 'mirror', 
        img: 'images/mirrorkirby.png'
    },     
    {
        name: 'parosol', 
        img: 'images/parosolkirby.png'
    }, 
    {
        name: 'sword', 
        img: 'images/swordkirby.png'
    }, 
    {
        name: 'bomb', 
        img: 'images/bombkirby.png'
    }, 
    {
        name: 'fire', 
        img: 'images/firekirby.png'
    },     
    {
        name: 'ice', 
        img: 'images/icekirby.png'
    },     
    {
        name: 'mirror', 
        img: 'images/mirrorkirby.png'
    },     
    {
        name: 'parosol', 
        img: 'images/parosolkirby.png'
    }, 
    {
        name: 'sword', 
        img: 'images/swordkirby.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

// Looking for id of grid throughout whole document
const gridDisplay = document.querySelector('#grid')

function createBoard () 
{
    for (let i = 0; i < 12; i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/star.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}

createBoard()