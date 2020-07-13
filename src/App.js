import React from 'react';
import axios from 'axios';

////require('dotenv').config()

function App() {
const URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3001' : 'http:178.170.221.190';

  const onClick = () => {
    console.log(process.env.REACT_APP_API_URL);
    console.log(process.env.NODE_ENV);
    
    axios.get('/api')
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
