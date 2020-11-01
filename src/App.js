import React,{useState} from 'react';
import './App.css';
import CommandPanel from './CommandPanel.js';
import TextField from '@material-ui/core/TextField';
import Header from './header';
import parser from './parser';

function App() {
  const [converted, setConverted] = useState("");
  const onInput= (event)=>{setConverted(parser(event.target.value))}

  return (
    <div>
      <Header />
  
    <div className="App">
    
        {/*      <TextField id="standard-basic" label="Standard" />

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  */}      
    
    
        <div className="cpanel"><CommandPanel updateConverted={onInput} autoFocus={true} Heading={"NPM"} placeholder={"Enter your npm command"}/></div>
        
      
      <div className="cpanel"><CommandPanel value={converted} Heading={"YARN"}/></div>  
    </div>
    </div>
  );
}

export default App;
