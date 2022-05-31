// Selecting the main container
const container = document.querySelector(".container");

// Global Variables
let color = 0.10;


// Global Function
// Darken Function
function darkenCells(e) {
    
    e.target.style.backgroundColor =`rgba(0,0,0,${color+= 0.03})`
    if (e.target.style.backgroundColor ==`rgb(0, 0, 0)`) color = 0.10;
}

// Creating grid cells
// for (let i = 1; i <= 16; i++) {
//     let cells = document.createElement('div');
//     cells.classList.add('cell');
    
//    container.appendChild(cells);
// }


function createGrids (size) {
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   container.style.gridTemplateRows =`repeat(${size}, 1fr)`;
  
   for (let i =0; i < size**2; i++) {
  let cells = document.createElement('div');
    cells.classList.add('cell');
   container.insertAdjacentElement("beforeend",cells);
   }

}

createGrids(16)

// Creating new grid cells
function newGridCells() {
    let input = Number(prompt('Enter:'));
    let inputMax = input**2
    container.querySelectorAll('div').forEach(div=> div.remove());
    // let newContainer = document.createElement('div');
    // newContainer.classList.add('container');
    // document.body.appendChild(newContainer);
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    for(let i=1; i <= inputMax; i++) {
        // Creating new cells
        let newCells = document.createElement('div');
        container.appendChild(newCells);
       
        
    }
    document.querySelectorAll('div').forEach(div => {

        div.addEventListener('mouseover', randomHoverEffect);
           
        const darkenEffect = document.querySelector('.darken');
        if (color < 1) {

            darkenEffect.addEventListener('click', (e) => {
                div.removeEventListener('mouseover', randomHoverEffect);
                div.style.backgroundColor = 'white';
                div.style.border = '1px solid black';
                
                div.addEventListener('mouseenter', darkenCells);          
                
            })
        } 
    })

    // Code below can be used if we give each div 225px height and width

    // document.querySelector(".container").childNodes.forEach(div => {
    //     div.style.width =`${900/input}px`
    //     div.style.height = `${900/input}px`
    // })
}


// Add a button to send a prompt to user
const button = `<button>Restart</button>`;
container.insertAdjacentHTML("beforebegin", button);
const erase = `<button class="erase">Erase</button>`;
container.insertAdjacentHTML("beforebegin", erase);
const darken = `<button class="darken">Darken</button>`;
container.insertAdjacentHTML('beforebegin', darken)




// Add an event listener

document.querySelector('button').addEventListener('click', newGridCells);


// Creating Hover Effect Functionality
function randomHoverEffect(e) {
    e.target.style.backgroundColor = `rgba(${Math.random()*255+1},${Math.random()*255 + 1},${Math.random()*255 +1})`
    e.target.style.transition = 'all 0.2s';
}

// Hover effect
document.querySelectorAll('div').forEach(div => {
    
    
    div.addEventListener('mouseover', randomHoverEffect);

    // div.addEventListener('transitionend', randomHoverEffect)
    

    // div.addEventListener('mouseout', e=> e.target.style.backgroundColor = 'black');
   // Darken effect
const darkenEffect = document.querySelector('.darken');
darkenEffect.addEventListener('click', (e) => {
    div.removeEventListener('mouseover', randomHoverEffect);
    div.style.backgroundColor = 'white';
    div.style.border = '1px solid black'

    div.addEventListener('mouseenter', darkenCells); 

})
})



// Erase button
document.querySelector('.erase').addEventListener('click', ()=> {
    document.querySelectorAll('div').forEach(div => {
        div.style.backgroundColor = 'white';
        div.style.border = '1px solid black'
        // Stop transition when clicked
        // Or it goes forever
        div.addEventListener('transitionend', e=> {
            e.target.style.transition = 'none';
          
        })

        
    }
        );
})

