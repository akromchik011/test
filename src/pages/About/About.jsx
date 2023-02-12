import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'


function About({render,setRender}) {
    const [data, setData] = useState();
    const selector = useSelector((state)=> {return state})
    useEffect(()=>{
        setData(selector.shop)
    },[render])

    return(
        <div>
            <ul>{
                data && data.map((e,i)=>{
                    <li key={i}>{e.key}</li>
                })
            }</ul>
        </div>
    )
}
export default About