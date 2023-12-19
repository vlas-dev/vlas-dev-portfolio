import { HashRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AnimatedRoutes/>
      </div>
    </Router>
  );
}

export default App;
