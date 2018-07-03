import _ from 'lodash';
import './style.scss'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpac1k'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
