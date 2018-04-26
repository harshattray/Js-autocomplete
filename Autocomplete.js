/**
* @Author: harsha
* @Date:   2018-04-26T10:40:59+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T16:32:35+05:30
*/
import FuzzySearch from 'fuzzy-search';

export default class Autocomplete {
  constructor(rootEl, options = {}) {
    options = Object.assign({ numOfResults: 10, data: [] }, options);
    Object.assign(this, { rootEl, options });
    this.timer = null;
    this.selectionIndex = -1;

    this.init();
  }

  onQueryChange(query, self) {
    // Get data for the dropdown
    let {url, data, numOfResults} = self.options;
    let results = self.getResults(query, data);
    results = results.slice(0, numOfResults);
    self.updateDropdown(results);
  }

  /**
  * Given an array and a query Fuzzy-search implementation
  */
  getResults(query, data) {
    if (!query) return [];
    const searcher = new FuzzySearch(data, ['name'], {
      caseSensitive: false
    });
    const results = searcher.search(query);
    return results;
  }

  updateDropdown(results) {
    this.listEl.innerHTML = '';
    this.listEl.appendChild(this.createResultsEl(results));
  }

  createResultsEl(results) {
    const fragment = document.createDocumentFragment();
    results.forEach((result) => {
      const el = document.createElement('li');
      Object.assign(el, {
        className: 'result',
        textContent: result.name,
        id: result.value
      });

      // Pass the value to the onSelect callback
      el.addEventListener('click', e => {
        this.passInputValueCallback(result);

      });

      // reset all selected items on mouse hover
      el.addEventListener('mouseover', e => {
        this.selectionIndex = -1;
        this.removeHoverColorOfResults();
      });

      fragment.appendChild(el);
    });
    return fragment;
  }

  createQueryInputEl() {
    const inputEl = document.createElement('input');
    Object.assign(inputEl, {
      type: 'search',
      name: 'query',
      placeholder:'Search for fruits here',
      autocomplete: 'off',
    });

    if (this.options.url) {
      // clear the results list when the 'x' is clicked
      inputEl.addEventListener('search', e => {
        this.updateDropdown([]);
      });

      inputEl.addEventListener('keyup', e => {
        clearTimeout(this.timer);
        if (e.target.value && e.keyCode !== 40 && e.keyCode !== 38) {
          // small delay to avoid sending many request when the user types in too fast
          this.timer = setTimeout(this.onQueryChange, 300, e.target.value, this);
        }
      });
    }
    else {
      inputEl.addEventListener('input', event => this.onQueryChange(event.target.value, this));
    }

    // make sure arrow keys navigation through results is done regardless the type of component
    inputEl.addEventListener('keydown', e => {
      clearTimeout(this.timer);

      // querying the DOM only if I'm moving up/down the results dropdown
      if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 13) {
        const results = [...document.querySelector(`#${this.rootEl.id} .results`).children];
        switch (e.keyCode) {
          // enter key
          case 13: {
            const result = results[this.selectionIndex];
            if (result) {
              this.passInputValueCallback({value: results[this.selectionIndex].id});
            }
            break;
          }
          // arrow up
          case 38: {
            if (this.selectionIndex > 0) {
              this.removeHoverColorOfResults();
              this.selectionIndex--;
              results[this.selectionIndex].classList.add('item__selected');
            }
            break;
          }
          // arrow down
          case 40: {
            if (this.selectionIndex < results.length - 1) {
              this.removeHoverColorOfResults();
              this.selectionIndex++;
              results[this.selectionIndex].classList.add('item__selected');
            }
            break;
          }
        }
      }
    });
    return inputEl;
  }

  removeHoverColorOfResults() {
    const results = [...document.querySelector(`#${this.rootEl.id} .results`).children];
    results.map(elem => {
      elem.classList.remove('item__selected');
      return elem;
    });
  }

  passInputValueCallback(result) {
    const { onSelect } = this.options;
    if (typeof onSelect === 'function') onSelect(result.name);
  }

  init() {
    // Build query input
    this.inputEl = this.createQueryInputEl();
    this.rootEl.appendChild(this.inputEl);

    // Build results dropdown
    this.listEl = document.createElement('ul');
    Object.assign(this.listEl, { className: 'results' });
    this.rootEl.appendChild(this.listEl);
  }
}
