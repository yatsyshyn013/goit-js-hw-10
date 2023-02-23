import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from "./js/fetchCountries";


const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    // countryList: document.querySelector('.country-list'),
    // countryInfo: document.querySelector('.country-info')
};

refs.input.addEventListener('input', debounce(onInputEvent, DEBOUNCE_DELAY));


function onInputEvent(evt) {
    fetchCountries(evt)
        // .then(severalCountriesRequest);
};






