/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap"


const Footer = () => {

    return(
        <Container className="bg-primary footer" style={{height: "100px"}} fluid>
            <Row>
                <Col xs={4}>
                <a href="#">Contact Us</a>
                </Col>
                <Col xs={4}>
                    <a href="#">Address</a>
                </Col>
                <Col xs={4}>
                    <a href="#">Something</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;