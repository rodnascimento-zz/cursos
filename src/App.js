import Sidebar from "./components/Sidebar/Sidebar";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Suporte from "./pages/Suporte";
import Artigos from "./pages/Artigos";
import Calendario from "./pages/Calendario";
import Cursos from "./pages/Cursos";
import Login from "./components/User/Login";
import Add from "./components/User/AddUser";
import Navbar from "./components/Navbar/Navbar";
import grey from "./images/grey.jpg";

export default function App() {
  return (
    <div
      className="landing-wrapper-app"
      style={{ backgroundImage: `url(${grey})` }}
    >
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/equipe" exact component={Equipe} />
          <Route path="/cursos" exact component={Cursos} />
          <Route path="/artigos" exact component={Artigos} />
          <Route path="/calendario" exact component={Calendario} />
          <Route path="/Suporte" exact component={Suporte} />
        </Switch>
      </Router>
    </div>
  );
}
