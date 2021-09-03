import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";

const initFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initFrmErr = {
  subject: false,
  issueDate: false,
  detail: false,
};
export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initFrmDt);
  const [frmDataErr, setFrmDataErr] = useState(initFrmErr);
  useEffect(() => {}, [frmData, frmDataErr]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataErr(initFrmErr)

    const isSubjectVaild = await shortText(frmData.subject);

      setFrmDataErr({
        ...initFrmErr,
        subject: !isSubjectVaild,
      });

    console.log("Form submit request received", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket"></PageBreadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}
            frmDataErr={frmDataErr}
          ></AddTicketForm>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};
