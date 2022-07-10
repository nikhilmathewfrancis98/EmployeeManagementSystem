import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class HeaderComponent extends Component {
   
    
    render() {
        return (
            <div>
                <header className="fixed-header">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                        <div><a href="https://www.google.co.in" className="navbar-brand" style={{ fontSize: "20px"}}>Employee Management System</a></div>
                        <span className="headerul">
                            <ul>
                                <span>  <li><Link style={{ textDecoration: 'none' }} to="/employees">Home</Link></li></span>
                                <span>  <li><Link style={{ textDecoration: 'none' }} to="/add-employee/_add" >Add</Link></li></span>
                                <span>   <li> <Link style={{ textDecoration: 'none' }} to="/updatepanel">Update</Link></li></span>
                                <span>   <li><Link style={{ textDecoration: 'none' }} to="/deletepanel">Delete</Link></li></span>
                                <span>   <li><Link style={{ textDecoration: 'none' }} to="/viewpanel">View</Link></li></span>
                                
                                </ul>
                            
                        </span>
                        <span className="headerul_sec">
                            <ul>
                                <span>  <li><Link style={{ textDecoration: 'none' }} to="/">Logout</Link></li></span>
                            </ul>

                        </span>
                        </nav>
                   
                    
                </header>
               
            </div>
        )
    }
}

export default HeaderComponent
