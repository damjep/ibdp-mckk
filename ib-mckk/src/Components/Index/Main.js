import {ReactComponent as IB} from "./ib-home.svg"
import "./Main.css"
import { motion } from "framer-motion"

export const Main = () => {
    return (
        <>
        <motion.div
            animate={{rotate:360}}
        >
            <div className="main-container">
            <div className="image-main-div">
                <Image/>
            </div>
        </div>
        </motion.div>
        
        <Vision />
        </>
    )
}

const Image = () => {
    return (<>
        <IB />
    </>)
}

const Vision  = () => {
    return (<>
    <div>
        <h1>Vision</h1>
        <p>Excellence, Harmony , Leadership</p>
    </div>
    </>)
}