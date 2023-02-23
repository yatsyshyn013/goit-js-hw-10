import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
};

export function fetchCountries(evt) {
    const name = evt.target.value.trim().toLowerCase();

    if (name === '') {
        return;
    }


    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            // if (!response.ok) {
            // throw new Error(response.status);
            // }
            console.log(response);
            return response.json();
        })
        .then(data => {
            // console.log(data);
            if (data.length > 10) {
                warningNotification();
            } else if (data.length >= 2 && data.length <= 10) {
                severalCountriesRequest(data);
            } else if (data.length === 1) {
                oneCountryRequest(data[0]);
            };
        })
        .catch(error => {
            console.log(error);
        });
    
        
      
};

function warningNotification() {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
};

function severalCountriesRequest(data) {
    clearInfoMarkup();
    const markup = [];
    data.map(item => {
        markup.push(`<li class="list-item"><img src="${item.flags.svg}" alt="${item.flags}" width="30px">${item.name.common}</li>`);
    });
    
     refs.countryList.innerHTML = markup.join("");
}

function clearMarkup() {
    refs.countryList.innerHTML = '';
}

function clearInfoMarkup() {
    refs.countryInfo.innerHTML = '';
}

function oneCountryRequest(oneCountry) {
   
    clearInfoMarkup();
    // const languagesArr = languages.map(language => language.name);
    // const infoMarkup = `<ul class="info-list">
    //     <li>Capital: ${oneCountry.capital}</li>
    //     <li>Population: ${oneCountry.population}</li>
    //     <li>Languages: ${languagesArr(oneCountry)}</li>
    // </ul>`;
   
    refs.countryList.innerHTML = `<li class="list-item"><img src="${oneCountry.flags.svg}" alt="${oneCountry.flags}" width="30px"><span class="text-item">${oneCountry.name.common}</span></li>`;

    refs.countryInfo.insertAdjacentHTML('beforeend', 
    `<ul class="info-list">
        <li>Capital: ${oneCountry.capital}</li>
        <li>Population: ${oneCountry.population}</li>
        <li>Languages: ${languagesArr(oneCountry)}</li>
    </ul>`);
    
    // refs.countryList.innerHTML = markup.join("");
}

function languagesArr(oneCountry) {
    return Object.values(oneCountry.languages).join(', ');
}


