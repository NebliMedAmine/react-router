import React from 'react'

import { Data } from "./Data";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


const Description = () => {
  const { id } = useParams();
  console.log(id)
  return (
  
        <div>
          <center>
          <div className="video"><h1>{Data.find((movie) => movie.id === Number(id)).description}</h1></div>
          <h1><iframe src={Data.find((movie) => movie.id === Number(id)).trailer }width="560" height="315"title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe></h1>
            <Link to="/"  style={{ textDecoration: "none" }}><button className='home'>Home</button></Link>
            </center>
        </div>
      )}
export default Description;
