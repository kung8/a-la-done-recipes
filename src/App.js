import React, { useState } from 'react';
import Dashboard from './_components/Dashboard/_Dashboard';
import MainPage from './_components/MainPage/_MainPage';
import './_scss/_main.scss';

function App() {
  const [route, updateRoute] = useState('/');

  return (
    <div className="app flex align-ctr">
      <Dashboard route={route} updateRoute={updateRoute} />
      <MainPage route={route} updateRoute={updateRoute} />
    </div>
  );
}

export default App;