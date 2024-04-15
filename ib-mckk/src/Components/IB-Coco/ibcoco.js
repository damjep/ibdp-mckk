import { useState } from "react"
import "./coco.css"
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export const IbCoco = () => {
    const [show, setShow] = useState(false);

    return(<>
        <span id="coco" onMouseEnter={() => setShow(true)}></span>

        <div>
            <Offcanvas show={show} onHide={() => setShow(!show)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        IB Curriculum
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <button>
                        <Link to="/About">
                            About Us
                        </Link>
                    </button>

                    <button>
                        <Link to="/LearnerProfile">
                            Learner Profile
                        </Link>
                    </button>

                    <button>
                        <Link to="/Core">
                            IB Core
                        </Link>
                    </button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    </>)
}