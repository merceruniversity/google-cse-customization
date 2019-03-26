// <script src="https://apis.google.com/js/api.js"></script>
// <script>
//   /**
//    * Sample JavaScript code for search.cse.list
//    * See instructions for running APIs Explorer code samples locally:
//    * https://developers.google.com/explorer-help/guides/code_samples#javascript
//    */
//
//   function loadClient() {
//     gapi.client.setApiKey("YOUR_API_KEY");
//     return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded before calling this method.
//   function execute() {
//     return gapi.client.search.cse.list({
//       "q": "todd",
//       "cx": "012607311805140801608:fwi9qoupi10"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client");
// </script>
// <button onclick="loadClient()">load</button>
// <button onclick="execute()">execute</button>

import loadJS from 'load-js';

class GoogleSearch {
  // constructor(options) {
  //   this.config = {
  //     key: options.key,
  //     cx: options.cx,
  //   };

  //   this.isApiLoaded = false;
  //   this.isClientLoaded = false;

  //   return this;
  // }

  constructor(options) {
    this.config = {
      key: options.key,
      cx: options.cx,
    };

    return this;
  }

  // init() {
  //   return loadJS([{
  //     url: 'https://apis.google.com/js/api.js'
  //   }]).then(() => {
  //     console.log('GAPI loaded');
  //     // this.isGapiLoaded = true;
  //     return new Promise((resolve) => {
  //       gapi.load('client', () => {
  //         console.log('API key set');
  //         gapi.client.setApiKey(this.config.key);
  //         resolve(gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
  //           .then(() => {
  //             console.log('Client loaded');
  //             // this.isClientLoaded = true;
  //           }));
  //       });
  //     });
  //   });
  // }

  init() {
    return new Promise(resolve => {
        console.log(this.isApiLoaded);
        loadJS([{
          url: 'https://apis.google.com/js/api.js'
        }]).then(() => resolve(true));
      })
      .then(() => {
        return new Promise(resolve => {
          console.log('API loaded');
          resolve(this.isApiLoaded = true);
        })
      })
      .then(() => {
        return new Promise(resolve => {
          gapi.load('client', () => {
            console.log('API key set');
            resolve(gapi.client.setApiKey(this.config.key));
          });
        });
      })
      .then(() => {
        return gapi.client.load('https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest');
      })
      .then(console.log('Client loaded'));
  }

  fetchResults(q) {
    return new Promise(resolve => {
      this.init().then(() => {
        console.log(q);
        //   gapi.client.search.cse
        //     .list({
        //       q,
        //       cx: this.config.cx
        //     })
        //     .then(
        //       response => {
        //         // Handle the results here (response.result has the parsed body).
        //         // console.log('Response', response);
        //         resolve(response);
        //       },
        //       err => {
        //         console.error('Execute error', err);
        //       }
        //     );
        // });
      });
    });
  }

}

export default GoogleSearch;