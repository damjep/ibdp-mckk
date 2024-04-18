import "./nav.css"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
    return (<>
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>IBDP MCKK</Navbar.Brand>

                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">
                                Home
                            </Nav.Link>
                            
                            <NavDropdown>
                                <NavDropdown.Item href="/Bog">
                                    <NavDropdown.ItemText>
                                        Board of Governors
                                    </NavDropdown.ItemText>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/Admin">
                                    <NavDropdown.ItemText>
                                        Administration
                                    </NavDropdown.ItemText>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/Teacher">
                                    <NavDropdown.ItemText>
                                        Teachers
                                    </NavDropdown.ItemText>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <Nav.Link href="/IbCoco">
                                IB Curriculum
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="/Counselling">
                                Counselling
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="/Admission">
                                Admission
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="/Contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                
        </div>
    </>)
}