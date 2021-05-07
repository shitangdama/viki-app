import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import localRoutes from "./routes";

import React from "react";

import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


// import remoteRoutes from "app2/routes";

const routes = localRoutes
// const routes = [...localRoutes, ...remoteRoutes]; 

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
);

export default App;
