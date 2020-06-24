import React from 'react';
import './App.css';
import { Sidebar } from './components';

function App() {
  return (
    <div className="App">
        <Sidebar title="viktor" onClose={alert} />
    </div>
  );
}

export default App;
