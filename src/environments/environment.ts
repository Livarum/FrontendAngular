// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultauth: 'fackbackend',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  },
  urlCopoMex: 'https://api.copomex.com/query/',
  tokenCopomex: 'ce9b758e-1154-4378-938f-19ed777db78a',
  apiUrl: 'http://localhost:8000/api',
  backendUrl: 'http://localhost:8000',
  //apiUrl: 'http://erpv32.test/api',
  //backendUrl: 'http://erpv32.test',
  //apiUrl: 'http://test-backend-erp.mudviewer.com/api',
  //backendUrl: 'http://test-backend-erp.mudviewer.com',
  EncryptKey: 'AF72433AA50E121EFF03657D09E8B28455B56DD094666F912E679A059E04AEF8',
  EncryptIV: '3C8CF3337C28D9F39DDAEAA37994E70BF1841117F79F5DAC868B2BB649DE70A9', 
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */