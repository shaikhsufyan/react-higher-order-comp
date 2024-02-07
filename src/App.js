import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
   <>
   
   <Styling comp={Counts} />  
   <Styling comp={Counts} />

    

   </>

  );
}

const Styling = (props) =>{
  return(
    <>
    <div style={{background:"red"}}>
    <props.comp />
    </div>
   
    </>
    
  )
}
 
const Counts = ({red}) =>{
  const [num, setNum] = useState(0)
  return(
    <>
    <div style={{background:red}}>
    <h1>{num}</h1>

      <button onClick={()=>setNum(num+1)}>Add</button>
      </div>
    </>
  )
}

export default App;
