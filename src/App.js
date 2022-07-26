import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setApiData(response.data);
      setLoading(false);
    }

    getData();
  }, [])

  const returnList = () => {
    const list = apiData.map((item) => {
      return (
        <div className="item">
          <h1><a target="_blank" href={item.url}>{item.title}</a></h1>
          <img src={item.thumbnailUrl} />
          <hr />
        </div>
      )
    })

    return list;
  }

  const loadingRender = () => {
    return (loading && <div id="loading-container"><span>Loading...</span></div>)
  }

  return (
    <div className="App">
      <div id="container">
        {loadingRender()}
        {returnList()}
      </div>
    </div>
  );
}

export default App;
