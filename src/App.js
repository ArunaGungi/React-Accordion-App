import React,{useState, useEffect} from "react";
import Data from "./Data";
import "./App.css";

function App() {

  const url = "https://jsonplaceholder.typicode.com/posts";

  const [showData, setShowData] = useState([]);
  const loadData = () => {
    fetch(url, {
      method:"GET",
    }).then((res) => res.json())
    .then(result => {
        if(result) {
          setShowData(result);
      }}
    ).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    loadData();
  },[]);

  return (
    <div className="container">
      <h1 className="card" style={{textAlign:"center", height:"100px", justifyContent:"center",
          display:"flex", lineHeight:"100px", color:"white", backgroundColor:"orangered"}}>  
          React Accordian
      </h1>
      <div className="row">
        {showData.map((item,index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <Data title={item.title} body={item.body}/>
          </div>
        ))}
      </div>
      <h1>{JSON.stringify(showData)}</h1>
    </div>
  );
}

export default App;
