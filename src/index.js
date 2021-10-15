import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/footer/Footer';
import { ContextProvider } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <Footer />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
