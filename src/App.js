import React from 'react';
import './App.css';
import Header from './components/header/header';
import RouterComponent from './components/routers/router';

function App() {
  return (
    <React.Fragment>
      <Header />
      <RouterComponent />
    </React.Fragment>
  );
}

export default App;
