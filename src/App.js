import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import {Shop} from './component/Shop';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './component/Cart';
import Login from './component/Login';
import Footer from './component/Footer';




function App() {
  return (

    <Router>
         <div className="App">
         
         

      
          <Switch>

          <Shop>
          <Nav/>
          
            <Route exact path="/" component={Home} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Login" component={Login} />
          </Shop>

          </Switch>
          </div>

          <Footer/>
    </Router>

   
  );
}

export default App;
