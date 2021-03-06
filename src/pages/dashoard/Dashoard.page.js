import { React } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";

import tickets from "../../assets/data/dummy-tickets.json";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard"></PageBreadcrumb>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2 ">
          <Button
            variant="info"
            style={{ fontSize: "2rm", padding: "10px 30px" }}
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
        <Col className="mt-2">Recently Added tickeds</Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets}></TicketTable>
        </Col>
      </Row>
    </Container>
  );
};
