import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Base from './components/Base';
import Header from './components/Header';
import Home from './components/Home';
import Modal from './components/Modal';
import Order from './components/Order';
import Toppings from './components/Toppings';

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  console.log(location);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Modal showModal={showModal} />
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
