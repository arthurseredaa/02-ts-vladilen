import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { TodosPage } from "./pages/TodosPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="app">
          <Switch>
            <Route path="/" exact component={TodosPage} />
            <Route path="/about" exact component={AboutPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
