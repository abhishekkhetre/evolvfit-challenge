import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import img1 from "../img/dc_fat.jpg";
import img2 from "../img/eggs_protein.jpg";
import img3 from "../img/grains_carb.jpg";
import img4 from "../img/yoga.jpg";
import img5 from "../img/gym.jpg";
import img6 from "../img/walk.jpg";

const Dish = () => {
  const [dishes, setDish] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    loadDishes();
  }, []);

  const loadDishes = async () => {
    const result = await axios.get("http://localhost:3003/dishes");
    setDish(result.data.reverse());
  };

  return (
    <>
  <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{width:"100%"}}>
  <ReactBootStrap.Navbar.Brand href="/">EVOLV FIT</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Brand href="#" style={{fontFamily:"cursive", marginLeft:"40px"}}>Hey,</ReactBootStrap.Navbar.Brand>
 
      <ReactBootStrap.Nav.Link eventKey={2} href="/Login">
          <ReactBootStrap.Button style={{marginLeft:"950px"}} variant="danger">
           ADMIN Login 
            </ReactBootStrap.Button>  
      </ReactBootStrap.Nav.Link>
</ReactBootStrap.Navbar>
    
<ReactBootStrap.Carousel
        className="mx-auto"
        style={{ height: "600px", width: "100%" }}
      >
        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src={img1}
            alt="Fats rich food"
          />

          <ReactBootStrap.Carousel.Caption>
            <h3 className="text-dark bg-white">DARK CHOCOLATE</h3>
            <p className="text-dark bg-white">Fats rich food.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>

        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src={img2}
            alt="Protein rich food"
          />

          <ReactBootStrap.Carousel.Caption>
            <h3 className="text-dark bg-white">EGGS</h3>
            <p className="text-dark bg-white">Proteins Rich food.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px" }}
            src={img3}
            alt="Carb rich food"
          />

          <ReactBootStrap.Carousel.Caption>
            <h3 className="text-dark bg-white">GRAINS</h3>
            <p className="text-dark bg-white">Carbohydrates rich food.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
      </ReactBootStrap.Carousel>

      <div>
        <h1 style={{ textAlign: "center", maxWidth: "100%", marginTop:"1%" }}>DISHES WITH DETAILS</h1>
        <input style={{width:'100%', textAlign:"center", marginTop:'1%'}}
          type="text"
          placeholder="Search..."
          onChange={event => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div
        className="container"
        style={{ textAlign: "center", maxWidth: "100%" }}
      >
        {/* <div className="py-4"> */}
        <table className="table border shadow" style={{ width: "100%" }}>
          <thead className="thead-danger">
            <tr className="bg-danger text-white">
              <th scope="col">#</th>
              <th scope="col">Dish Name</th>
              <th scope="col">Protein</th>
              <th scope="col">Carbs</th>
              <th scope="col">Fats</th>
              <th scope="col">Calories</th>
            </tr>
          </thead>
          <tbody style={{ color: "danger", backgroundColor: "white" }}>
            {dishes
              .filter(dish => {
                if (searchTerm == "") {
                  return dish;
                } else if (
                  dish.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return dish;
                }
              })
              .map((dish, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{dish.name}</td>
                  <td>{dish.protein}</td>
                  <td>{dish.carbs}</td>
                  <td>{dish.fats}</td>
                  <td>{dish.calories}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    

      <ReactBootStrap.CardGroup style={{ marginBottom: "3%", marginTop: "1%", color: "dark" }}>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Img variant="top" src={img4} />
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title
              style={{ color: "black", textAlign: "center" }}
            >
              YOGA
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text style={{ color: "black" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </ReactBootStrap.Card.Footer>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Img variant="top" src={img5} />
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title
              style={{ color: "black", textAlign: "center" }}
            >
              GYM
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text style={{ color: "black" }}>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </ReactBootStrap.Card.Footer>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Img variant="top" src={img6} />
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title
              style={{ color: "black", textAlign: "center" }}
            >
              WALKING
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text style={{ color: "black" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </ReactBootStrap.Card.Footer>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
    </>
  );
};

export default Dish;
