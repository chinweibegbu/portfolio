import '../styles/App.css';
import { Route, Routes } from "react-router-dom";

import TitleBar from './common/TitleBar.js';
import Footer from './common/Footer.js';
import Landing from './pages/Landing.js';
import Designer from './pages/Designer.js';
import DesignPage from './pages/DesignPage.js';
import Developer from './pages/Developer.js';
import Volunteer from './pages/Volunteer.js';
import PageNotFound from './common/PageNotFound.js';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <TitleBar />
      <div className='Main'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/designer/:projectName" element={<DesignPage />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/:unknown" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
