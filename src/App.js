import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AnswerForm from "./pages/AnswerForm";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/answers" component={AnswerForm} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
