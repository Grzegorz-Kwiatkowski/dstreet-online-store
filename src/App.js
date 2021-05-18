import './App.scss';
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
