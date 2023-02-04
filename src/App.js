import React from 'react';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import Offer from './components/Offer';
import OrderStatus from './components/OrderStatus';
import UserPanel from './components/UserPanel';
import Footer from './components/Footer';
// Styles
import GlobalStyle from './GlobalStyle';
// Routers
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  const links = [`Home`, `Sklep`, `Uzytkownik`];
  return (
    <Router>
        <Header links={links} />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/sklep'
            element={<Marketplace />}
          />
          <Route
            path='/uzytkownik'
            element={<UserPanel />}
          />
        </Routes>
        <Footer />
        <GlobalStyle />
    </Router>
  );
}

export default App;
