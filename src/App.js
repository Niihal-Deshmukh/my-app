import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";

function App() {

 const [Mode, setMode] = useState('light');
 const [alert,setAlert] = useState(null);
 const [modeLabel,setModeLabel] = useState('Enable Dark Mode');

 const toggleMode = () =>{

     if(Mode==='dark'){
       setMode('light');
       document.body.style.backgroundColor = 'white';
       setModeLabel('Enable Dark Mode');      
     }else{
      setMode('dark');
      document.body.style.backgroundColor = '#013366';
      setModeLabel('Disable Dark Mode');
     }
  
 }


    const showAlert = (type,message) =>{
   
        setAlert({
           type:type,
            message:message
          })

      setTimeout(function() {
	  			setAlert(null);
	  	}, 1500);

    }

  return (
<>

<Router>
  <Navbar title="TextUtils"  aboutText="About" mode={Mode} toggleMode={toggleMode} modeLabel={modeLabel}></Navbar>
  <Alert alert={alert}/> 
<div className='container my-3'>
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>} />
        <Route path="/about" element={<About />} />
      </Routes> 
{/* <About/> */}
</div>
</Router>
</>
  );
}

export default App;
