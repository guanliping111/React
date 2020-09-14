import React from 'react'; 
import DragAble1, {WithDragAble}from './DragAble1';
import { Drag1 } from './useDrag';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <DragAble1 />
      <WithDragAble />
      <Drag1 />
    </div>
  );
}

export default App;
