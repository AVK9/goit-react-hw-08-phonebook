import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      {/* <ThemeProvider theme={theme}> */}
    <Provider store={store}>
      <App />
    </Provider>
      {/* </ThemeProvider> */}
     </BrowserRouter>
  </React.StrictMode>
);
