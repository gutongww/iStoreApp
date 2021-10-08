import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import {Footer} from "./Components/Footer";
import Header from "./Components/Header";
import Shopping from "./Components/Shopping";



function App() {
  return (
    <div className="App">
      <Header/>
      <Shopping/>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
