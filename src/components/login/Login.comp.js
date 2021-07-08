import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr></hr>
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Ente Email"
                
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                onChange={handleOnChange}
                placeholder="password"
                
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={()=>formSwitcher('signUp')}>Sign Up</a>
          <br></br>
          <a href="#!" onClick={()=>formSwitcher('reset')}>Forget Passwod</a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.prototype = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired
}