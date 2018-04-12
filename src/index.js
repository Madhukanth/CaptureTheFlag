import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
//  import { createLogger } from 'redux-logger';cd
// import { sessionService } from 'redux-react-session';
// import thunkMiddleware from 'redux-thunk';
import reducers from '../src/reducers';
import Routes from './routes';
// import registerServiceWorker from './registerServiceWorker';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// const middleware = compose(applyMiddleware(thunkMiddleware));
// const store = createStore(reducers, undefined, middleware);
// const options = {
//   refreshOnCheckAuth: true,
//   redirectPath: '/instructions',
//   driver: 'COOKIES',
// };
// sessionService
//   .initSessionService(store, options)
//   .then(() =>
//     console.log('Redux React Session is ready and a session was refreshed from your storage',),)
//   .catch(() =>
//     console.log('Redux React Session is ready and there is no session in your storage',),);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// registerServiceWorker();
