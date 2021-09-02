
import { BrowserRouter as Router } from "react-router-dom";
import {ProvideAuth} from "./auth/useAuth"
import AppRouter from './router/AppRouter';


function App() {

  return (
    <ProvideAuth>
      <Router>
        <AppRouter />
      </Router>
    </ProvideAuth>
  )
}

export default App;
