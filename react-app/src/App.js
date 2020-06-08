import React, {Component} from 'react';

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Menu from './components/menu/menu'
import Routes from './router/routes'

class App extends Component {
  render() {
    return (
      <section className="App">
        <Menu/>
        <Routes/>
      </section>
    )
  }
}



export default App;
