import { Accordion, Col, Container, Row } from "react-bootstrap"
import { C7 } from "./c7"

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
    const C7Alumni = C7();

    return (<>
    <div>
        <h1>Our High Achievers</h1>
        <div>
            <Accordion>
                <Accordion.Header>
                    Cohort 7
                </Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            {/* Map over the array of achievements */}
                            {C7Alumni.map((item, index) => (
                                <Col>
                                    <div key={index}>
                                        <img src={require(`./Alumni/C7/${item.src}`)} alt="C7" width={"50%"}/>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion>
        </div>
    </div>
    </>)
}