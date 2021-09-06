
import { BrowserRouter as Router } from "react-router-dom";
import {AuthProvider} from "./auth/useAuth"
import AppRouter from './router/AppRouter';


function App() {

  return (
    <AuthProvider>
      <Router>
        <AppRouter />
      </Router>
    </AuthProvider>
  )
}

export default App;
