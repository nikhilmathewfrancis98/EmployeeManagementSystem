import React, {useState, useEffect } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import EmployeeService from '../services/EmployeeService';
import AdminHeader from "./AdminHeader";
import {useHistory} from "react-router-dom";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {

    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history=useHistory();
    const [errorMsg, setErrorMsg] = useState("");
    // const errRef = useRef(initialValue);
    // const userRef = useRef(initialValue);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrorMsg('');
    },[])
    
    function reset() {
        setUsername("");
        setPassword("");
    }
     function sendLoginRequest() {
         console.warn(username, password);
         EmployeeService.getAdminAuth(username).then((res) => {
            if (res) {
                setUsername('');
                setPassword('');
                history.push('/employees');
            } else if (res.status === 404){
                setErrorMsg("Invalid username or password");
                // errRef.current.focus();
            }
             
        });
        
    }
    return (
        <>
            
            <AdminHeader/>
            
            <br/>
            <br />
           
            <Container>
                {/* <p className={errorMsg ? "errorMsg" : "offscreen"} aria-live="assertive">{errorMsg}</p> */}
            
                <Card bg="dark" text="light" style={{ width: "700px" }} className="col-md-8 offset-md-2 justify-content-center">
                    <Card.Header className="col-md-5 offset-md-4"><h2>Admin Login</h2></Card.Header>
                    <Card.Body style={{ height: "350px"}}>
                        <Row className="justify-content-center mt-5 crd">
                            <Col md="8" lg="6">

                                <Form.Group className="mb-3 form" controlId="username" >
                                    <Form.Label className="fs-4">Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        size="lg"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}

                                        required
                                    />

                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md="8" lg="6">
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="fs-4">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        size="lg"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required="required"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <>
                            {errorMsg ? (
                                <Row className="justify-content-center mb-4">
                                    <Col md="8" lg="6">
                                        <div className="" style={{ color: "red", fontWeight: "bold" }}>
                                            {errorMsg}
                                        </div>
                                    </Col>
                                </Row>
                            ) : (
                                <></>
                            )}
                        </>
                        <Row className="justify-content-center">
                            <Col
                                md="8"
                                lg="6"
                                className="mt-2 d-flex flex-column gap-5 flex-md-row justify-content-md-between"
                            >
                                <Button
                                    id="submit"
                                    type="button"
                                    size="lg"
                                    onClick={() => sendLoginRequest()}
                                >
                                    Login
            </Button>
                                <Button
                                    variant="secondary"
                                    type="reset"
                                    size="lg"
                                    onClick={() => reset()}>
                                    Reset
                  </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                
            </Container>
        </>
    );
};

export default Login;