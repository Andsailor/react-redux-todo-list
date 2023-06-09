import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'

import App from './features/app/App'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
