import Notiflix from 'notiflix';

export function fetchCountries(evt) {
    const name = evt.target.value.trim().toLowerCase();

    if (name === '') {
        return;
    }


    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags.svg,languages`)
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
               return warningNotification();
            } else if (data.length >= 2 && data.length <= 10) {
             
            };
        })
        .catch(error => {
            console.log(error);
        });
    
        
      
};

function warningNotification() {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
};


