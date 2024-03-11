import React from 'react';
import Navigation from './Components/Navigation';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Header from './Components/Header';
import Layout from './Components/Layout';


const App = () => {
  return (
    <div className="h-screen grid grid-cols-10 grid-rows-10 gap-4">
      <div className="row-span-2 col-span-10 bg-orange-500">Header</div>
      <div className="row-span-7 col-span-1 bg-teal-500">Nav</div>
      <div className="row-span-7 col-span-7 bg-red-500">Content</div>
      <div className="row-span-7 col-span-2 bg-green-500">Refer</div>
      <div className="row-span-1 col-span-10 bg-blue-500">Footer</div>
    </div>
  );
}

export default App;

