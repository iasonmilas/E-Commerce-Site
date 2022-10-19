import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CurrentShopProvider from "./components/CurrentShopContext"

ReactDOM.render(
  <React.StrictMode>
    <CurrentShopProvider>
      <App />
    </CurrentShopProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
