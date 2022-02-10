import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');



window.addEventListener('load', async() =>{
    const dogs = await getDogs();
    //console.log(dogs);

    for (let dog of dogs) {
        const dDiv = renderDogCard(dog);
        dogListContainer.append(dDiv);
    }
    
});
