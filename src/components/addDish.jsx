import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddDish = () => {
  let history = useHistory();
  const [dish, setDish] = useState({
    name: "",
    protein: "",
    carbs: "",
    fats: "",
    calories: "",
  });

  const { name, protein, fats, carbs, calories } = dish;
  const onInputChange = e => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/dishes", dish);
    history.push("/admin");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow bg-danger text-white p-5" style={{marginBottom:'38px'}}>
        <h2 className="text-center mb-5" style={{marginBottom:'6%'}}>ADD DISH DETAILS</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Dish Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter protein"
              name="protein"
              value={protein}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter fats"
              name="fats"
              value={fats}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter carbs"
              name="carbs"
              value={carbs}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter calories"
              name="calories"
              value={calories}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block btn-lg" style={{marginTop:'30px', borderRadius:'15px'}}>ADD +</button>
        </form>
      </div>
    </div>
  );
};

export default AddDish;
