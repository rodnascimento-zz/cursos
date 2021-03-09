import Sidebar from "./components/Sidebar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/equipe" exact component={Equipe} />
      </Switch>
    </Router>
  );
}
