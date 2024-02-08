import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'; // Import the Provider
import store from './app/store.js'; // Import your store configuration

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wraaping up the app int the redux store that we created */}
    {/* so when we will login logout thhis app will have access to the stored thing */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
