import React from 'react';
import Header from './components/Header';
import AppFooter from './components/AppFooter';
import ToDoList from './components/ToDoList';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';
import './App.css';

function App() {
  return (
    <Container>
      <div className="App">
        <Header />
        <ToDoList />
        <AppFooter />
      </div>
    </Container>
  );
}

export default App;
