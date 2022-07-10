import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import HeaderComponent from "./HeaderComponent";

class DeletePanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        // this.addEmployee = this.addEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }
    // viewEmployee(id) {
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    // editEmployee(id) {
    //     this.props.history.push(`/add-employee/${id}`);
    // }
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }



    render() {
        return (
            <>
               <HeaderComponent />
                <div>
                    <br></br>
                    <br></br>
                    <div className="container">
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Employee Id</th>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Employee Department</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td> {employee.id}</td>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName}</td>
                                        <td> {employee.emailId}</td>
                                        <td> {employee.department}</td>
                                        <td>
                                           
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                            
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
</div>
</div>
            </div>
</>

        )
    }
}

export default DeletePanel
