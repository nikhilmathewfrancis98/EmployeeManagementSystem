import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./components/Login";
// import HeaderComponent from"./components/HeaderComponent";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdatePanel from './components/UpdatePanel';
import DeletePanel from "./components/DeletePanel";
import ViewPanel from './components/ViewPanel';


function App() {
  return (
    
        <Router>
               {/* <HeaderComponent />  */}
                
                    <Switch> 
            
                          {/* <Route path="/" exact component={ListEmployeeComponent}></Route> */}
                          <Route path="/" exact component={Login}></Route>
                         <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path="/updatepanel" component={UpdatePanel}></Route>
                         <Route path="/deletepanel" component={DeletePanel}></Route>
                          <Route path="/viewpanel" component={ViewPanel}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                    </Switch>
                
              <FooterComponent />
        </Router>
   
    
  );
}

export default App;
