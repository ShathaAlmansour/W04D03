import React from 'react';
import {useState} from 'react';
import {  Route , Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Cards from "./components/Cards";
import Card from "./components/Card";
import Error404 from "./components/Error404";
// import Favo from "./component/Favo";

const App = () => {
  // const [search, setSearch] = useState("");
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
         <Route exact path="/Contact" component={Contact} />
        {/* <Route exact path="/Cards" component={Cards} /> */}
        <Route exact path="/Card/:id" component={Card} />
        {/* <Route exact path="/Favo" component={Favo} /> */}
        <Route path="*" component={Error404} /> 
      </Switch>
    </>
  );
}
export default App;