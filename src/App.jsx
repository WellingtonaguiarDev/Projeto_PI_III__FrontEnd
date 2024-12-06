import { BrowserRouter as Router} from 'react-router-dom';
import {AppRoutes} from "./routes/index.js";
import {Navbar} from "./components/index.js";
import "./App.css";

function App() {

  return (
      <>
        <Router>
          <Navbar/>
          <AppRoutes />
        </Router>
      </>

  );
}

export default App;