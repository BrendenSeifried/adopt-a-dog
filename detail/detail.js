import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// const dataStuff = new URLSearchParams(window.location.search);
// const params = dataStuff.get('id');
// console.log(params);
// const dog = getDog(params, dog);
// console.log(dog);

// // const anImg = document.getElementById('img');

// const name = document.getElementById('name');
// const breed = document.getElementById('breed');
// const age = document.getElementById('age');
// console.log(dog, name, breed, age, params);

// name.textContent = dog.name;
// age.textContent = dog.age;

// breed.textContent = dog.breed;
// //anImg.src = `../assets/${dog.img}.png`;





// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container

window.addEventListener('load', async() =>{
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const dog = await getDog(id);
    

    const dogDeets = renderDogDetail(dog);
    dogDetailContainer.append(dogDeets);

});

