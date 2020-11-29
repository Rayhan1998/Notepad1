import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import NotepadPage from "./pages/NotepadPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <NotepadPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
