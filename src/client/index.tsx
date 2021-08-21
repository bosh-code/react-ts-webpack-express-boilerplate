import React from 'react'
import { render } from 'react-dom'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './components/App'

const store = configureStore({
    reducer: reducers,
    });

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('app')
  )
})
