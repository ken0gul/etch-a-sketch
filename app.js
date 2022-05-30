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
for (let i = 1; i <= 16; i++) {
     let cells = document.createElement('div');
     cells.classList.add('cell');
     
    container.appendChild(cells);
}




// Add a button to send a prompt to user
const button = `<button>Restart</button>`;
container.insertAdjacentHTML("beforebegin", button);
const erase = `<button class="erase">Erase</button>`;
container.insertAdjacentHTML("beforebegin", erase);
const darken = `<button class="darken">Darken</button>`;
container.insertAdjacentHTML('beforebegin', darken)

// Add an event listener

document.querySelector('button').addEventListener('click', ()=> {
    let input = Number(prompt('Enter:'))**2;
    if (Math.sqrt(input) > 100) return;
    document.querySelectorAll('div').forEach(div => div.remove())
    let newContainer = document.createElement('div');
    newContainer.classList.add('container');
    console.log(input)
    document.body.appendChild(newContainer);
    for(let i=1; i <= input; i++) {
        // Creating new cells
        let newCells = document.createElement('div');
        newContainer.appendChild(newCells);
        newContainer.style.display ='grid'
        newContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(input)}, 1fr)`;
        newContainer.style.gridTemplateRows = `repeat(${Math.sqrt(input)}, 1fr)`;
        newContainer.childNodes.forEach(div => {
            div.style.width =`${900/(Math.sqrt(input))}px`
            div.style.height = `${900/(Math.sqrt(input))}px`
        })
        document.querySelectorAll('div').forEach(div => {
    
            div.addEventListener('mouseover', randomHoverEffect);
            
            // // Hover effect loop
            // div.addEventListener('transitionend', e=> {
            //     if(e.propertyName === 'background-color') {
            //         e.target.style.backgroundColor = `rgb(${Math.random()*255+1},${Math.random()*255 + 1},${Math.random()*255 +1})`;
            //     }
            // })
            // div.addEventListener('mouseout', e=> e.target.style.backgroundColor = 'black');

            // Darken Effect


          
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
    }
    
    
})


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

