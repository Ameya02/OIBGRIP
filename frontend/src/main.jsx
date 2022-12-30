import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import './index.css'
import store from './store';
import { ContextProvider } from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ContextProvider>
    <App />
  </ContextProvider>
    </Provider>
  
)
