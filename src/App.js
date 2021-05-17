import './App.scss';
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/header/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>

  );
}

export default App;
