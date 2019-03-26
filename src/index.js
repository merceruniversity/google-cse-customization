import GoogleSearch from './GoogleSearch';

// console.log(process.env.GAPI_KEY);
// console.log(process.env.GAPI_CX);

const googleSearch = new GoogleSearch({
  key: process.env.GAPI_KEY,
  cx: process.env.GAPI_CX
});

console.log(googleSearch);

// googleSearch.fetchResults('todd').then(result => console.log(result));
// googleSearch.fetchResults('biology').then(result => console.log(result));