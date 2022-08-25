import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import "tachyons" ; 
import { Provider } from 'react-redux';
import { searchReducer, requestRobotsReducer} from './reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger} from "redux-logger"; 
import  ThunkMiddleware  from 'redux-thunk';

// regroupement des reducers 
const rootReducer = combineReducers({searchReducer,requestRobotsReducer}); 
// création de la fonction middleware pour le loggage 
const logger = createLogger(); 
// création du store global 
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware,logger)); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
