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
  // countriesContainer.style.opacity = 1;
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
