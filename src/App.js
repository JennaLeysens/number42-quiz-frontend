import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import AnswerForm from "./pages/AnswerForm";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { getUserWithStoredToken } from "./store/User/actions";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Round from "./pages/Round";
import QuizForm from "./pages/QuizForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/quiz/:id" component={Round} />
        <Route path="/answers" component={AnswerForm} />
        <Route path="/quiz" component={QuizForm} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
