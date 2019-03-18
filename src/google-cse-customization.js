import elementReady from 'element-ready';

import './google-cse-customization.scss';

const removeAll = coll => coll.forEach(item => item.remove());

const isGcseStyling = node => ('LINK' === node.tagName &&
    'undefined' !== node.href &&
    (/\/cse\/static\/element\//i.test(node.href) ||
      /\/cse\/static\/style\/look\//i.test(node.href))) ||
  ('STYLE' === node.tagName &&
    (/\.gsc-control-cse/i.test(node.innerHTML) ||
      /\.gscb_a/i.test(node.innerHTML)));

const removeGcseStyleNodesFromCollection = coll => {
  if (!coll) return;
  const nodesToRemove = [];
  for (const node of coll) {
    // console.log(node);
    if (isGcseStyling(node)) {
      nodesToRemove.push(node);
    }
  }
  // console.log(nodesToRemove);
  removeAll(nodesToRemove);
}

const gscInputMutationCallback = mutationsList => {
  for (const mutation of mutationsList) {
    // console.log(mutation);
    if ('style' === mutation.attributeName && '' !== mutation.target.getAttribute('style')) {
      mutation.target.style = '';
    }
  }
}
const gscInputObserver = new MutationObserver(gscInputMutationCallback);

const gcseCallBack = () => {
  const headChildren = document.head.children;
  // console.log([...Array.from(headChildren)]);
  removeGcseStyleNodesFromCollection(headChildren);

  (async () => {
    const gscInput = await elementReady('input.gsc-input');
    // console.log(gscInput);
    gscInput.setAttribute('placeholder', 'Search');
    gscInput.setAttribute('style', '');
    gscInputObserver.observe(gscInput, {
      attributes: true
    });
  })();
}

window.__gcse = {
  callback: gcseCallBack
};

// import elementReady from 'element-ready';
// import debounce from 'debounce-promise';

// import './google-cse-customization.scss';

// const setAttribute = (target, attr, val) => target.setAttribute(attr, val);
// const debouncedSetAttribute = debounce(setAttribute, 100);



// (async () => {
//   const gscInput = await elementReady('input.gsc-input');
//   console.log(gscInput);
//   gscInput.setAttribute('placeholder', 'Search');
//   gscInput.setAttribute('style', 'value');

//   const gscInputObserver = new MutationObserver(gscInputCallback);
//   gscInputObserver.observe(gscInput, {
//     attributes: true
//   });
// })();