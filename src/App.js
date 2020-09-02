import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import AnswerForm from "./pages/AnswerForm";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import { getUserWithStoredToken } from "./store/User/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/answers" component={AnswerForm} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
