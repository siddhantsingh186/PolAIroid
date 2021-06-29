import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
function App() {
  const[image, getImage] = useState("");
  const showChange =  () =>{
    axios.get('https:api.generated.photos/api/v1/faces?api_key=MBNqkaX00ifCjVDt3EtQSQ&order_by=random').then(res =>{
      const uri = res.data.faces[3].urls[4][512];
      uri && getImage(uri);
    }).catch(err =>{
      console.log(err.message);
    });
  }
  return (
    <div className="App">
      <h1>PolAIroid photo generator</h1>
      {image && <img src = {image} alt = "face"/>}
      <button type ='button' onClick={showChange}>Generate New Image</button>
    </div>
  );
}

export default App;
