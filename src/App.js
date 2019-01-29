import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Header />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
