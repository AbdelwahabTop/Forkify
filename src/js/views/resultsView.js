import icons from 'url:../../img/icons.svg'; //parcel 2
import previewView from './previewView.js';
import view from './View.js';

class ResultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again :)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();
