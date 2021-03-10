import Sidebar from "./components/Sidebar/Sidebar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Login from "./components/User/Login";
import Add from "./components/User/AddUser";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/equipe" exact component={Equipe} />
        <Route path="/login" exact component={Login} />
        <Route path="/add" exact component={Add} />
      </Switch>
    </Router>
  );
}
