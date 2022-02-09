import React from 'react';
import { Link } from "react-router-dom";
import careerdata from "../careerdata/careerdata"

const careerlist = () => {
    const careerlist = careerdata.map(career => {
      return (
        <div key={career.id}>
          <h3>
            <Link to={`/Jobapplay/${career.id}`}>{career.name}</Link>
          </h3>
          <p>Price: ${career.price}</p>
          <hr />
        </div>
      );
    });
  
    return (
      <>
        <h1>Products Page</h1>
        {careerlist}
      </>
    );
  };
export default careerlist;