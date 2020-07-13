import React from 'react';
import axios from 'axios';

////require('dotenv').config()

function App() {
  const onClick = () => {
    console.log(process.env.REACT_APP_API_URL);
    axios.get(process.env.REACT_APP_API_URL + '/api_api')
      .then( (resp) => console.log(resp.data)) 
      .catch( (error) => console.log(error));
  };

  return (
    <div className="App">
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
