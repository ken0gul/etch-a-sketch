// Selecting the main container
const container = document.querySelector(".container");



// Creating grid cells
for (let i = 1; i <= 16; i++) {
     let cells = document.createElement('div');
     
    container.appendChild(cells)
}




// Add a button to send a prompt to user
const button = `<button>Restart</button>`;
container.insertAdjacentHTML("beforebegin", button);

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
    
            div.addEventListener('mouseover', e => {
                 e.target.style.backgroundColor = 'white'
            })
            
        
            div.addEventListener('mouseout', e=> e.target.style.backgroundColor = 'black');
           
        })
    }
    
    
})

// Hover effect
document.querySelectorAll('div').forEach(div => {
    
    div.addEventListener('mouseover', e => {
         e.target.style.backgroundColor = 'white'
    })
    

    div.addEventListener('mouseout', e=> e.target.style.backgroundColor = 'black');
   
})
