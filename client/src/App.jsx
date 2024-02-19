import React from 'react';
import Navigation from './Components/Navigation';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Header from './Components/Header';

const App = () => {
  return (
    <>
      <Header/>
      <main style={{display: "flex" , justifyContent:"space-around"}}>
        <Navigation style={{ flex: "1", minWidth: "25%" }} />
        <Content style={{ flex: "2", minWidth: "50%" }} />
        <Sidebar style={{ flex: "1", minWidth: "25%" }} />
      </main>
    </>
  );
};

export default App;
