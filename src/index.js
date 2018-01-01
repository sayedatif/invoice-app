import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistStore } from 'redux-persist'
import { createStore } from 'redux'
import './index.css';
import App from './Containers/App';
import invoiceApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  invoiceApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

let persistor = persistStore(
  store,
  null,
  () => { store.getState() }
);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
