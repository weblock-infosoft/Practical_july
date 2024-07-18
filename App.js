// App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import MainNavigation from './Navigation/MainNavigation';


const App = () => {
  return (
    <RecoilRoot>
      <MainNavigation />
    </RecoilRoot>
  );
};

export default App;
