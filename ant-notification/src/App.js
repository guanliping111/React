import React from 'react';
//import Notification from './Notification';
import logo from './logo.svg';
import notification from './Notification';
import './App.css';

function App() {
  return (
    <div className="App">
       {/* <Notification>
         成功
       </Notification> */}
       <button onClick={() => {
         notification.open({
           title: 'this is a title'
         })
       }}>open</button>
       <button onClick={() => {
         notification.close()
       }}>close</button>
    </div>
  );
}

export default App;
