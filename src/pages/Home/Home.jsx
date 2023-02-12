import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'




function Home({render,setRender}){
    const [data,setData]= useState()
    const dispatch = useDispatch()

    const hendlerRedux = (e)=>{
        dispatch({
            type:'ADD',
            payload:{'key': 'olma'}
        })
        setRender(!render)
    }
    return(
        <div>
            <h1>Home</h1>
            <input type="text" value={data} onChange={hendlerRedux} />
            <button onClick={hendlerRedux}>ADD</button>
        </div>
    )
}
export default Home