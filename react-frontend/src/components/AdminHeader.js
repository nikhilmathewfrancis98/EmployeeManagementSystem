import React, { Component } from 'react'

class AdminHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="App-header">
                <header >
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark admin-header">
                        <div className="title"><a href="https://www.google.com" className="navbar-brand" style={{fontSize:"20px"}}>Employee Management System</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default AdminHeader
