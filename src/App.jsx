import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

const NotFound = () => <div>Page Not Found</div>;

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mx-auto p-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> {/* 404 fallback */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
