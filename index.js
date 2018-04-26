/**
 * @Author: harsha
 * @Date:   2018-04-26T10:40:59+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T15:51:11+05:30
 */


import Autocomplete from './Autocomplete';
import data from './fruits.json'
import './main.css';
import FuzzySearch from 'fuzzy-search'


// US States
const renderValues = data.fruits;

new Autocomplete(document.getElementById('state'), {
  data: renderValues,
  onSelect: (data) => {
    console.log('selected state:', data);
  },
});
