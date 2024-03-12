import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';


const App = () => {
  return (
      <div className="grid grid-cols-10 grid-rows-10 gap-2 h-screen bg-customBlue p-5">
      <div className="row-span-2 col-span-10 ">
        <Header/>
      </div>
      <div className="row-span-7 col-span-1 "><Navigation/></div>
      <div className="row-span-7 col-span-7">Content</div>
      <div className="row-span-7 col-span-2">Refer</div>
<div className="row-span-1 col-span-10 flex justify-center items-center overflow-hidden">
  <Footer />
</div>

    </div>

  );
}

export default App;

