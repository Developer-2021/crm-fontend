import { React } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import  tickets from "../../assets/data/dummy-tickets.json";

import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";



export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            </Col>
        </Row>
      <Row>
        <Col className="text-center mt-5 mb-2 ">
          <Button
            variant="info"
            style={{ "font-size": "2rm", padding: "10px 30px" }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
        <div>Total ticket: 50</div>
        <div>Pending ticket: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
        Recently Added tickeds
        </Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
            <TicketTable>{tickets}</TicketTable> 
        </Col>
      </Row>
    </Container>
  );
};
