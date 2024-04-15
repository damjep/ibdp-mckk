import { FaPhone  } from "@react-icons/all-files/fa/FaPhone";
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope"
import "./nav.css"

export default function Nav() {
    return (
        <>
            <div className="nav">
                {/** Phone */}
                <div className="phone">
                    <FaPhone size={"15"} color="#FFFFFF"/>
                    <a href="tel:+605-776 1680">+605-776 1680</a>
                </div>

                {/** Mail */}
                <div>
                    <FaEnvelope size={"15"} color="#FFFFFF"/>
                    <a href="mailto:ibc@mckk.edu.my">ibc@mckk.edu.my</a>
                </div>
            </div>
        </>
    )
}