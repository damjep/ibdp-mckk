import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./nav.css"

export const Nav = () => {
    return (<>
        <div>
            <Dropdown >
                <Dropdown.Toggle id="test" >
                    <Link to='/'>
                        Home
                    </Link>
                </Dropdown.Toggle>

                <Dropdown.Menu id="test">
                    <Dropdown.Item>
                        <Link to="/Bog">
                            Board of Governors
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/Admin">
                            Administration
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/Teacher">
                            Teachers
                        </Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle>
                    <Link to="/IbCoco">
                        IB Curriculum
                    </Link>
                </Dropdown.Toggle>
            </Dropdown>
            <button>Counselling</button>
            <button>Admission</button>
            <button>Student's Corner</button>
            <button>Resources</button>
            <button>Contact Us</button>
        </div>
    </>)
}