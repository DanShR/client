import React from 'react';
import axios from 'axios';

////require('dotenv').config()

function App() {

  const onClick = () => {
    axios.get('/api')
      .then( (resp) => console.log(resp.data)) 
      .catch( (error) => console.log(error));
  };

  return (
    <div className="App">
      <button onClick={onClick}>click me please</button>
    </div>
  );
}

export default App;
