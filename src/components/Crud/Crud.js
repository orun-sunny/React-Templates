import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Crud = () => {
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",


    })
    return (
        <div>
            <h1>crud......</h1>

            <div className="container">
                <div className="row">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text"
                                          value={formData.name}
                                          onChange={(e) => setFormdata({...formData, name: e.target.value})}
                                          placeholder="Enter Your full name"/>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          value={formData.password}
                                          onChange={(e) => setFormdata({...formData, password: e.target.value})}

                                          placeholder="Password"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mobile number</Form.Label>
                            <Form.Control type="text"
                                          value={formData.mobile}
                                          onChange={(e) => setFormdata({...formData, mobile: e.target.value})}

                                          placeholder="Text"/>
                        </Form.Group>
                        {/*<Form.Group className="mb-3" controlId="formBasicPassword">*/}
                        {/*    <Form.Label>Mobile number</Form.Label>*/}
                        {/*    <Form.Control type="password" placeholder="Password"/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                        {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                        {/*</Form.Group>*/}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>


                </div>


            </div>


        </div>
    );
};

export default Crud;