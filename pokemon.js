//const pokemon = https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png;



const container = document.querySelector('#container');
for(let i = 1; i< 150 ; i++){
    
    const image = document.createElement('img');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.appendChild(image);
}

