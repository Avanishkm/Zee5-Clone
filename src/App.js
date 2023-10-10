// import logo from './logo.svg';
import "./App.css";
import RouterContainer from "./Route/RouterContainer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <RouterContainer />
    </Router>
  );
}

export default App;
