import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');


// dogListContainer.addEventListener('load', async(event)=> {
//     event.preventDefault();
//     //const doggo = await getDogs(getDogs.value, );
// });
// on load
// fetch all dogs
// render and append all dog cards to the container


window.addEventListener('load', async() =>{
    const dogs = await getDogs();
    console.log(dogs);

    // for (let dog of dogs) {
    //     const li = renderDogCard(dog);
    //     dogListContainer.appened(li);
    // }
    for (let dog of dogs) {
        const dDiv = renderDogCard(dog);
        dogListContainer.append(dDiv);
    }

});