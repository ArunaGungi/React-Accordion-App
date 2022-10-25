import React, { useState } from "react";
import { FcExpand,FcCollapse } from "react-icons/fc";

const Data = ({title, body}) => {

    console.log(title,body);
    const [show,setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div className={show ? "accordian-opened accordian-item" : "accordian-item"} onClick={handleClick}
        //onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        >
            <div className="accordian-title">
                <h4>{title}</h4>
                <p>
                    {show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}
                </p>
            </div>
            <div className="accordian-body">
                {show && <p>{body}</p>}
            </div>
        </div>
    )
}

export default Data;