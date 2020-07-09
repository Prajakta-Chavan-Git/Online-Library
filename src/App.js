import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Books from "./Components/books.components";
import MyBookList from "./Components/my-book-list.components";
import Login from "./Components/login.components";
import Register from "./Components/register.components";
import AddBook from "./Components/add-book.components";
import RetunBook from "./Components/return-book.components";

import logo from "./Books-logo.jpg";

function App() {
  return (
    <Router>
    <div className="container">
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="https://OnlineLibrary.com" target="_blank" rel="noopener noreferrer">
      <img src={logo} width='40' height='40' alt='OnlineLibrary.com' />
    </a>
    <Link to="/" className="navbar-brand"> Online Library</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">All Books</Link>
        </li>
        <li className="navbar-item">
          <Link to="/mybooklist" className="nav-link">My Book List</Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
      </ul>
    </div>
    </nav>
      
    
    <Route path='/' exact component={Books}/>
    <Route path='/mybooklist' exact component={MyBookList}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route path='/addbook' component={AddBook}/>
    <Route path='/returnbook/:id' component={RetunBook}/> 
    </div>
   
    </Router>
    
  );
}

export default App;
