import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

const Iteam = (props) => {
    const [line,setline]=useState(false)
    const strake=()=>{
        setline(true)
    }
    return(
        <li style={{textDecoration:line?"line-through":"none"}}><button onClick={strake}><CloseIcon /></button>{props.element}</li>
    );
}
export default Iteam;