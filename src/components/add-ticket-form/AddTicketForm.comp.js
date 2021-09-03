import React from "react";
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import "./add-ticket-form.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmData,
  frmDataErr,
}) => {
  return (
    <Jumbotron className="mt3 add-new-ticket">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              onChange={handleOnChange}
              //minLength="3"
              maxLength="100"
              placeholder="Ente Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataErr.subject && "Subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};
AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
  frmDataErr: PropTypes.object.isRequired,
};
