import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SearchContextProvider } from "./State/Context/SearchContext";

import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";
import LandingPage from "./Views/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
// import LoginPage from "./Views/Login/LoginPage";

function App() {
  return (
    <SearchContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/form" component={Form}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
          {/* <Route exact path="/login" component ={LoginPage}/> */}
        </Switch>
      </Router>
    </SearchContextProvider>
  );
}

export default App;
