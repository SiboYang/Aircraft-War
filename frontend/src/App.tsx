import UsernamePage from "./preGame/UsernamePage";
import SelectPage from "./game/view/SelectPage";
import WaitPage from "./preGame/WaitPage";
import Menu from "./preGame/Menu";
import CreateGame from "./preGame/CreateGame";
import JoinRoom from "./preGame/JoinRoom";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <UsernamePage/>
          </Route>
          <Route path="/menu" exact>
            <Menu/>
          </Route>
          <Route path="/create" exact>
            <CreateGame/>
          </Route>
          <Route path="/join" exact>
            <JoinRoom></JoinRoom>
            </Route>
          <Route path="/room/:roomid" exact>
          </Route>
          <Route path="/join/:gameid" exact>
            <></>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
