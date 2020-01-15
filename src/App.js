import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import ListUser from "./components/ListUser";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Provider store={store}>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/listuser" component={ListUser} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Provider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
