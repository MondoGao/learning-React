// import React from 'react';
// import ReactDOM from 'react-dom';


// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';

import {AppContainer} from 'react-hot-loader';
//
// import App from './App';
//
// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       {Component}
//     </AppContainer>,
//     document.getElementById('app')
//   );
// };
//
// render(
//   <App/>
// );
//
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App)
//   });
// }

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)