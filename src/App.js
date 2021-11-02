import React from 'react';
import {useState} from 'react';
import {  Route , Switch ,  } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Cards from "./component/Cards";
import Card from "./component/Card";
import Error404 from "./component/Error404";
import Favo from "./component/Favo";


const App = () => {
  const [search, setSearch] = useState("");
 
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Cards" component={Cards} />
        <Route exact path="/Card/:id" component={Card} />
        <Route exact path="/Favo" component={Favo} />
        <Route path="*" component={Error404} />
      </Switch>
    </>
  );
}

export default App;