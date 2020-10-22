import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { getUserWithStoredToken } from "./store/User/actions";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import QuizForm from "./pages/QuizForm";
import Quiz from "./pages/Quiz";

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
        <Route path="/quizzes/:id" component={Quiz} />
        <Route exact path="/quizzes" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/quiz" component={QuizForm} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
