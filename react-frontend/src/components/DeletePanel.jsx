import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import HeaderComponent from "./HeaderComponent";
// import { confirmAlert } from 'react-confirm-alert'; 
// import 'react-confirm-alert/src/react-confirm-alert.css'

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
        // confirmAlert({
        //     title: 'Confirm to submit',
        //     message: 'Are you sure to do this.',
        //     buttons: [
        //         {
        //             label: 'Yes',
        //             onClick: () => {EmployeeService.deleteEmployee(id).then(res => {
        //                 this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });

        //             });}
        //         },
        //         {
        //             label: 'No',
        //             onClick: () => alert('Click No')
        //         }
        //     ]
        // })
        var r = window.confirm("Are you sure you want to Delete this record");
        
        if (r === true) {
            
            EmployeeService.deleteEmployee(id).then(res => {
                this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
                
            });
            // alert('Employee Deleted Successfully');
        }
        else {
            alert('Employee not Deleted');
        }
       
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
