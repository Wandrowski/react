import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'
import { Provider } from 'react-redux'

import MainPage from './components/MainPage/MainPage'
import store from './tools/store'

ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <MainPage />
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
