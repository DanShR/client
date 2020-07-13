import React from 'react';
import axios from 'axios';

////require('dotenv').config()

function App() {
  

  const onClick = () => {
    for (let i = 0; i < 20000; i++) {
      axios.get('/api')
      .then( (resp) => console.log(resp.data)) 
      .catch( (error) => console.log(error));
    }
  };

  return (
    <div className="App">
      <button onClick={onClick}>click me please</button>
    </div>
  );
}

export default App;
