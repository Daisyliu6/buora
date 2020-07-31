import React from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import store from './store';
import { GlobalStyleFont } from './common/statics/iconfont/iconfont';


function App() {
  return (
   <Provider store={store}>
    <GlobalStyle />
    <GlobalStyleFont />
    <Header />
   </Provider>
  );
}

export default App;
