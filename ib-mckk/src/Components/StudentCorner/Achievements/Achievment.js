import { Accordion, Col, Container, Row } from "react-bootstrap"
import { Data } from "./CohortAlumni"

export const Achievement = () => {
    return (<>
    <div>
        <h1>Our Achievement</h1>
        <img src={require("./Result 2022.jpeg")} alt="Achievements" width={"50%"}/>
    </div>

    <div>
        <HighAchievers />
    </div>
    </>)
}

function HighAchievers() {
    const CohortAlumni = Data();
    const CohortNumber = [CohortAlumni.map((item) => {
        return item.cohort;
    })];

    return (<>
    <div>
        <h1>Our High Achievers</h1>
        <div>
            <p>Cohort {CohortNumber[0]}</p>
            <Accordion>
                {/** Cohort 7 */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Cohort 7
                    </Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row>
                                {/* Map over the array of achievements */}
                                {CohortAlumni.map((item, index) => {
                                    if (item.id === "c7") {
                                        return (
                                            <Col key={index}>
                                                <div>
                                                    <img src={require(`./Alumni/${item.id}/${item.src}`)} alt="C7" width={"50%"} />
                                                </div>
                                            </Col>
                                        );
                                    }
                                    return null;
                                })}
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
                
                {/** Cohort 8 */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Cohort 8
                    </Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row>
                                {/* Map over the array of achievements */}
                                {CohortAlumni.map((item, index) => {
                                    if (item.id === "c8") {
                                        return (
                                            <Col key={index}>
                                                <div>
                                                    <img src={require(`./Alumni/${item.id}/${item.src}`)} alt="C7" width={"50%"} />
                                                </div>
                                            </Col>
                                        );
                                    }
                                    return null;
                                })}
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>

                {/** Cohort 9 */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Cohort 9
                    </Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row>
                                {/* Map over the array of achievements */}
                                {CohortAlumni.map((item, index) => {
                                    if (item.id === "c9") {
                                        return (
                                            <Col key={index}>
                                                <div>
                                                    <img src={require(`./Alumni/${item.id}/${item.src}`)} alt="C7" width={"50%"} />
                                                </div>
                                            </Col>
                                        );
                                    }
                                    return null;
                                })}
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>

                {/** Cohort 10 */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Cohort 10
                    </Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row>
                                {/* Map over the array of achievements */}
                                {CohortAlumni.map((item, index) => {
                                    if (item.id === "c10") {
                                        return (
                                            <Col key={index}>
                                                <div>
                                                    <img src={require(`./Alumni/${item.id}/${item.src}`)} alt="C7" width={"50%"} />
                                                </div>
                                            </Col>
                                        );
                                    }
                                    return null;
                                })}
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
    </>)
}