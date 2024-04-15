import {ReactComponent as IB} from "./ib-home.svg"

export const Main = () => {
    return (
        <>
        <Image/> 
        <Vision />
        </>
    )
}

const Image = () => {
    return (<>
        <div>
            <IB />
        </div>
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