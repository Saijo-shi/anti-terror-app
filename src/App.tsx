import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabContent from './components/TabContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Мое приложение
      </header>
      <section>
        <TabContent />
      </section>
    </div>
  );
}

export default App;
