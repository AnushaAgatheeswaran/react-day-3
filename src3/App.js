import React , {Component} from 'react';
import BatMan from './components/batman.component'
import IronMan from './components/ironman.component'
import Spiderman from './components/spiderman.component'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import NotFoundComponent from './components/notfound.component';

let defaultQuantity  = 500

class MainApp extends Component{
render(){
  return (<div>
    <h1>Routing App</h1>
    <hr></hr>

    <BrowserRouter>
    <ul>
      <li><Link to="/">BatMan</Link></li> {/*  LINK to used to not refresh the whole page */}
      <li><Link to="/spiderman">Spiderman</Link></li>
      <li><Link to={"/ironman/"+defaultQuantity}>IronMan</Link></li>
      <li><Link to="/badman">BadMan</Link></li>

    </ul>
    <Switch>
    <Route path ="/" exact component ={ BatMan }/> {/* exact to not get BatMan recursively in all pages */}
    <Route path ="/spiderman" component ={ Spiderman }/>
    <Route path ="/ironman/:qty" component ={ IronMan }/>   {/*qty is a paramter */} 
    <Route component ={ NotFoundComponent }/>
    </Switch>
      </BrowserRouter>
  </div>)
}

}

export default MainApp;