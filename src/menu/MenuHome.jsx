import { useState } from "react";
import "./Menu.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MenuHome = () => {
  
    const [noodles, setNoodles] = useState([]);
  useEffect(() => {
    fetch("./menu.JSON")
      .then((data) => data.json())
      .then((data) => setNoodles(data));
  }, []);
  return (
    <div>
      <h1 className="m-5 p-10 text-yellow-500 font-bold text-6xl text-center">
        Discover Our Menu
      </h1>
      <div className="grid grid-cols-3 ">
        {noodles.map((noodle) => (
          <div key={noodle.id} className="card w-96 bg-base-100 shadow-xl m-6">
            <figure className="">
              <img src={noodle.img} alt="noodles" className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{noodle.name}</h2>
              <p>Price:{noodle.price}</p>
             
              <button className="btn btn-neutral text-yellow-500">
              <Link to="/ourmenu"> Read more...</Link>
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuHome;
