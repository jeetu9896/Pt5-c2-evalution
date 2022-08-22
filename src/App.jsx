import Slide from "./Components/Slide";
import "./App.css";
import React, { useEffect, useState } from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides

export default function App() {
  const [data,setdata] = useState([])
  const [page,setpage] = useState(1)
// const [todalpage,settotalpage] =useState(0)
  const getdata = () =>{

    fetch(`https://slides-app-220822.herokuapp.com/slides?_page=${page}&_limit=1`)
    .then((res) =>     res.json())
    .then((res) =>  setdata(res))
    .catch((err)=>console.log(err));
    // console.log(data)
  }
  useEffect(()=>{
    getdata()
  },[page])
  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
      {
        data.map((item) => {
          return <Slide key={item.id} title={item.title} description={item.description} />
        })
      }
      <button data-cy="prev" onClick={()=> setpage(page-1)} disabled={page===1}>Prev</button>
      <button data-cy="next" onClick={() => setpage(page+1) }  disabled={page===5}>Next</button>
    </div>
  );
}
