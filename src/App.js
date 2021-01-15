import React,{ useState} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Chat from "./Chat";
import Login from "./Login";
// const [user,setUser] =useState(null);
// const [state,dispatch] = useStateValue
import {useStateValue} from "./StateProvider";

function App() {
  const [{user},dispatch] = useStateValue();
  // const [user,setUser] =useState();
  return (
    <div className="app">
        <Router>
        {! user? (
        <Login/>
    
        ):(
          <>
          <Header/>
          <div className="app_body">
            {/* Sidebar */}
            <Sidebar/>

            {/* React-routet -> Chat scren */}
            <Switch>
            <Route path="/room/:roomId">

              <Chat/>

            </Route>


            </Switch>

          </div>
          </>
        )}
          </Router>
    </div>
  );
}

export default App;

