import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import Table from "./components/Table";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    
    <div>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/users" component={Table} />
          <Route path="/" component={UserForm} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;