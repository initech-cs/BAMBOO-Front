import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import AlgoDetail from "./pages/AlgoDetail";
import AlgoPage from "./pages/AlgoPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import CreatePage from "./pages/Create";
import DeveloperPage from "./pages/DeveloperPage";
function App(props) {
  let user2 = {
    isAuthenticated: true,
  };
  console.log(" id ", props);
  // const [user, setUser] = useState(
  //   props.location.state ? props.location.state.user : null
  // );

  const ProtectedRoute = (props) => {
    if (user2.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return (
    <Switch>
      <Route path="/" exact component={(props) => <MainPage {...props} />} />
      {/* <Route path="/" exact component={MainPage} /> */}
      <Route
        path="/login"
        exact
        component={(props) => <LoginPage {...props} />}
      />
      {/* this handle event that switch user to Login pages */}
      <Route
        path="/question"
        exact
        component={(props) => <AlgoPage {...props} />}
      />
      {/* this handle event that switch user to well, .. Jobs page */}
      <Route path="/dev" exact component={(props)=><DeveloperPage {...props}/>} />
      {/* this handle event that switch user to well, .. Jobs page */}
      <Route path="/signup" exact component={SignupPage} />
      {/* this handle event that switch user to well, .. Jobs page */}
      <Route path="/create" exact component={CreatePage} />
      {/* this handle event that switch user to well, .. Jobs page */}
      <ProtectedRoute
        path="/Algo/:id"
        render={(props) => <AlgoDetail {...props} />}
      />
    </Switch>
  );
}

export default App;
