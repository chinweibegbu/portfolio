import '../styles/App.css';
import { Route, Routes } from "react-router-dom";

import TitleBar from './common/TitleBar.js';
import Footer from './common/Footer.js';
import Landing from './pages/Landing.js';
import Designer from './pages/Designer.js';
import Developer from './pages/Developer.js';
import Volunteer from './pages/Volunteer.js';
import PageNotFound from './common/PageNotFound.js';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <TitleBar />
      <Routes>
        <Route exact path="/" component={Landing} />
        <Route path="/designer" component={Designer} />
        <Route path="/developer" component={Developer} />
        <Route path="/volunteer" component={Volunteer} />
        <Route component={PageNotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
