/**
 * @Author: harsha
 * @Date:   2018-04-26T10:40:59+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T16:31:55+05:30
 */


import Autocomplete from './Autocomplete';
import data from './fruits.json'
import './main.css';
import FuzzySearch from 'fuzzy-search'


const renderValues = data.fruits;

new Autocomplete(document.getElementById('state'), {
  data: renderValues
});
