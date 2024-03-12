import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';




const App = () => {
  return (
      <div className="grid grid-cols-10 grid-rows-10 gap-2 h-screen bg-trueGray-500 p-5">
      <div className="row-span-2 col-span-10 ">
        <Header/>
      </div>
      <div className="row-span-7 col-span-1 "><Navigation/></div>
      <div className="row-span-7 col-span-7 bg-red-500">Content</div>
      <div className="row-span-7 col-span-2 bg-green-500">Refer</div>
      <div className="row-span-1 col-span-10 bg-blue-500">Footer</div>
    </div>

  );
}

export default App;

