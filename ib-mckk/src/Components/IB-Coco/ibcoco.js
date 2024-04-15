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
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    </>)
}