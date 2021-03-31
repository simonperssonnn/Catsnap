
import './App.css';
import ManageItems from './pages/admin/ManageItems';
import CreateItems from './pages/admin/CreateItem';
import UpdateItems from './pages/admin/UpdateItem';

import Nav from './pages/Nav';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        
        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/manage-items" component={ManageItems} />
          <Route path="/create-items" component={CreateItems} />

          {/* 
                Make sure to specify the parameter ":id" in the URL
                This will ensure that UpdatePun.js gets hold of the punId, through the variable "match"
            */}
          <Route path="/update-items/:id" component={UpdateItems} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
