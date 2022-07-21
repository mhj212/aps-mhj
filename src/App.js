import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await await axios.get('https://jsonplaceholder.typicode.com/photos')
      setApiData(response.data);
    }

    getData();
  }, [])
  return (
    <div className="App">
      <div id="container">
      {apiData.map((item) => {
        return (
          <div>
            <h1><a href={item.url}>{item.title}</a></h1>
            <img src={item.thumbnailUrl} />
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
