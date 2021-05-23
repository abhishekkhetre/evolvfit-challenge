import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from "react-bootstrap"
import { Link } from "react-router-dom";

const Home = () => {
  const [dishes, setDish] = useState([]);

  useEffect(() => {
    loadDishes();
  }, []);

  const loadDishes = async () => {
    const result = await axios.get("http://localhost:3003/dishes");
    setDish(result.data.reverse());
  };

  const deleteDish = async id => {
    await axios.delete(`http://localhost:3003/dishes/${id}`);
    loadDishes();
  };

  return (
    <>
   <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{width:"100%"}}>
  <ReactBootStrap.Navbar.Brand href="/user">EVOLV FIT</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Brand href="#" style={{fontFamily:"cursive", marginLeft:"40px"}}>Welcome, Admin</ReactBootStrap.Navbar.Brand>
 
      <ReactBootStrap.Nav.Link eventKey={2} href="/">
          <ReactBootStrap.Button style={{marginLeft:"880px"}} variant="danger">
            Log Out 
            </ReactBootStrap.Button>  
      </ReactBootStrap.Nav.Link>
</ReactBootStrap.Navbar>
    

    <div className="container" style={{textAlign: 'center', maxWidth: '100%'}}>
      <div className="py-3">
        <h1 style={{marginBottom:'2%'}}>ADMIN DASHBOARD</h1>
        <table className="table border shadow" style={{width:"100%"}} >
          <thead className="thead-danger">
            <tr className="bg-danger text-white">
              <th scope="col">#</th>
              <th scope="col">Dish Name</th>
              <th scope="col">Protein</th>
              <th scope="col">Carbs</th>
              <th scope="col">Fats</th>
              <th scope="col">Calories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish, index) => (
              <tr className="bg-white">
                <th scope="row">{index + 1}</th>
                <td>{dish.name}</td>
                <td>{dish.protein}</td>
                <td>{dish.carbs}</td>
                <td>{dish.fats}</td>
                <td>{dish.calories}</td>

                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/dishes/edit/${dish.id}`}
                    >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-outline-danger"
                    onClick={() => deleteDish(dish.id)}
                    >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-danger btn-lg btn-block" variant='light btn-outline-light' to={"/dishes/add"}>
          Add Dish
        </Link>
      </div>
    </div>
    </>
  );
};

export default Home;
