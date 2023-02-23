import { fetchCountries } from "./js/fetchCountries";
import './css/styles.css';
import Notiflix from 'notiflix';



const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
};

refs.input.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));




