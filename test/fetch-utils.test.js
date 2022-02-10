// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getDog } from '../fetch-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dog-detail"><p class="name">Boogie</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">corgi</p></div><p class="description">Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.</p></div>`; 
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDog({ 
        age: 5,
        breed: 'corgi',
        created_at: '2021-11-18T22:50:36+00:00',
        description: 'Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.',
        id: 2,
        name: 'Boogie',
      
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
