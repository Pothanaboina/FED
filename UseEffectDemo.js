import React,{useState,useEffect} from 'react';
function UseEffectDemo(){
    const[count,setcount]=useState(0);
    const[flag,setflag]= useState(true);
    const handleflag=()=>{
        setflag(!flag);
    }
    useEffect(()=>{setcount(count+1)},[flag]);
    return(
        <div>
            <button onClick={this.handleflag}>flag:{flag}</button>
            <p>flag changes {count} number of times</p>
        </div>
    )
}
export default UseEffectDemo;