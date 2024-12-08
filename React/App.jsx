import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ContentBox from './components/ContentBox';

function App(){
  const [view, setView] = useState('home'); 

  return (
    <div>
      <Header />
      <Sidebar setView={setView} />
      <ContentBox view={view} />
      <Footer />
    </div>
  );
};

export default App;
