import React from 'react'

const useMemo = () => {
    const [count,setCount]=React.useState(0)
    const [number,setNumber]=React.useState(5)
const factorial=React.useMemo(()=>
           fact(number)
         ,[number]); 
  return (
    <center>
        
        factorial:{factorial}<br/>  
      <button onClick={()=>setCount(count+1)}>Counter Increment</button><br/><br/>
      <button onClick={()=>setNumber(number+1)}>Number Increment</button><br/><br/>
      counter:{count}
    </center>
  )
}
const fact=(number)=>{
    let answer= 1;
    for(var i=number; i>= 1; i--){
        answer=answer * i;
    }
    console.log("calling");
    return answer ;
}


export default useMemo;
