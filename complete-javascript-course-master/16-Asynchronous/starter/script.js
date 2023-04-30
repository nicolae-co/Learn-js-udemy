// https://restcountries.com/v2/

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data) {
  const html = `
            <article class="country">
              <img class="country__img" src="${data.flags.svg}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} mil people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0]?.name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.languages[0]?.name
                }</p>
              </div>
            </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderCountry2 = function (data, className = '') {
  const html = `
            <article class="country ${className}">
              <img class="country__img" src="${data.flags.svg}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} mil people</p>
                <p class="country__row"><span>🗣️</span>${data.languages.spa}</p>
                <p class="country__row"><span>💰</span>${data.languages.spa}</p>
              </div>
            </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

/*
///////////////////////////////////////
const getCOuntryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} mil people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCOuntryData('portugal');
getCOuntryData('romania');
getCOuntryData('italy');
getCOuntryData('france');

// Callback Hell -
*/

/*
const getCountryNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry2(data2, 'neighbour');
    });
  });
};

// getCountryNeighbour('portugal');
getCountryNeighbour('japan');

setTimeout(() => {
  console.log('1 sec passed');
  setTimeout(() => {
    console.log('2 sec passed');
    setTimeout(() => {
      console.log('3 sec passed');
      setTimeout(() => {
        console.log('4 sec passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

*/

/*

// Promises and the Fetch API
// Chaining promises
// Handling rejected promises

// const getCOuntryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJson = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // COuntry 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'asdsa';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry2(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // COuntry 1

  getJson(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data[0].borders);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = 'asdsa';
      console.log(neighbour);

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry2(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('germany');
});

getCountryData('australia');



// Asynchronous behind the scenes: The Event Loop

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved primise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('Test end');


// Building a simple promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🪩');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🥇');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));


// Promisifying the geolocation API

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  const apiKEY = '292845561963529523645x22003';
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKEY}`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding: ${res.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};


btn.addEventListener('click', whereAmI);


// Consuming Promises With ASYNC/AWAIT
// Handling Errors with Try...Catch
// Returning values from Async functions

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
//   console.log(res)
// );

const whereAmI = async function () {
  const apiKEY = '292845561963529523645x22003';
  try {
    // Geolocation
    const pos = await getPosition();

    // Reverse Geocoding
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKEY}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1. Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log('3. Finished getting locations'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log('3. Finished getting locations');
})();
*/

const getJson = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJson(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJson(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJson(`https://restcountries.com/v2/name/${c3}`);

    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJson(`https://restcountries.com/v2/name/${c1}`),
      getJson(`https://restcountries.com/v2/name/${c2}`),
      getJson(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
*/

// Other promise combinators: Race, AllSettled and Any

// Promise.race

// (async function () {
//   const res = await Promise.race([
//     getJson(`https://restcountries.com/v2/name/italy`),
//     getJson(`https://restcountries.com/v2/name/egypt`),
//     getJson(`https://restcountries.com/v2/name/somalia`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request tool to long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJson(`https://restcountries.com/v2/name/italy`), timeout(0.3)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Succes'),
//   Promise.reject('ERROR'),
//   Promise.resolve('2 Succes'),
//   Promise.resolve('3 Succes'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Succes'),
//   Promise.reject('ERROR'),
//   Promise.resolve('2 Succes'),
//   Promise.resolve('3 Succes'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// Promise.any[ES2021]

Promise.any([
  Promise.reject('ERROR'),
  Promise.resolve('2 Succes'),
  Promise.resolve('Succes'),
  Promise.resolve('3 Succes'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
