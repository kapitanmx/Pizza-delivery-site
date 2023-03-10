import React from 'react';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import OrderStatus from './components/OrderStatus';
import UserPanel from './components/UserPanel';
import Footer from './components/Footer';
// Styles
import { GlobalStyle } from './GlobalStyle';
// Routers
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  const links = [`Home`, `Sklep`, `Uzytkownik`];
  const footerContent = [
    {
      "title" : "Informacje dodatkowe",
      "info" : "1234",
      "link" : "",
      "linkTitle" : "1234"
    },
    {
      "title" : "Kontakt",
      "info" : "1234",
      "link" : "",
      "linkTitle" : "1234"
    },
  ]
  return (
    <Router>
        <Header links={links} />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                heroTitle='PizzaDelivery'
                heroSubtitle='Najlepszy portal do zamawiania pizzy'
                heroText="tekst"
              />
            }
          />
          <Route
            path='/home'
            element={
              <Home
                heroTitle='PizzaDelivery'
                heroSubtitle='Najlepszy portal do zamawiania pizzy'
                heroText="tekst"
              />
            }
          />
          <Route
            path='/sklep'
            element={
              <Marketplace
                heroTitle='Tutaj znajdziesz wszystkie rodzaje swoich ulubionych potraw'
                heroText="tekst"
              />
          }
          />
          <Route
            path='/uzytkownik'
            element={<UserPanel />}
          />
        </Routes>
        <Footer info={footerContent}/>
        <GlobalStyle />
    </Router>
  );
}

export default App;
