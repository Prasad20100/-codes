import React from 'react';
import './ContentBox.css';

function ContentBox ({ view }) {
  function renderContent(){
    switch (view) {
      case 'home':
        return <h2>HELLO WORLD !</h2>;
      case 'about':
        return <h2>HELLO , I AM PRASAD ...</h2>;
      default:
        return <h2>Click a link in the sidebar</h2>;
    }
  };

  return <div className="content">{renderContent()}</div>;
};

export default ContentBox;
