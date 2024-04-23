import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, click } from "../../redux/actions";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import classes from "./UserRegisterPage.module.css";

const UserRegisterPage = () => {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.userReducer);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [validated, setValidated] = useState(false);

  const formValue = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = form;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z]+$/;
    if (!emailPattern.test(email) || !namePattern.test(name)) {
      return alert("Please ,fill in all fields");
    }
    dispatch(addUser(form));
    setValidated(true);
  };

  return (
    <div className={classes.formPage}>
      <span>{title}</span>
      <button onClick={() => dispatch(click())}>+</button>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="First name"
              defaultValue=""
              onChange={(e) => formValue(e)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>E-mail</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@gmail.com"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => formValue(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please write correct email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => formValue(e)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" onClick={handleSubmit}>
          Submit form
        </Button>
      </Form>
    </div>
  );
};

export default UserRegisterPage;
