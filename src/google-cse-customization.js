import elementReady from 'element-ready';
import debounce from 'debounce-promise';

import './google-cse-customization.scss';

const setAttribute = (target, attr, val) => target.setAttribute(attr, val);
const debouncedSetAttribute = debounce(setAttribute, 100);

const gscInputCallback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    console.log(mutation);
    if ('style' === mutation.attributeName && '' !== mutation.target.getAttribute('style')) {
      debouncedSetAttribute(mutation.target, 'style', '');
    }
  }
}

(async () => {
  const gscInput = await elementReady('input.gsc-input');
  console.log(gscInput);
  gscInput.setAttribute('placeholder', 'Search');
  gscInput.setAttribute('style', 'value');

  const gscInputObserver = new MutationObserver(gscInputCallback);
  gscInputObserver.observe(gscInput, {
    attributes: true
  });
})();