import Adduser from "./Components/Adduser";
import Alluser from "./Components/Alluser";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";
import {BrowserRouter, Route, Switch} from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/all" component={Alluser}/>
   <Route exact path="/add" component={Adduser}/>
   <Route exact path="/edit/:id" component={EditUser}/>
   <Route component={NotFound}/>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
