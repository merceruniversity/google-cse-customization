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

  constructor(options) {
    this.config = {
      key: options.key,
      cx: options.cx
    };

    this.arePrerequisiteScriptsLoaded = false;

    return this;
  }

  loadPrerequisiteScripts() {
    console.log('Loading prerequisite scripts');

    console.log(this.arePrerequisiteScriptsLoaded);

    if (this.arePrerequisiteScriptsLoaded) {
      return new Promise(() => {});
    }

    return loadJS([{
      url: 'https://apis.google.com/js/api.js'
    }]).then(() => {
      return new Promise(resolve => {
        gapi.load('client', () => {
          resolve();
        });
      });
    }).then(() => {
      return gapi.client.setApiKey(this.config.key);
    }).then(() => {
      return gapi.client.load('https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest');
    }).then(() => {
      this.arePrerequisiteScriptsLoaded = true;
    });

  }

  fetchResults(q) {
    return new Promise(resolve => {
      this.loadPrerequisiteScripts()
        .then(() => {
          gapi.client.search.cse
            .list({
              q,
              cx: this.config.cx
            })
            .then(
              response => {
                resolve(response);
              },
              err => {
                console.error('Execute error', err);
              }
            );
        });
    });
  }
}

export default GoogleSearch;