import elementReady from 'element-ready';

import './google-cse-customization.scss';

const removeAll = coll => coll.forEach(item => item.remove());

const isGcseStyling = node => ('LINK' === node.tagName &&
    'undefined' !== node.href &&
    (/^https:\/\/www\.google\.com\/cse\/static\/element\//i.test(node.href) ||
      /^https:\/\/www\.google\.com\/cse\/static\/style\/look\//i.test(node.href))) ||
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

const gcseCallBack = () => {
  (async () => {
    const gscInput = await elementReady('input.gsc-input');
    // console.log(gscInput);
    gscInput.setAttribute('placeholder', 'Search');
    gscInput.setAttribute('style', 'value');
  })();

  const headChildren = document.head.children;
  // console.log([...Array.from(headChildren)]);
  removeGcseStyleNodesFromCollection(headChildren);
}

window.__gcse = {
  callback: gcseCallBack
};