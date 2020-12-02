
const cardsArray = [
    {
        name: 'dragon',
        img: '/home/mozes721/Desktop/js_projects/Memory_game/images/1.png',
    },
    {
        name: 'cowboy',
        img: '/home/mozes721/Desktop/js_projects/Memory_game/images/2.jpg',
    },
    {
        name: 'tiger',
        img: '/home/mozes721/Desktop/js_projects/Memory_game/images/3.jpg',
    },
    {
        name: 'sceleton',
        img: '/home/mozes721/Desktop/js_projects/Memory_game/images/4.jpg',
    },
    {
        name: 'wolf',
        img: '/home/mozes721/Desktop/js_projects/Memory_game/images/5.jpg',
    },
    {
        name: 'elf',
        img: '/home/mozes721/Desktop/js_projects/Memory_game/images/6.jpg',
    },
];


let firstGuess = '';
let secondGuess = '';
let count = 0;
// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());
// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);



// For each item in teh cardsArray array...
gameGrid.forEach((item) => {
    const card = document.createElement('div');
    // apply card class to that div
    card.classList.add('card');

    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name;

    // apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`;

    grid.appendChild(card);
});

const match = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach((card) => {
    card.classList.add('match');
    });
}


// Add event listener to grid
grid.addEventListener('click', function (event) {
    if (count < 2){
      count++;
    // The event target is our clicked item
    let clicked = event.target;

    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (clicked.nodeName === 'SECTION') {
        return
    }
    if (count === 1) {
        // Assign first guess 
        firstGuess = clicked.dataset.name;
        // Add class list
        clicked.classList.add('selected');
    } else {
        // Assign second guess
        secondGuess = clicked.dataset.name;
        clicked.classList.add('selected');
    }
    // IF both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
        // and the first guess matches the second match...
        if (firstGuess === secondGuess){
            match()
        }
    }
  
  }
});