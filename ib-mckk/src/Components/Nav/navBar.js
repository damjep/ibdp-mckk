import { useNavigate } from "react-router";
import "./nav.css"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
    const navigate = useNavigate();

    return (<>
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>IBDP MCKK</Navbar.Brand>

                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">
                                <button onClick={navigate("/")}>Home</button>
                            </Nav.Link>
                            
                            <NavDropdown>
                                <NavDropdown.Item href="/Bog">
                                    <NavDropdown.ItemText>
                                        <button onClick={navigate("/Bog")}>Board of Governors</button>
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

                        <Nav>
                            <Nav.Link href="/Achievement">
                                Achievement
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="/Student">
                                Student's Corner
                            </Nav.Link>

                            <NavDropdown>
                                <NavDropdown.Item href="/Facilities">
                                    <NavDropdown.ItemText>
                                        Facilities
                                    </NavDropdown.ItemText>
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/Activities">
                                    <NavDropdown.ItemText>
                                        Activities
                                    </NavDropdown.ItemText>
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/Graduation">
                                    <NavDropdown.ItemText>
                                        Graduation
                                    </NavDropdown.ItemText> 
                               </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                
        </div>
    </>)
}