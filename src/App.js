
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddDish from './components/addDish';
import Admin from './components/admin';
import EditDish from './components/editDish';
import Dish from './components/user';
// import Menu from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <main className="container" style={{ maxWidth: '100%', margin: 0, padding: '0' }}>
        {/* <Menu /> */}
        <Router>
          <Route exact path="/" component={Dish} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/dishes/add" component={AddDish} />
          <Route exact path="/dishes/edit/:id" component={EditDish} />
          <Route exact path="/user" component={Dish} />

        </Router>


      </main>
    </div>
  );
}

export default App;
