//imports needed
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
//unhighlighted imports I ain't using
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Read } from './components/read';
import { Create } from './components/create';


class App extends React.Component {

   //render method enabling me to use html
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
          
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
           {/*Re routed page to correct destination*/}
            <Route exact path="/" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
