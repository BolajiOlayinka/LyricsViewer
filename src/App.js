import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layouts/Header";
import Home from "./components/Layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "./context";
import Lyrics from './components/Tracks/Lyrics';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
